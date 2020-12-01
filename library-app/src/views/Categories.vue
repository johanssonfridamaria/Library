<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Categories</h1>
    <div class="py-5 mb-4 col-md-6">
      <h2 class="text-left mb-4">Add a new Category</h2>
      <addCategory @add-category="addCategory" :categories="categories" />
    </div>
    <div class="col-12">
      <h2 class="text-left mb-4">Added categories</h2>
      <categoriesTable
        :categories="categories"
        @delete-category="delCategory"
      />
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
      apiURI: 'http://localhost:8000/api/categories',
    };
  },
  methods: {
    //Fetches categories from DB with api
    fetchCategories() {
      fetch(this.apiURI)
        .then(response => response.json())
        // .then(this.handleErrors)
        .then(categoriesInDb => {
          this.categories = categoriesInDb;
        });
      // .catch(err => console.log(err));
    },
    addCategory(input) {
      fetch(this.apiURI + '/new', {
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
    delCategory(id) {
      fetch(this.apiURI + `/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => this.fetchCategories());
    },
    // handleErrors(response) {
    //   if (!response.ok) throw new Error(response.error);
    //   return response;
    // },
  },
  //Fetches categories from DB when app starts
  created() {
    this.fetchCategories();
  },
};
</script>

<style>
</style>
