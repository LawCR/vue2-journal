<template>
  <NavbarDaybook />
  <div class="d-flex">
    <div class="col-12 col-md-4  col-xl-3">
      <EntryList />
    </div>
    <div class="col-0 d-none d-md-block col-md-8 col-xl-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

  export default {
    name: 'DayBookLayout',
    components: {
      NavbarDaybook: defineAsyncComponent(() => import('../components/NavbarDaybook.vue')),
      EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>