<template>
  <ul class="">
    <li class="nav-item">
      <router-link :to="{ name: 'Home' }" exact class="nav-link">
        Add Library Item
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'Categories' }" exact class="nav-link">
        Edit Library Item
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'LibraryItems' }" exact class="nav-link">
        Check in/Check out Library item
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>