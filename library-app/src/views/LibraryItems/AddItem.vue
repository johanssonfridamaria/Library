<template>
  <div>
    <selectType @select-type="selectType" />
    <addBook />
    <addDVD />
    <addAudioBook />
    <addRefBook />
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
      select: '',
    };
  },
  methods: {
    selectType(value) {
      switch (value) {
        case 'book':
          this.select = 'book';
          break;
        case 'dvd':
          this.select = 'dvd';
          break;
        case 'audio-book':
          this.select = 'audio-book';
          break;
        case 'ref-book':
          this.select = 'ref-book';
          break;
        default:
          this.select = '';
      }
    },
  },
};
</script>

<style>
</style>