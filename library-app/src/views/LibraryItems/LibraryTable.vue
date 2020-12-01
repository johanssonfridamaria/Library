<template>
  <div class="table-responsive">
    <div v-if="library.length">
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category Id</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Pages</th>
            <th scope="col">Run Time (min)</th>
            <th scope="col">Borrowable</th>
            <th scope="col">Borrower</th>
            <th scope="col">Borrow Date</th>
            <th scope="col">Type</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <libraryItem
            v-for="item in library"
            :key="item.id"
            :libraryItem="item"
          />
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1>No Library items added</h1>
    </div>
  </div>
</template>

<script>
import LibraryItem from '../../components/LibraryItems/LibraryItem';
import EventBus from '../../event-bus';

export default {
  name: 'LibraryTable',
  components: {
    LibraryItem,
  },
  data() {
    return {
      library: [
        {
          id: 1,
          categoryId: 5,
          title: 'Cats and dogs',
          author: 'hej',
          pages: 234,
          runTime: 120,
          borrowable: true,
          borrower: 'Frida Johansson',
          borrowDate: Date.now(),
          type: 'book',
        },
      ],
    };
  },
  methods: {},
  mounted() {
    EventBus.$on('addBook', function (book) {
      let item = {
        id: book.id,
        categoryId: book.categoryId,
        title: book.title,
        author: book.author,
        pages: book.pages,
        borrowable: true,
        borrower: 'Frida Johansson',
        borrowDate: Date.now(),
        type: book.type,
      };
      this.library.push(item);
    });
  },
};
</script>

<style>
</style>