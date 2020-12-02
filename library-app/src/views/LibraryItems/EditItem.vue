<template>
  <form @submit.prevent="UpdateItem">
    <div class="form-row">
      <div class="col-md-3 mb-3">
        <label for="category">Category</label>
        <select
          class="custom-select"
          id="category"
          :class="{ 'is-invalid': error }"
          v-model="item.category"
        >
          <option value="" disabled="" selected="">Choose...</option>
          <option v-for="category in this.categories" :key="category._id">
            {{ category.name }}
          </option>
        </select>
        <p class="invalid-feedback">Please choose a Category</p>
      </div>
    </div>

    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="item.title"
          :class="{ 'is-invalid': error }"
        />
        <div class="invalid-feedback">Please insert a valid title!</div>
      </div>

      <div class="col-md-4 mb-3">
        <label for="author">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="item.author"
          :class="{ 'is-invalid': error }"
        />
        <div class="invalid-feedback">Please insert a valid author!</div>
      </div>
    </div>

    <div class="form-row">
      <div class="col-md-3 mb-3">
        <label for="pages">Pages</label>
        <input
          type="number"
          class="form-control"
          id="pages"
          v-model="item.pages"
          :class="{ 'is-invalid': error }"
        />
        <div class="invalid-feedback">Please provide a valid input.</div>
      </div>
    </div>

    <div class="form-group mb-5">
      <label>Borrowable</label>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="borrowable"
          name="isBorrowable"
          class="custom-control-input"
          v-model="item.isBorrowable"
          value="true"
        />
        <label class="custom-control-label" for="borrowable">Yes</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="notBorrowable"
          name="isBorrowable"
          class="custom-control-input"
          v-model="item.isBorrowable"
          value="false"
          required
        />
        <label class="custom-control-label" for="notBorrowable">No</label>
      </div>
      <div class="invalid-feedback">
        Please select if the item is borrowable!
      </div>
    </div>
    <button class="btn btn-dark py-2 px-4" type="submit">ADD</button>
  </form>
</template>

<script>
import EventBus from '../../event-bus';

export default {
  name: 'EditItem',
  data() {
    return {
      newItem: {},
    };
  },
  created() {
    EventBus.$on('editItem', item => {
      this.newItem = item;
      // this.newId = category._id;
    });
  },
};
</script>

<style></style>