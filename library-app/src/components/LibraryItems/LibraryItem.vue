<template>
  <tr class="align-items-center">
    <td class="text-center">
      <router-link
        :to="{ name: 'LendItem', params: { item: this.item } }"
        exact
        class="btn btn-table"
      >
       <i class="fas fa-people-arrows"></i>
      </router-link>
    </td>
    <td class="text-center">
      <router-link
        :to="{ name: 'EditItem', params: { item: this.item } }"
        exact
        class="btn btn-table"
      >
        <i class="fas fa-edit"></i>
      </router-link>
    </td>
    <td class="text-center">
      <button
        class="btn btn-table text-danger"
        @click="$emit('delete-item', item._id)"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </td>
    <td>{{ item.type.toUpperCase() }}</td>
    <td>{{ item.category && item.category.name }}</td>
    <td>{{ item.title }} ({{this.acrTitle}})</td>
    <td>{{ item.author }}</td>
    <td class="text-center">{{ item.pages }}</td>
    <td class="text-center">{{ item.runTimeMinutes }}</td>
    <td class="text-center">{{ item.isBorrowable }}</td>
    <td>{{ item.borrower }}</td>
    <td>{{ item.borrowDate && item.borrowDate.substring(0,10) }}</td>
  </tr>
</template>

<script>

export default {
  name: 'LibraryItem',
  props: ['item'],
  data(){
    return {
      title: this.item.title,
      acrTitle:'',
    }
  },
  methods: {
      acronymTitel(title){
      const words = title.split(' ');
      const acronym = words.map(word =>
        word[0]);
      return acronym.join('').toUpperCase();
    }
  },
  created(){
      const acronym = this.acronymTitel(this.title);
      this.acrTitle = acronym;
  },
};
</script>

<style></style>