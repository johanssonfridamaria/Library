<template>
  <tr class="align-items-center">
    <th scope="row">{{ category._id }}</th>
    <td>{{ category.name }}</td>
    <td>{{ libraryItemsinCat.length }}</td>
    <td><button class="btn btn-primary" @click="editCategory">Edit</button></td>
    <td>
      <button class="btn btn-danger" @click="delCategory">Remove</button>
      <p v-if="error" class="text-danger pt-2 mb-0">{{ this.error }}</p>
    </td>
  </tr>
</template>

<script>
import EventBus from '../../event-bus';

export default {
  name: 'CategoryItem',
  props: ['category', 'edit', 'errorMessage'],
  data() {
    return {
      newEdit: this.edit,
      libraryItemsinCat: [],
      apiURI: 'http://localhost:8000/api/categories',
      error: '',
    };
  },
  methods: {
    editCategory() {
      this.newEdit = true;
      EventBus.$emit('editCategory', this.category, this.newEdit);
    },
    fetchNoOfLibraryItemsinCategory(id) {
      fetch(this.apiURI + `/${id}/libraryItems`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          this.libraryItemsinCat = data;
        });
    },
    delCategory() {
      fetch(this.apiURI + `/${this.category._id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(res => {
          if (res.statusCode === 200) {
            EventBus.$emit('delCategory', this.category._id);
            this.error = null;
          } else {
            this.error = res.message;
          }
        });
    },
  },
  mounted() {
    this.fetchNoOfLibraryItemsinCategory(this.category._id);
  },
};
</script>

<style>
/* .editRow {
  background-color: rgba(0, 0, 0, 0.075);
} */
</style>