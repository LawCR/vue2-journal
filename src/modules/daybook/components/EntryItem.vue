<template>
  <div class="entry-container mb-3 pointer py-2 px-3" @click="$router.push({ name: 'entry', params: { id: entry } })">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">14</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies aliquam. Nullam nec purus nec nunc ultricies aliquam.</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['entry']
  }
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 10px;
  transition: all 0.2s ease-in;

  &:hover {
    /* background-color: #f0f0f0; */
    background-color: lighten($color: grey, $amount: 45)
  }
}

.entry-description {
  font-size: 12px;
  color: #333;
}
</style>