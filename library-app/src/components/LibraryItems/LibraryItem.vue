<template>
  <tr class="align-items-center">
    <th scope="row">{{ libraryItem.id }}</th>
    <td>{{ libraryItem.title }}</td>
    <td>{{ libraryItem.categoryId }}</td>
    <td>{{ libraryItem.author }}</td>
    <td>{{ libraryItem.pages }}</td>
    <td>{{ libraryItem.runTime }}</td>
    <td>{{ libraryItem.borrowable }}</td>
    <td>{{ libraryItem.borrower }}</td>
    <td>{{ libraryItem.borrowDate }}</td>
    <td>{{ libraryItem.type }}</td>
    <td><button class="btn btn-danger">Remove</button></td>
  </tr>
</template>

<script>
export default {
  name: 'LibraryItem',
  props: ['libraryItem'],
};
</script>

<style></style>