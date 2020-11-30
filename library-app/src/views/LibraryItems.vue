<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <libraryTabs />
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
import LibraryTabs from '../components/LibraryItems/LibraryTabs';
import LibraryTable from '../components/LibraryItems/LibraryTable';

export default {
  name: 'LibraryItems',
  components: {
    LibraryTabs,
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
