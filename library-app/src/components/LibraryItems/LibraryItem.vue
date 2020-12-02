<template>
  <tr class="align-items-center">
    <th scope="row">{{ item._id }}</th>
    <td>{{ item.categoryId }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.author }}</td>
    <td>{{ item.pages }}</td>
    <td>{{ item.runTimeMinutes }}</td>
    <td>{{ item.isBorrowable }}</td>
    <td>{{ item.borrower }}</td>
    <td>{{ item.borrowDate }}</td>
    <td>{{ item.type }}</td>
    <td><button class="btn btn-primary">Edit</button></td>
    <td>
      <button class="btn btn-danger" @click="$emit('delete-item', item._id)">
        Remove
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'LibraryItem',
  props: ['item'],
};
</script>

<style></style>