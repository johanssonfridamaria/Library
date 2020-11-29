<template>
  <tr>
    <th scope="row">{{ category.id }}</th>
    <td>{{ category.categoryName }}</td>
    <td>1/4</td>
    <td><button class="btn btn-danger">Remove</button></td>
  </tr>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: ['category'],
};
</script>

<style>
</style>