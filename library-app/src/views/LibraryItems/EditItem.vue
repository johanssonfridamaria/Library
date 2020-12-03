<template>
  <div>
    <div class="mb-3">
      <h2 class="text-left mb-4">Edit Library Item</h2>
      <p>Pls note that it's not possible to change the type of the Item.</p>
    </div>
    <div>
      <keep-alive>
        <editItemForm
          :statusMessage="statusMessage"
          :categories="categories"
          @update-item="updateItem"
          :item="item"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import EditItemForm from '../../components/LibraryItems/Forms/EditItemForm';
// import EventBus from '../../event-bus';

export default {
  name: 'EditItem',
  props: ['item'],
  components: {
    EditItemForm,
  },
  data() {
    return {
      type: '',
      categories: [],
      apiItemsURI: 'http://localhost:8000/api/libraryItems',
      apiCatURI: 'http://localhost:8000/api/categories',
      statusMessage: '',
    };
  },
  methods: {
    updateItem(input) {
      fetch(this.apiItemsURI + `/${input._id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          categoryId: input.categoryId,
          title: input.title,
          author: input.author,
          pages: input.pages,
          runTimeMinutes: input.runTimeMinutes,
          isBorrowable: input.isBorrowable,
          type: input.type,
        }),
      })
        .then(response => response.json())
        .then(response => this.handleErrors(response));
      // .then(data => console.log(data))
      // .then(data => this.$emit('update-table', data));
      // (this.newName = ''), (this.error = false);
    },
    //Fetches categories from DB with api
    fetchCategories() {
      fetch(this.apiCatURI)
        .then(response => response.json())
        .then(categoriesInDb => {
          this.categories = categoriesInDb;
        });
    },
    handleErrors(res) {
   if(res.statusCode === 200){
     this.$router.push({name: 'LibraryTable'})
   }
      this.statusMessage = res.message;
      return res;
    },
  },
  created() {
    this.fetchCategories();
    if(!this.item){
     this.$router.push({name: 'LibraryTable'});
    }

  },
};
</script>

<style></style>