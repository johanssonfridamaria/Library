<template>
  <form
    class="needs-validation"
    novalidate
    @submit.prevent="$emit('add-book-item', book)"
  >
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="title"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="col-md-6 mb-3">
        <label for="author">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="author"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
    </div>

    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label for="pages">Pages</label>
        <input
          type="number"
          class="form-control"
          id="pages"
          v-model="pages"
          required
        />
        <div class="invalid-feedback">Please provide a valid input.</div>
      </div>

      <div class="col-md-8 mb-3">
        <label for="category">Category</label>
        <select class="custom-select" id="category" v-model="category">
          <option selected>Choose...</option>
          <option value="book">Romance</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label class="my-1 mr-2" for="category">Type</label>
        <select class="custom-select my-1 mr-sm-2" id="category" v-model="type">
          <option selected>Choose...</option>
          <option value="book">Book</option>
          <option value="dvd">DVD</option>
          <option value="audio-book">Audio Book</option>
          <option value="ref-book">Reference Book</option>
        </select>
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
          v-model="isBorrowable"
        />
        <label class="custom-control-label" for="borrowable">Yes</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          id="notBorrowable"
          name="isBorrowable"
          class="custom-control-input"
          v-model="isBorrowable"
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
export default {
  name: 'AddBook',
  data() {
    return {
      category: '',
      title: '',
      author: '',
      pages: '',
      runTimeMinutes: '',
      isBorrowable: '',
      type: '',
    };
  },
};
</script>

<style></style>