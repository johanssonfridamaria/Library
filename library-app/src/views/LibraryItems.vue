<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Library Items</h1>
    <div class="py-5 row">
      <div class="col-md-3 bg-light">
        <libraryTabs />
      </div>
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import LibraryTabs from '../components/LibraryItems/LibraryTabs';

export default {
  name: 'LibraryItems',
  components: {
    LibraryTabs,
  },
};
</script>

<style></style>
