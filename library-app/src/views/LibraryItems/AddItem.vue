<template>
  <div>
    <div class="pt-3 mb-3 col-md-8">
      <h5 class="mb-4">Please select what type of Item you want to add</h5>
      <keep-alive>
        <selectType @select-type="selectType" />
      </keep-alive>
    </div>
    <div v-if="this.type === 'book'" class="py-3 mb-4 col-md-12 m-auto">
      <h2 class="text-left mb-4">Add a new Book</h2>
      <keep-alive>
        <addBook @add-item="addItem" :selType="type" />
      </keep-alive>
    </div>
    <div v-else-if="this.type === 'dvd'" class="py-3 mb-4 col-md-8">
      <h2 class="text-left mb-4">Add a new DVD</h2>
      <keep-alive>
        <addDVD />
      </keep-alive>
    </div>
    <div v-else-if="this.type === 'audio-book'" class="py-3 mb-4 col-md-8">
      <h2 class="text-left mb-4">Add a new Audio Book</h2>
      <keep-alive>
        <addAudioBook />
      </keep-alive>
    </div>
    <div v-else-if="this.type === 'ref-book'" class="py-3 mb-4 col-md-8">
      <h2 class="text-left mb-4">Add a new Reference Book</h2>
      <keep-alive>
        <addRefBook />
      </keep-alive>
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
      type: '',
      apiURI: 'http://localhost:8000/api/libraryItems',
    };
  },
  methods: {
    selectType(value) {
      this.type = value;
    },
    addItem(item) {
      console.log(item);
      fetch(this.apiURI + '/new', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          categoryId: item.category.id,
          title: item.title,
          author: item.author,
          pages: item.pages,
          runTimeMinutes: item.runTimeMinutes,
          isBorrowable: item.isBorrowable,
          type: item.type,
        }),
      })
        .then(response => response.json())
        // .then(this.handleErrors)
        .then(data => console.log(data));
      // this.fetchNoOfLibraryItemsinCategory(data._id)
      // .then(() => this.fetchCategories());
    },
  },
};
</script>

<style></style>