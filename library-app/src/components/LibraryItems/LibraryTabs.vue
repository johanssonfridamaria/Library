<template>
  <div class="navbar navbar-light">
    <ul class="nav flex-column navbar-nav text-left">
      <li class="nav-item">
        <router-link :to="{ name: 'LibraryTable' }" exact class="nav-link">
          Library Items
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'AddItem' }" exact class="nav-link">
          Add Library Item
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'EditItem' }" exact class="nav-link">
          Edit Library Item
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :libraryItems="libraryItems"
          :to="{ name: 'LendItem' }"
          exact
          class="nav-link"
        >
          Check in/Check out Library item
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Eventbus from '../../event-bus';

export default {
  name: 'LibraryTabs',
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
  },
  created() {
    this.fetchLibraryItems();
    Eventbus.$on('delete-item', id => {
      fetch(this.apiItemsURI + `/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => this.fetchLibraryItems());
    });
  },
};
</script>

<style scoped>
.router-link-active {
  color: white;
}
</style>