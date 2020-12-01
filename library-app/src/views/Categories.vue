<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Categories</h1>
    <div class="py-5 mb-4 col-md-6">
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
      categories: [],
    };
  },
  methods: {
    add(input) {
      fetch('http://localhost:8000/api/categories/new', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          name: input,
        }),
      })
        .then(response => response.json())
        .then(() => this.fetchCategories());
    },
    //Fetches categories from api
    fetchCategories() {
      fetch('http://localhost:8000/api/categories')
        .then(response => response.json())
        .then(categoriesInDb => {
          this.categories = categoriesInDb;
        });
    },
  },
  //Fetches categories from DB when app starts
  created() {
    this.fetchCategories();
  },
};
</script>

<style>
</style>
