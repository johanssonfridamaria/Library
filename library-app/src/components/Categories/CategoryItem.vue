<template>
  <tr class="align-items-center">
    <th scope="row">{{ category._id }}</th>
    <td>{{ category.name }}</td>
    <td>{{ category.numberOfLibraryItems }}</td>
    <td><button class="btn btn-primary">Edit</button></td>
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
export default {
  name: 'CategoryItem',
  props: ['category'],
};
</script>

<style></style>