<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Categories</h1>
    <div v-if="!edit" class="py-5 mb-4 col-md-6">
      <h2 class="text-left mb-4">Add a new Category</h2>
      <addCategory :categories="categories" />
    </div>

    <div v-if="edit" class="py-5 mb-4 col-md-6">
      <h2 class="text-left mb-4">Edit Category</h2>
      <editCategory
        :apiURI="apiURI"
        :edit="edit"
        :copyCategory="copyCategory"
      />
    </div>
    <div class="col-12">
      <div class="mb-4">
        <h2 class="text-left mb-4">Added Categories</h2>
        <p>
          Pls note that you can only delete a Category that doesn't contain any
          Library Items.
        </p>
      </div>
      <categoriesTable :categories="categories" :edit="edit"/>
    </div>
  </div>
</template>

<script>
import AddCategory from '../components/Categories/AddCategory';
import CategoriesTable from '../components/Categories/CategoriesTable';
import EditCategory from '../components/Categories/EditCategory';
import EventBus from '../event-bus';

export default {
  name: 'Categories',
  components: {
    AddCategory,
    CategoriesTable,
    EditCategory,
  },
  data() {
    return {
      categories: [],
      apiURI: 'http://localhost:8000/api/categories',
      edit: false,
      copyCategory:'',
    };
  },
  methods: {
    //Fetches categories from DB with api
    fetchCategories() {
      fetch(this.apiURI)
        .then(response => response.json())
        .then(categoriesInDb => {
          this.categories = categoriesInDb;
        });
    },
  },
  created() {
    this.fetchCategories();
  },
  mounted() {
    EventBus.$on('categoryUpdated', (category) => {
      this.edit = false
      this.categories= this.categories.map(x =>
        category._id === x._id ? category : x
      )
    });
    EventBus.$on('editCategory', (category, newEdit) => {
      this.edit = newEdit;
      this.copyCategory= category;
    });
    EventBus.$on('addCategory', category => {
      this.categories.push(category);
    });
    EventBus.$on('delCategory', id => {
      this.categories = this.categories.filter(category => category._id !== id);
    });
  },
};
</script>

<style>
</style>
