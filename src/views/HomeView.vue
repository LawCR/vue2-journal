<script>
  export default {
    name: 'HomeView',
    methods: {
      goToDaybook() {
        this.$router.push({ name: 'no-entry' });
      }
    }
  }
</script>

<template>
  <main>
    <h1>Home Page</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>
  </main>
</template>
