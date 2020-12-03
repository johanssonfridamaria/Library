<template>
  <div>
    <div v-if="this.type === 'book'" class="py-3 mb-4 col-md-12 m-auto">
      <h2 class="text-left mb-4">Add a new Book</h2>
      <keep-alive>
        <editBook
          :categories="categories"
          @update-item="updateItem"
        />
      </keep-alive>
    </div>
    <div v-else-if="this.type === 'dvd'" class="py-3 mb-4 col-md-12 m-auto">
      <h2 class="text-left mb-4">Add a new DVD</h2>
      <keep-alive>
        <editMedia
          :categories="categories"
          @update-item="updateItem"
        />
      </keep-alive>
    </div>
    <div
      v-else-if="this.type === 'audio-book'"
      class="py-3 mb-4 col-md-12 m-auto"
    >
      <h2 class="text-left mb-4">Add a new Audio Book</h2>
      <keep-alive>
        <editMedia
          :categories="categories"
          @update-item="updateItem"
        />
      </keep-alive>
    </div>
    <div
      v-else-if="this.type === 'ref-book'"
      class="py-3 mb-4 col-md-12 m-auto"
    >
      <h2 class="text-left mb-4">Add a new Reference Book</h2>
      <keep-alive>
        <editRefBook
          :categories="categories"
          @update-item="updateItem"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import EventBus from '../../event-bus';
import EditBook from '../../components/LibraryItems/Forms/EditBook';
// import EditBook from '../../components/LibraryItems/Forms/Edit';

export default {
  name: 'EditItem',
  components: {},
  data() {
    return {
      type: '',
      categories: [],
      apiItemsURI: 'http://localhost:8000/api/libraryItems',
      apiCatURI: 'http://localhost:8000/api/categories',
    };
  },
  methods: {
    // updateItem(item) {
    //   console.log(item);
    //   fetch(this.apiItemsURI + '/new', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //     body: JSON.stringify({
    //       categoryId: item.category,
    //       title: item.title,
    //       author: item.author,
    //       pages: item.pages,
    //       runTimeMinutes: item.runTimeMinutes,
    //       isBorrowable: item.isBorrowable,
    //       type: item.type,
    //     }),
    //   })
    //     .then(response => response.json())
    //     // .then(this.handleErrors)
    //     .then(data => console.log(data));
    //   // .then(() => this.fetchCategories());
    // },
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
    EventBus.$on('editItem', item => {
      this.type = item.type;
    });
  },
};
</script>

<style></style>