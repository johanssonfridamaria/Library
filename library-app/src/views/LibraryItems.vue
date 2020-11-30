<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <libraryNav />
      </div>
      <div class="col-9">
        <router-view />
        <h2 class="text-left mb-4">Library</h2>
        <libraryTable />
      </div>
    </div>
  </div>
</template>

<script>
import LibraryNav from '../components/LibraryItems/LibraryNav';
import LibraryTable from '../components/LibraryItems/LibraryTable';

export default {
  name: 'LibraryItems',
  components: {
    LibraryNav,
    LibraryTable,
    // data() {
    //   return {
    //     libraryItems: [],
    //   };
    // },
  },
};
</script>

<style></style>
