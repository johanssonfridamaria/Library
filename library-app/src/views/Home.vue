<template>
  <div class="container py-4">
    <div class="mb-4">
    <h1 class="py-4">Welcome to the Library</h1>
    <h5>Pls click on a link bellow to manage the Items in the Library</h5>
    </div>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item ">
          <router-link :to="{ name: 'LibraryTable' }" exact class="nav-link">
            Manage Library Items
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Categories' }" exact class="nav-link">
            Manage Categories
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
};
</script>
<style scoped>
a {
  color:#333;
}
a:hover {
  color: #666;
}
</style>
