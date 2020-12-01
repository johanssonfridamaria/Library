<template>
  <form @submit.prevent="updateCategory">
    <div class="form-row text-left">
      <label for="name">Category name:</label>
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          id="name"
          v-model="name"
          :class="{ 'is-invalid': error || errorMessage !== '' }"
        />
        <div class="input-group-append">
          <button class="btn btn-dark">Save</button>
        </div>
      </div>
      <div class="input-group">
        <div v-if="error">Please insert valid input!</div>
        <div v-if="errorMessage !== ''">{{ this.errorMessage }}</div>
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
  name: 'EditCategory',
  props: ['errorMessage'],
  data() {
    return {
      name: '',
      error: false,
    };
  },
  methods: {
    // updateCategory() {
    //   if (this.name === '' || this.name.length < 3) {
    //     this.error = true;
    //   } else {
    //     this.$emit('update-category', this.name);
    //     (this.name = ''), (this.error = false);
    //   }
    // },
  },
};
</script>

<style>
</style>