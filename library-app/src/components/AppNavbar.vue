<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }" exact> Home </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Categories' }" exact>
          Categories
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'LibraryItems' }" exact>
          Library Items
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Employees' }" exact> Employees </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style>
.router-link-active {
  color: green;
}
</style>
