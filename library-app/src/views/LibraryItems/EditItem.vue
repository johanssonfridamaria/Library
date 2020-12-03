<template>
  <div>
    <div class="mb-5">
    <h2 class="text-left mb-4">Edit Library Item</h2>
    <p>It's not possible to change the type of the Item.</p>
    </div>
    <div>
      <keep-alive>
        <editItemForm :categories="categories" @update-item="updateItem" :item="item"/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import EditItemForm from '../../components/LibraryItems/Forms/EditItemForm';
// import EventBus from '../../event-bus';

export default {
  name: 'EditItem',
  props:['item'],
  components: {
    EditItemForm,
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
    // selectType(value) {
    //   this.type = value;
    // },
    updateItem(item) {
      console.log(item);
      fetch(this.apiItemsURI + '/new', {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          categoryId: item.category,
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
      // .then(() => this.fetchCategories());
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
    console.log(this.item)
    // EventBus.$on('edit-item', item => {
    //   console.log(item)
    //   this.type = item.type;
    // });
  },
};
</script>

<style></style>