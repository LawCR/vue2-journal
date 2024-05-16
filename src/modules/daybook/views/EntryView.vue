
<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between align-items-center p-2">
      <div class="d-flex align-items-center gap-2 ">
        <!-- <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2024</span> -->
        <font-awesome-icon 
          :icon="['fas', 'arrow-left']" 
          class="d-block d-md-none" 
          @click="$router.push({ name: 'no-entry' })"
        />
        <span class="fw-medium">{{fullDate}}</span>
      </div>
  
      <div class="d-flex">
        <input type="file" @change="onSelectedImage" ref="imageSelector" v-show="false" accept="image/*">
        <button v-if="entry.id" @click="onDeleteEntry" class="btn btn-danger mx-2 d-flex gap-2 align-items-center">
          <span class="d-none d-md-block">Borrar</span> 
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
        </button>
        <button class="btn btn-primary d-flex gap-2 align-items-center">
          <span @click="onSelectImage" class="d-none d-md-block">Subir imagen</span>
          <font-awesome-icon :icon="['fas', 'upload']" />
        </button>
      </div>
    </div>
  
    <hr class="mt-1 mb-3">
  
    <div class="d-flex flex-column px-3 ">
      <textarea 
        v-model="entry.text" 
        rows="12"
        placeholder="¿Qué sucedió hoy?"
      ></textarea>
    </div>
  
    <img v-if="entry.picture && !localImage" :src="entry.picture" alt="imagen" class="img-thumbnail mt-2">
    <img v-if="localImage" :src="localImage" alt="imagen" class="img-thumbnail mt-2">
  </template>
  <FabButton 
    icon="floppy-disk" 
    @on:click="saveEntry"
    :disabled="isLoadingEntry"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapActions, mapState } from 'vuex';
import getDayMonthYearText from '@/modules/shared/helpers/getDayMonthYearText';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import uploadImage from '@/modules/shared/helpers/uploadImage'

  export default {
    name: 'EntryView',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    components: {
      FabButton: defineAsyncComponent(() => import('../components/FabButton.vue'))
    },
    data() {
      return {
        entry: null,
        localImage: null,
        file: null
      }
    },
    methods: {
      ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
      loadEntry() {
        this.entry = null;
        this.localImage = null;
        this.file = null;
        let entry;
        if (this.id === 'nuevo') {
          entry = {
            text: '',
            date: new Date().getTime(),
            picture: null
          }
        } else {
          entry = this.getEntryById(this.id)
          if (!entry) return this.$router.push({ name: 'no-entry' });
        }
        this.entry = entry;
      },
      async saveEntry() {

        new Swal({
          title: 'Cargando...',
          text: 'Espere por favor',
          allowOutsideClick: false,
        });

        Swal.showLoading();

        const picture = await uploadImage(this.file);
        this.entry.picture = picture || this.entry.picture;

        if (!this.entry.text) return;
        let messageData = {
          title: '',
          text: ''
        }
        if (this.entry.id) {
          messageData.title = 'Entrada actualizada';
          messageData.text = 'La entrada se actualizó correctamente';
          await this.updateEntry({ ...this.entry });
        } else {
          const { ok, message, id } = await this.createEntry({ text: this.entry.text, picture: this.entry.picture });
          if (ok) {
            messageData.title = 'Entrada guardada';
            messageData.text = 'La entrada se guardó correctamente';
            this.$router.push({ name: 'entry', params: { id } });
          } else {
            messageData.title = 'Error';
            messageData.text = 'Ocurrió un error al guardar la entrada';
            console.log(message);
          }
        }
        this.file = null;
        this.localImage = null;

        Swal.fire({
          title: messageData.title,
          text: messageData.text,
          icon: 'success',
          timer: 2500,
          showConfirmButton: false
        });
      },
      async onDeleteEntry() {
        // const isConfirmed = confirm('¿Estás seguro de borrar la entrada?');
        const { isConfirmed } = await Swal.fire({
          title: '¿Está seguro que desea eliminar la entrada?',
          text: 'No podrás recuperar la entrada si la borras',
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Sí, estoy seguro',
        });
        if (isConfirmed) {
          new Swal({
            title: 'Cargando...',
            text: 'Espere por favor',
            allowOutsideClick: false,
          });

          Swal.showLoading();
          await this.deleteEntry(this.entry.id);
          this.$router.push({ name: 'no-entry' });
          Swal.fire({
            title: 'Entrada eliminada',
            text: 'La entrada se eliminó correctamente',
            icon: 'success',
            showConfirmButton: false
          });
        }
      },
      onSelectedImage(e) {
        const file = e.target.files[0];
        if (!file) {
          this.localImage = null;
          this.file = null;
          return;
        }

        this.file = file;
        const reader = new FileReader(); // API de JS para leer archivos
        // reader.readAsDataURL(file); // Leer el archivo como una URL
        reader.onload = () => {
          this.localImage = reader.result;
        }
        reader.readAsDataURL(file);
      },
      onSelectImage() {
        this.$refs.imageSelector.click()
      }
    },
    created() {
      this.loadEntry();
    },
    computed: {
      ...mapGetters('journal', ['getEntryById']),
      ...mapState('journal', ['isLoadingEntry']),
      // entryById() {
      //   return this.getEntryById(this.id)
      // },
      fullDate() {
        return getDayMonthYearText(new Date(this.entry.date))
      },
    },
    watch: {
      id() {
        this.loadEntry();
      }
    }
   
  }
</script>

<style lang="scss" scoped>
textarea {
  border: 1px solid #ccc;
  width: 100%;
  resize: none;
  /* font-size: 1rem; */
  /* font-family: 'Roboto', sans-serif; */
  outline: none;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 0.8rem;
  transition: all 0.2s ease-in;
}

img {
  width: 200px;
  max-height: 250px;
  position: fixed;
  object-fit: cover;
  bottom: 150px;
  right: 20px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>