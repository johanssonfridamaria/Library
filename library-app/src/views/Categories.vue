<template>
  <div class="container">
    <h1 class="py-4 border-bottom text-left">Categories</h1>
    <!-- v-if="!edit" -->
    <div class="py-5 mb-4 col-md-6">
      <h2 class="text-left mb-4">Add a new Category</h2>
      <addCategory
        @add-category="addCategory"
        :categories="categories"
        :errorMessage="errorMessage"
      />
    </div>
    <!-- v-if="edit" -->
    <div class="py-5 mb-4 col-md-6">
      <h2 class="text-left mb-4">Edit Category</h2>
      <editCategory
        :errorMessage="errorMessage"
        :apiURI="apiURI"
        @update-table="updateTable"
        @handle-errors="handleErrors"
        :edit="edit"
      />
    </div>
    <div class="col-12">
      <h2 class="text-left mb-4">Added categories</h2>
      <categoriesTable
        :categories="categories"
        @delete-category="delCategory"
        :edit="edit"
      />
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
      errorMessage: '',
      edit: false,
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
        .then(this.handleErrors)
        .then(() => this.fetchCategories());
    },
    delCategory(id) {
      fetch(this.apiURI + `/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => this.fetchCategories());
    },
    handleErrors(res) {
      if (res.statusCode !== 201 || res.statusCode !== 200) {
        this.errorMessage = res.message;
      }
      return res;
    },
    updateTable() {
      this.fetchCategories();
      this.edit = false;
    },
  },
  created() {
    this.fetchCategories();
  },
  mounted() {
    EventBus.$on('editCategory', (category, newEdit) => {
      this.edit = newEdit;
    });
  },
};
</script>

<style>
</style>
