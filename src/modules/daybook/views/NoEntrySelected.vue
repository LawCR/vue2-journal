<template>
  
  <div class="d-block d-md-none">
    <EntryList />
  </div>

  <div class="d-none d-md-flex container-no-entry justify-content-center align-items-center">
    <div class="text-center">
      <font-awesome-icon :icon="['fas', 'book']" class="fa-5x text-secondary mb-2" />
      <h4 class="">No hay ninguna entrada seleccionada</h4>
      <p class="fw-light">Por favor selecciona una entrada o crea una nueva</p>
    </div>
    <FabButton @on:click="createNewEntry" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'NoEntrySelected',
  components: {
    FabButton: defineAsyncComponent(() => import('../components/FabButton.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  },
  methods: {
    createNewEntry() {
      this.$router.push({ name: 'entry', params: { id: 'nuevo' } });
    }
  }
}
</script>

<style lang="scss" scoped>
.container-no-entry {
  height: calc(100vh - 56px);
}
</style>