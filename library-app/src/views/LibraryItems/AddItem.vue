<template>
  <div>
    <div class="mb-3 col-md-8">
      <h5 class="mb-4">Please select what type of Item you want to add</h5>
      <keep-alive>
        <selectType @select-type="selectType" />
      </keep-alive>
    </div>
    <div v-if="this.type === 'book'" class="py-3 mb-4 col-md-12 m-auto">
      <h2 class="text-left mb-4">Add a new Book</h2>
      <keep-alive>
        <addBook :categories="categories" @add-item="addItem" :selType="type" />
      </keep-alive>
    </div>
    <div v-else-if="this.type === 'dvd'" class="py-3 mb-4 col-md-12 m-auto">
      <h2 class="text-left mb-4">Add a new DVD</h2>
      <keep-alive>
        <addMedia
          :categories="categories"
          @add-item="addItem"
          :selType="type"
        />
      </keep-alive>
    </div>
    <div
      v-else-if="this.type === 'audio-book'"
      class="py-3 mb-4 col-md-12 m-auto"
    >
      <h2 class="text-left mb-4">Add a new Audio Book</h2>
      <keep-alive>
        <addMedia
          :categories="categories"
          @add-item="addItem"
          :selType="type"
        />
      </keep-alive>
    </div>
    <div
      v-else-if="this.type === 'ref-book'"
      class="py-3 mb-4 col-md-12 m-auto"
    >
      <h2 class="text-left mb-4">Add a new Reference Book</h2>
      <keep-alive>
        <addRefBook
          :categories="categories"
          @add-item="addItem"
          :selType="type"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SelectType from '../../components/LibraryItems/Forms/SelectType.vue';
import AddBook from '../../components/LibraryItems/Forms/AddBook.vue';
import AddMedia from '../../components/LibraryItems/Forms/AddMedia.vue';
import AddRefBook from '../../components/LibraryItems/Forms/AddRefBook.vue';

export default {
  name: 'AddItem',
  components: {
    SelectType,
    AddBook,
    AddMedia,
    AddRefBook,
  },
  data() {
    return {
      type: '',
      categories: [],
      apiItemsURI: 'http://localhost:8000/api/libraryItems',
      apiCatURI: 'http://localhost:8000/api/categories',
    };
  },
  methods: {
    selectType(value) {
      this.type = value;
    },
    addItem(item) {
      fetch(this.apiItemsURI + '/new', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          category: item.category,
          title: item.title,
          author: item.author,
          pages: item.pages,
          runTimeMinutes: item.runTimeMinutes,
          isBorrowable: item.isBorrowable,
          type: item.type,
        }),
      })
        .then(response => response.json())
        .then(res => {
          if (res.statusCode === 201) {
            this.$router.push({ name: 'LibraryTable' });
          }
        })
        .then(() => this.fetchCategories());
    },
    //Fetches categories from DB with api
    fetchCategories() {
      fetch(this.apiCatURI)
        .then(response => response.json())
        .then(categoriesInDb => {
          this.categories = categoriesInDb;
        });
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style></style>