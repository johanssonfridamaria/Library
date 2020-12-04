<template>
  <div id="app">
    <appNavbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
};
</script>

<style>
td,
th {
  vertical-align: middle !important;
}
.btn-table {
  font-size: 0.8rem;
  background-color: transparent;
  border: transparent;
  padding: 0;
}
@media (max-width: 991.98px) {
  table {
    font-size: 0.8rem;
  }
}
</style>
