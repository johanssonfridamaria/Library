<template>
  <div>
    <h1>Categories</h1>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  components: {},
  data() {
    return {
      categories: [
        { id: 1, categoryName: 'Fiction' },
        { id: 2, categoryName: 'Biography' },
        { id: 3, categoryName: 'Romance' },
        { id: 4, categoryName: 'Thriller' },
      ],
    };
  },
};
</script>

<style></style>
