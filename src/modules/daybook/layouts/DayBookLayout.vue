<template>
  <NavbarDaybook />
  
  <div v-if="isLoadingEntries" class="container-loading">
    <div class="row justify-content-md-center ">
      <div class="col-3 alert alert-info text-center mt-5 w-100">
        <h3 class="mb-2">
          <font-awesome-icon icon="fa-spinner" spin />
        </h3>
        Espere por favor...
      </div>
    </div>
  </div>

  <div v-else class="d-flex">
    <div class="col-0 d-none d-md-block col-md-4 col-xl-3">
      <EntryList />
    </div>
    <!-- <div class="col-0 d-none d-md-block col-md-8 col-xl-9"> -->
    <div class="col-12 col-md-8 col-xl-9 h-100 ">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

  export default {
    name: 'DayBookLayout',
    components: {
      NavbarDaybook: defineAsyncComponent(() => import('../components/NavbarDaybook.vue')),
      EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
    },
    computed: {
      ...mapState('journal', ['isLoadingEntries'])
    },
    methods: {
      ...mapActions('journal', ['loadEntries'])
    },
    created() {
      this.loadEntries();
    }
  }
</script>

<style lang="scss" scoped>
  .container-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
  }
</style>