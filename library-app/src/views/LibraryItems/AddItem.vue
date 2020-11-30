<template>
  <div>
    <!-- <div class="col-md-12">
      <h1 class="text-left">Add a new Library Item</h1>
    </div> -->
    <div class="pt-3 mb-3 col-md-8">
      <h5 class="mb-4">Please select what type of Item you want to add</h5>
      <selectType @select-type="selectType" />
    </div>
    <div v-if="this.selection === 'book'" class="py-3 mb-4 col-md-12 m-auto">
      <h2 class="text-left mb-4">Add a new Book</h2>
      <addBook @add-book="addBook" />
    </div>
    <div v-else-if="this.selection === 'dvd'" class="py-3 mb-4 col-md-8">
      <h2 class="text-left mb-4">Add a new DVD</h2>
      <addDVD />
    </div>
    <div v-else-if="this.selection === 'audio-book'" class="py-3 mb-4 col-md-8">
      <h2 class="text-left mb-4">Add a new Audio Book</h2>
      <addAudioBook />
    </div>
    <div v-else-if="this.selection === 'ref-book'" class="py-3 mb-4 col-md-8">
      <h2 class="text-left mb-4">Add a new Reference Book</h2>
      <addRefBook />
    </div>
  </div>
</template>

<script>
import SelectType from '../../components/LibraryItems/Forms/SelectType.vue';
import AddBook from '../../components/LibraryItems/Forms/AddBook.vue';
import AddDVD from '../../components/LibraryItems/Forms/AddDVD.vue';
import AddAudioBook from '../../components/LibraryItems/Forms/AddAudioBook';
import AddRefBook from '../../components/LibraryItems/Forms/AddRefBook.vue';

export default {
  name: 'AddItem',
  components: {
    SelectType,
    AddBook,
    AddDVD,
    AddAudioBook,
    AddRefBook,
  },
  data() {
    return {
      selection: '',
    };
  },
  methods: {
    selectType(value) {
      this.selection = value;
    },
    addBook(book) {},
  },
};
</script>

<style>
</style>