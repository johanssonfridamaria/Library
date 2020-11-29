<template>
  <div v-if="categories.length">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Number of Library Items</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <categoryItem
          v-for="_category in categories"
          :key="_category.id"
          :category="_category"
        />
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1>No categories added</h1>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem';

export default {
  name: 'CategoriesTable',
  props: ['categories'],
  components: {
    CategoryItem,
  },
};
</script>

<style>
</style>