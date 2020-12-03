<template>
  <div>
    <form @submit.prevent="updateCategory">
      <div class="form-row text-left">
        <label for="newName">Category name:</label>
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            id="newName"
            v-model="newName"
            :class="{ 'is-invalid': error }"
          />
          <div class="input-group-append">
            <button class="btn btn-dark">Update</button>
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
    <div class="mt-4">
      <button
        class="btn btn-dark"
        :class="{ active: newEdit }"
        @click="editChange"
      >
        Go back to Add
      </button>
    </div>
  </div>
</template>

<script>
import EventBus from '../../event-bus';

export default {
  name: 'EditCategory',
  props: ['errorMessage', 'apiURI', 'edit', 'copyCategory'],
  data() {
    return {
      newName: this.copyCategory.name,
      newId: this.copyCategory._id,
      success: '',
      error: '',
      newEdit: this.edit,
    };
  },
  methods: {
    updateCategory() {
      if (this.newName === '' || this.newName.length < 3) {
        this.error = 'Please insert a valid input!';
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
          .then(res => {
            if (res.statusCode === 200) {
              console.log(res)
              EventBus.$emit('categoryUpdated', { ...this.copyCategory, name: this.newName });
              this.success = res.message;
              this.error = null;
              this.newName = '';
            } else {
              this.error = res.message;
            }
          })
      }
    },
    editChange() {
      EventBus.$emit('editCategory', null, false);
      // this.newEdit = !this.newEdit;
      // this.$emit('edit-change', this.newEdit);
    },
  },
  created() {
    EventBus.$on('editCategory', (category) => {
      if (category) {
        this.newName = category.name;
        this.newId = category._id;
      }
    });
  },
};
</script>

<style>
</style>