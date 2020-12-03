<template>
<div>
  <div class="mb-4">
    <p>To edit an Item pls select the edit button and you will be redirected to another page.</p>
  </div>
  <div class="table-responsive">
    <div v-if="libraryItems.length">
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
            <th scope="col">Id</th>
            <th scope="col">Category</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Pages</th>
            <th scope="col">Run Time (min)</th>
            <th scope="col">Borrowable</th>
            <th scope="col">Borrower</th>
            <th scope="col">Borrow Date</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <libraryItem
            v-for="item in libraryItems"
            :key="item._id"
            :item="item"
            @delete-item="delItem"
          />
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1>No Library items added</h1>
    </div>
  </div>
  </div>
</template>

<script>
import LibraryItem from '../../components/LibraryItems/LibraryItem';

export default {
  name: 'LibraryTable',
  components: {
    LibraryItem,
  },
  data() {
    return {
      libraryItems: [],
      apiItemsURI: 'http://localhost:8000/api/libraryItems',
      apiCatURI: 'http://localhost:8000/api/categories',
    };
  },
  methods: {
    //Fetches libraryItems from DB with api
    fetchLibraryItems() {
      fetch(this.apiItemsURI)
        .then(response => response.json())
        .then(libraryItemsInDb => {
          this.libraryItems = libraryItemsInDb;
        });
    },

    delItem(id) {
      fetch(this.apiItemsURI + `/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => this.fetchLibraryItems());
    },
  },
  created() {
    this.fetchLibraryItems();
  },
};
</script>

<style>
</style>