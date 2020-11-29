<template>
  <div class="table-responsive">
    <div v-if="categories.length">
      <table class="table table-striped table-sm">
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