<template>
  <div>
    <h1>Categories</h1>
    <addCategory @add-category="add" />
  </div>
</template>

<script>
import AddCategory from '../components/Categories/AddCategory';

export default {
  name: 'Categories',
  components: {
    AddCategory,
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
    add(categoryTitle) {
      let category = {
        id: Date.now(),
        title: categoryTitle,
      };
      this.categories.push(category);
    },
  },
};
</script>

<style></style>
