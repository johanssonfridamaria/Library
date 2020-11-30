<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <router-link :to="{ name: 'AddItem' }" exact class="nav-link">
        Add Library Item
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'EditItem' }" exact class="nav-link">
        Edit Library Item
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'LendItem' }" exact class="nav-link">
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