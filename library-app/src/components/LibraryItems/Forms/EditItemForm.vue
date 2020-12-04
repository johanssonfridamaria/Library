<template>
  <form @submit.prevent="uppdateItem">
    <div class="mb-3">
      {{ this.statusMessage }}
    </div>
    <div class="form-row">
      <div class="col-md-3 mb-3">
        <label for="category">Category</label>
        <select
          class="custom-select"
          id="category"
          v-model="copyItem.category._id"
        >
          <option v-for="category in this.categories" :key="category._id" :value="category._id">
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
          v-model="copyItem.title"
        />
        <div class="invalid-feedback">Please insert a valid title!</div>
      </div>

      <div v-if="show" class="col-md-4 mb-3">
        <label for="author">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="copyItem.author"
        />
        <div class="invalid-feedback">Please insert a valid author!</div>
      </div>
    </div>

    <div class="form-row">
      <div v-if="show" class="col-md-3 mb-3">
        <label for="pages">Pages</label>
        <input
          type="number"
          class="form-control"
          id="pages"
          v-model="copyItem.pages"
        />
        <div class="invalid-feedback">Please provide a valid input.</div>
      </div>
      <div v-if="showRunTime" class="col-md-2 mb-3">
        <label for="runTimeMinutes">Run Time (min)</label>
        <input
          type="number"
          class="form-control"
          id="runTimeMinutes"
          v-model="copyItem.runTimeMinutes"
        />
        <div class="invalid-feedback">Please provide a valid input.</div>
      </div>
    </div>
    <button class="btn btn-dark py-2 px-4" type="submit">UPDATE</button>
  </form>
</template>

<script>
export default {
  name: 'EditItemForm',
  props: ['type', 'categories', 'item', 'statusMessage'],
  data() {
    return {
      copyItem: this.item,
      show: true,
      showRunTime: true,
    };
  },
  methods: {
    uppdateItem(e) {
      if (
        this.copyItem.category._id !== '' &&
        this.copyItem.title !== '' &&
        this.copyItem.author !== '' &&
        this.copyItem.pages !== '' &&
        this.copyItem.runTimeMinues !== ''
      ) {
        this.$emit('update-item', this.copyItem);
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
  created() {
    if (this.item.type === 'book') {
      this.showRunTime = false;
    } else if (this.item.type === 'ref-book') {
      this.showRunTime = false;
    } else if (this.item.type === 'audio-book' || this.item.type ===  'dvd') {
      this.show = false;
    }
  },
};
</script>

<style></style>