<template>
  <div class="navbar navbar-light bg-light">
    <ul class="nav flex-column navbar-nav text-left">
      <li class="nav-item">
        <router-link :to="{ name: 'LibraryTable' }" exact class="nav-link">
          Library Items
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'AddItem' }" exact class="nav-link">
          Add Library Item
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LibraryNav',
};
</script>

<style scoped>
.router-link-active {
  color: white;
}
</style>