
<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2024</span>
    </div>

    <div class="d-flex">
      <button class="btn btn-danger mx-2 d-flex gap-2 align-items-center">
        Borrar
        <font-awesome-icon :icon="['fas', 'trash-alt']" />
      </button>
      <button class="btn btn-primary d-flex gap-2 align-items-center">
        Subir imagen
        <font-awesome-icon :icon="['fas', 'upload']" />
      </button>
    </div>
  </div>

  <hr class="mt-1 mb-3">

  <div class="d-flex flex-column px-3 h-75">
    <textarea name="" id="" placeholder="¿Qué sucedió hoy?"></textarea>
  </div>
  
  <img src="https://i.pinimg.com/originals/30/05/2e/30052e9d9e8f15ef76140a57fb902b7e.jpg" alt="imagen" class="img-thumbnail mt-2">
  <FabButton icon="floppy-disk" />

</template>

<script>
import { defineAsyncComponent } from 'vue';

  export default {
    name: 'EntryView',
    components: {
      FabButton: defineAsyncComponent(() => import('../components/FabButton.vue'))
    } 
  }
</script>

<style lang="scss" scoped>
textarea {
  border: 1px solid #ccc;
  width: 100%;
  resize: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  outline: none;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 0.8rem;
  transition: all 0.2s ease-in;
}

img {
  width: 200px;
  /* height: 200px; */
  position: fixed;
  object-fit: cover;
  bottom: 150px;
  right: 20px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>