<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Categories</h1>
    <div class="py-5 mb-4 col-md-8">
      <h2 class="text-left mb-4">Add a new Category</h2>
      <addCategory @add-category="add" :categories="categories" />
    </div>
    <div class="col-12">
      <h2 class="text-left mb-4">Added categories</h2>
      <categoriesTable :categories="categories" />
    </div>
  </div>
</template>

<script>
import AddCategory from '../components/Categories/AddCategory';
import CategoriesTable from '../components/Categories/CategoriesTable';

export default {
  name: 'Categories',
  components: {
    AddCategory,
    CategoriesTable,
  },
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
  methods: {
    add(input) {
      let category = {
        id: Date.now(),
        categoryName: input,
      };
      this.categories.push(category);
    },
  },
};
</script>

<style>
</style>
