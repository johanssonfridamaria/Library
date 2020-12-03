<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Library Items</h1>
    <div class="py-3">
      <div class="">
        <libraryNav />
      </div>
      <div class="mt-5 container">
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
