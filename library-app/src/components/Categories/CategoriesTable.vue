<template>
  <div class="table-responsive">
    <div v-if="categories.length">
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th class="text-center" scope="col">Edit</th>
            <th class="text-center" scope="col">Remove</th>
            <th scope="col">Name</th>
            <th class="text-center" scope="col">No. of Library items</th>
          </tr>
        </thead>
        <tbody>
          <categoryItem
            :errorMessage="errorMessage"
            v-for="category in categories"
            :key="category.id"
            :category="category"
            :edit="edit"
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