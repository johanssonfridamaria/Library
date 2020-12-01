<template>
  <tr class="align-items-center">
    <th scope="row">{{ category._id }}</th>
    <td>{{ category.name }}</td>
    <td>{{ category.numberOfLibraryItems }}</td>
    <td><button class="btn btn-primary" @click="editCategory">Edit</button></td>
    <td>
      <button
        class="btn btn-danger"
        @click="$emit('delete-category', category._id)"
      >
        Remove
      </button>
    </td>
  </tr>
</template>

<script>
import EventBus from '../../event-bus';
export default {
  name: 'CategoryItem',
  props: ['category'],
  methods: {
    editCategory() {
      EventBus.$emit('editCategory', this.category);
    },
  },
};
</script>

<style></style>