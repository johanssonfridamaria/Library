<template>
  <form @submit.prevent="updateCategory">
    <div class="form-row text-left">
      <label for="newName">Category name:</label>
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          id="newName"
          v-model="newName"
          :class="{ 'is-invalid': error || errorMessage !== '' }"
        />
        <div class="input-group-append">
          <button class="btn btn-dark">Update</button>
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
import EventBus from '../../event-bus';

export default {
  name: 'EditCategory',
  props: ['errorMessage', 'apiURI'],
  data() {
    return {
      newName: '',
      newId: '',
      error: false,
    };
  },
  methods: {
    updateCategory() {
      console.log(this.newId, this.newName, this.apiURI);
      if (this.newName === '' || this.newName.length < 3) {
        this.error = true;
      } else {
        fetch(this.apiURI + `/${this.newId}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            name: this.newName,
          }),
        })
          .then(response => response.json())
          .then(response => this.$emit('handle-errors', response))
          .then(data => this.$emit('update-table', data));
        (this.newName = ''), (this.error = false);
      }
    },
  },
  created() {
    EventBus.$on('editCategory', category => {
      this.newName = category.name;
      this.newId = category._id;
    });
  },
};
</script>

<style>
</style>