<template>
  <div>
    <div class="mb-3">
      <h2 class="text-left mb-4">Check in or Check out Library Item</h2>
    </div>
    <div>
      <keep-alive>
        <lendItemForm
          :item="item"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import LendItemForm from '../../components/LibraryItems/Forms/LendItemForm';

export default {
   name: 'LendItem',
  props: ['item'],
  components: {
    LendItemForm,
  },
};
</script>

<style></style>