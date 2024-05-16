import axios from 'axios'

const uploadImage = async(file) => {
  if (!file) return

  try {
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    
    const formData = new FormData()
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('file', file)

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const { data } = await axios.post(url, formData)
    return data.secure_url
  } catch (error) {
    console.log(error)
    console.log('Error al subir la imagen')
    return null
  }
}

export default uploadImage