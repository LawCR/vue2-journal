<template>
  <div class="entry-list-container">
    <div class="px-3 py-3"> 
      <input v-model="search" type="text" class="form-control" placeholder="Buscar entrada" />
    </div>

    <div class="entry-scrollarea">
      <EntryItem
        v-for="item in 100"
        :entry="item"
        :key="item"
      />
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';

  export default {
    components: {
      EntryItem: defineAsyncComponent(() => import('./EntryItem.vue'))
    },
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  /* padding: 0.5rem; */
}
.entry-list-container {
  border-right: 1px solid #ccc;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  padding: 0px 12px 8px 12px;
  height: calc(100vh - 128px);
  overflow-y: auto;
}
</style>