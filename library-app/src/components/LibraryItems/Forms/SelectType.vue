<template>
  <div class="input-group">
    <select
      class="form-control"
      v-model="select"
      @change="$emit('select-type', select)"
    >
      <option value="book">Book</option>
      <option value="dvd">DVD</option>
      <option value="audio-book">Audio Book</option>
      <option value="ref-book">Reference Book</option>
    </select>
  </div>
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