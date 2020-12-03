<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Library Items</h1>
    <div class="py-5 row">
      <div class="col-md-3 bg-light">
        <libraryNav />
      </div>
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import LibraryNav from '../components/LibraryItems/LibraryNav';

export default {
  name: 'LibraryItems',
  components: {
    LibraryNav,
  },
};
</script>

<style></style>
