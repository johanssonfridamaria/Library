<template>
  <div class="container">
    <h1>Categories</h1>
    <addCategory @add-category="add" :categories="categories" />
    <categoriesTable :categories="categories" />
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

<style></style>
