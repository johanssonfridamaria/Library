<template>
  <div class="table-responsive">
    <div v-if="libraryItems.length">
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
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
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <libraryItem
            v-for="item in libraryItems"
            :key="item.id"
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
</template>

<script>
import LibraryItem from '../../components/LibraryItems/LibraryItem';
// import EventBus from '../../event-bus';

export default {
  name: 'LibraryTable',
  props: ['libraryItems'],
  components: {
    LibraryItem,
  },
};
</script>

<style>
</style>