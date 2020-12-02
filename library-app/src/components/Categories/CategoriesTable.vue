<template>
  <div class="table-responsive">
    <div v-if="categories.length">
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Number of Library Items</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <categoryItem
            :errorMessage="errorMessage"
            v-for="category in categories"
            :key="category.id"
            :category="category"
            :edit="edit"
            @delete-category="$emit('delete-category', category._id)"
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
  props: ['categories', 'edit', 'errorMessage'],
  components: {
    CategoryItem,
  },
};
</script>

<style>
</style>