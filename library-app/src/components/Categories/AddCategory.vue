<template>
  <form @submit.prevent="$emit('add-category', categoryName)">
    <div class="form-row text-left">
      <label for="categoryName">Category name:</label>
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          id="categoryName"
          v-model="categoryName"
        />
        <div class="input-group-append">
          <button class="btn btn-dark">Add</button>
        </div>
      </div>
      <div class="input-group">
        <div class="invalid-feedback">Please insert valid input!</div>
        <small class="form-text text-muted"
          >The Category name must be atleast 3 characters long and has to be
          unique.</small
        >
      </div>
    </div>
  </form>
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