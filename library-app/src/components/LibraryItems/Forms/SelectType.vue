<template>
  <form @submit.prevent="$emit('select-type', select)">
    <div class="form-row text-left">
      <label for="selectType"
        >Please select what type of Item you want to add</label
      >
      <div class="input-group">
        <select class="form-control" v-model="select" id="selectType">
          <option value="book">Book</option>
          <option value="dvd">DVD</option>
          <option value="audio-book">Audio Book</option>
          <option value="ref-book">Reference Book</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SelectType',
  data() {
    return {
      select: '',
    };
  },
};
</script>

<style>
</style>