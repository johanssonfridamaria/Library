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
</style>
