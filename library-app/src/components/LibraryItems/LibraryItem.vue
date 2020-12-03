<template>
  <tr class="align-items-center">
    <td>
      <router-link
        :to="{ name: 'EditItem', params:{ item: this.item} }"
        exact
        class="btn btn-primary"
      >
        Edit
      </router-link>
    </td>
    <td>
      <button class="btn btn-danger" @click="$emit('delete-item', item._id)">
        Remove
      </button>
    </td>
    <th scope="row">{{ item._id }}</th>
    <td>{{ item.type }}</td>
    <td>{{ item.category.name }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.author }}</td>
    <td>{{ item.pages }}</td>
    <td>{{ item.runTimeMinutes }}</td>
    <td>{{ item.isBorrowable }}</td>
    <td>{{ item.borrower }}</td>
    <td>{{ item.borrowDate }}</td>
  </tr>
</template>

<script>
import EventBus from '../../event-bus';

export default {
  name: 'LibraryItem',
  props: ['item'],
  methods: {
    editItem() {
      EventBus.$emit('edit-item', this.item);
    },
  },
  created(){
    console.log(this.item);
  }
};
</script>

<style></style>