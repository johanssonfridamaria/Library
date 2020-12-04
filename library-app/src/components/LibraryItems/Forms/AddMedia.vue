<template>
  <form @submit.prevent="addBook">
    <div class="form-row">
      <div class="col-md-3 mb-3">
        <label for="category">Category</label>
        <select
          class="custom-select"
          id="category"
          v-model="item.category"
        >
          <option value="" disabled="" selected="">Choose...</option>
          <option v-for="category in this.categories" :key="category._id" :value="category._id">
            {{ category.name }}
          </option>
        </select>
        <p class="invalid-feedback">Please choose a Category</p>
      </div>
    </div>

    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="item.title"
        />
        <div class="invalid-feedback">Please insert a valid title!</div>
      </div>
      <div class="col-md-2 mb-3">
        <label for="runTimeMinutes">Run Time (min)</label>
        <input
          type="number"
          class="form-control"
          id="runTimeMinutes"
          v-model="item.runTimeMinutes"
        />
        <div class="invalid-feedback">Please provide a valid input.</div>
      </div>
    </div>

    <button class="btn btn-dark py-2 px-4" type="submit">ADD</button>
  </form>
</template>

<script>
export default {
  name: 'AddMedia',
  props: ['selType', 'categories'],
  data() {
    return {
      item: {
        category: '',
        title: '',
        runTimeMinutes: '',
        isBorrowable: true,
        type: '',
      },
    };
  },
  methods: {
    addBook(e) {
      if (
        this.item.category !== '' &&
        this.item.title !== '' &&
        this.item.runTimeMinutes !== ''
      ) {
        this.item.type = this.selType;
        this.$emit('add-item', this.item);
        e.target.forEach(i => i.classList.remove('is-invalid'));
      } else {
        e.target.forEach(input => {
          if (input.value == '') {
            input.classList.add('is-invalid');
          } else {
            input.classList.remove('is-invalid');
          }
        });
      }
    }
  },
};
</script>

<style></style>