<template>
  <div class="entry-list-container">
    <div class="px-3 py-3">
      <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar entrada" />
    </div>

    <div class="mb-3 d-flex flex-column">
      <button class="btn btn-primary mx-3 d-flex gap-2 align-items-center justify-content-center fw-medium"
        @click="$router.push({ name: 'entry', params: { id: 'nuevo' } })">
        <font-awesome-icon :icon="['fas', 'plus-circle']" />
        Nueva entrada
      </button>
    </div>

    <div class="entry-scrollarea">
      <EntryItem v-for="entry in entriesByTerm" :entry="entry" :key="entry.id" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';


export default {
  components: {
    EntryItem: defineAsyncComponent(() => import('./EntryItem.vue'))
  },
  data() {
    return {
      searchTerm: ''
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntriesByTerm']),
    entriesByTerm() {
      return this.getEntriesByTerm(this.searchTerm);
    }
  },
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
  padding: 4px 12px 8px 12px;
  height: calc(100vh - 180px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }

  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
    border: 1px solid #f1f2f3;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #b3b3b3;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
}
</style>
