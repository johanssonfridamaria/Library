<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand headline" href="/">LIBRARY</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" exact class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Categories' }" exact class="nav-link">
            Categories
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'LibraryTable' }" exact class="nav-link">
            Library Items
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Employees' }" exact class="nav-link">
            Employees
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.router-link-active {
  color: white;
}
</style>
