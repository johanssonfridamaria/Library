<template>
  <div>
    <div class="mb-4">
      <p>
        To edit an Item pls select the edit button and you will be redirected to
        another page.
      </p>
    </div>
    <div class="table-responsive table-sm">
      <div v-if="libraryItems.length">
        <table class="table table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th class="text-center" scope="col">Check/in-out</th>
              <th class="text-center" scope="col">Edit</th>
              <th class="text-center" scope="col">Remove</th>
              <th class="text-center" @click="sort('type')" scope="col">
                 <span class="d-flex align-items-center">
                Type
                <i
                  :class="{
                    'fa-sort-amount-up': currentSortDir === 'asc',
                    'fa-sort-amount-down': currentSortDir !== 'asc',
                    'd-none': currentSort !== 'type',
                  }"
                  class="fas px-2"
                ></i>
                 </span>
              </th>
              <th class="text-center" @click="sort('category')" scope="col">
                <span class="d-flex align-items-center">
                  Category
                  <i
                    :class="{
                      'fa-sort-amount-up': currentSortDir === 'asc',
                      'fa-sort-amount-down': currentSortDir !== 'asc',
                      'd-none': currentSort !== 'category',
                    }"
                    class="fas px-2"
                  ></i>
                </span>
              </th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th class="text-center" scope="col">Pages</th>
              <th class="text-center" scope="col">Run Time (min)</th>
              <th class="text-center" scope="col">Borrowable</th>
              <th scope="col">Borrower</th>
              <th scope="col">Borrow Date</th>
            </tr>
          </thead>
          <tbody>
            <libraryItem
              v-for="item in sorted"
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
      currentSort: 'category',
      currentSortDir: 'asc',
    };
  },
  computed: {
    sorted: function () {
      return [...this.libraryItems].sort((a, b) => {
        let modifier = 1;

        if (this.currentSort === 'type') {
          if (this.currentSortDir === 'desc') modifier = -1;
          if (
            a[this.currentSort].toLowerCase() <
            b[this.currentSort].toLowerCase()
          )
            return -1 * modifier;
          if (
            a[this.currentSort].toLowerCase() >
            b[this.currentSort].toLowerCase()
          )
            return 1 * modifier;
          return 0;
        } else {
          if (this.currentSortDir === 'desc') modifier = -1;
          if (
            a[this.currentSort]['name'].toLowerCase() <
            b[this.currentSort]['name'].toLowerCase()
          )
            return -1 * modifier;
          if (
            a[this.currentSort]['name'].toLowerCase() >
            b[this.currentSort]['name'].toLowerCase()
          )
            return 1 * modifier;
          return 0;
        }
      });
    },
  },
  methods: {
    sort: function (s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },
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