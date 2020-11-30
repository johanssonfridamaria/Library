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
  </div>
</template>

<script>
export default {
  name: 'LibraryTabs',
};
</script>

<style scoped>
.router-link-active {
  color: white;
}
</style>