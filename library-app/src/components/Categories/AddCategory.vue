<template>
  <form @submit.prevent="addCategory">
    <div class="form-row text-left">
      <label for="name">Category name:</label>
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          id="name"
          v-model="name"
          :class="{ 'is-invalid': error }"
        />
        <div class="input-group-append">
          <button class="btn btn-dark">Add</button>
        </div>
        <div v-if="error" class="invalid-feedback">
          {{ this.error }}
        </div>
        <div class="valid-feedback">
          {{ this.success }}
        </div>
      </div>
      <div class="input-group">
        <small class="form-text text-muted"
          >The Category name must be atleast 3 characters long and has to be
          unique.</small
        >
      </div>
    </div>
  </form>
</template>

<script>
import EventBus from '../../event-bus';

export default {
  name: 'AddCategory',
  props: ['errorMessage'],
  data() {
    return {
      name: '',
      apiURI: 'http://localhost:8000/api/categories',
      success: '',
      error: '',
    };
  },
  methods: {
    addCategory() {
      if (this.isValid()) {
        fetch(this.apiURI + '/new', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            name: this.name,
          }),
        })
          .then(response => response.json())
          .then(res => {
            if (res.statusCode === 201) {
              EventBus.$emit('addCategory', res.data.category);
              this.success = res.message;
              this.error = null
              this.name='';
            } else {
              this.error = res.message;
            }
          });
      }
    },
    isValid() {
      if (this.name === '' || this.name.length < 3) {
        this.error = 'Please insert valid input!'
        return false
      } 
      return true;

    },
  },
};
</script>

<style>
</style>