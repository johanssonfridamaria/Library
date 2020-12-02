<template>
  <tr class="align-items-center">
    <th scope="row">{{ category._id }}</th>
    <td>{{ category.name }}</td>
    <td>{{ libraryItemsinCat.length }}</td>
    <td><button class="btn btn-primary" @click="editCategory">Edit</button></td>
    <td>
      <button
        class="btn btn-danger"
        @click="$emit('delete-category', category._id)"
      >
        Remove
      </button>
      <p v-if="errorMessage !== ''">{{ this.errorMessage }}</p>
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
      newEdit: this.error,
      libraryItemsinCat: [],
      apiURI: 'http://localhost:8000/api/categories',
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