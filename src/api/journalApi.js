import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-app-journal-default-rtdb.firebaseio.com'
})

export default journalApi