<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Library Items</h1>
    <div class="py-5 mb-4 col-md-8">
      <h2 class="text-left mb-4">Manage Library Items</h2>
      <addCategory @add-category="add" :categories="categories" />
    </div>
    <div class="col-12">
      <h2 class="text-left mb-4">Library</h2>
      <categoriesTable :categories="categories" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryItems',
  components: {},
};
</script>

<style></style>
