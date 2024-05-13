<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white " to="/daybook">
      <img alt="Vue logo" class="d-inline-block align-text-top mx-2" src="@/assets/logo.svg" width="24" height="24" />
      Daybook
    </a>
    <!-- <router-link class="navbar-brand text-white" to="/daybook">Daybook</router-link>
    <router-link class="navbar-brand text-white" to="/daybook/new">New entry</router-link> -->


    <div class="d-flex">
      <button class="btn btn-outline-light mx-2" @click="logout">
        <font-awesome-icon :icon="['fas', 'fa-sign-out-alt']" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>