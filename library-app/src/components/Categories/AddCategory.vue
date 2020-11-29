<template>
  <div>
    <form @submit.prevent="$emit('add-category', categoryName)">
      <label for="categoryName">Add a new Category</label>
      <input
        type="text"
        id="categoryName"
        placeholder="Add a unique Category name..."
        v-model="categoryName"
      />
      <button class="btn">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddCategory',
  data() {
    return {
      categoryName: '',
    };
  },
};
</script>

<style>
</style>