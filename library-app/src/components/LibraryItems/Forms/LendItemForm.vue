<template>
  <div v-if="this.copyItem.type !== 'ref-book'">
    <form @submit.prevent="lendItem">
      <!-- <div class="mb-3">
      {{ this.statusMessage }}
    </div> -->

      <div class="form-group mb-3">
        <label>Do you want to check in or Check Out Item?</label>
        <div class="custom-control custom-radio">
          <input
            type="radio"
            id="checkIn"
            name="checkItem"
            class="custom-control-input"
            value="check-in"
            v-model="selectedAction"
          />
          <label class="custom-control-label" for="checkIn">Check In</label>
        </div>
        <div class="custom-control custom-radio">
          <input
            type="radio"
            id="checkOut"
            name="checkItem"
            class="custom-control-input"
            v-model="selectedAction"
            value="check-out"
            required
          />
          <label class="custom-control-label" for="checkOut">CheckOut</label>
        </div>
      </div>

      <div
        :class="{ 'd-none': selectedAction === 'check-in' }"
        class="form-row"
      >
        <div class="col-md-4 mb-3">
          <label for="borrower">Borrower fullname:</label>
          <input
            type="text"
            class="form-control"
            id="borrower"
            v-model="copyItem.borrower"
            :class="{ 'is-invalid': error }"
          />
        </div>
      </div>

      <div v-if="error" class="text-danger mb-4">
        {{ this.error }}
      </div>

      <button class="btn btn-dark py-2 px-4" type="submit">Submit</button>
    </form>
  </div>

  <div v-else>
    <h1>It's not possible to Lend out Ref-books</h1>
  </div>
</template>

<script>
export default {
  name: 'LendItemForm',
  props: ['item'],
  data() {
    return {
      copyItem: this.item,
      isLentOut: !this.item.isBorrowable,
      apiItemsURI: 'http://localhost:8000/api/libraryItems',
      error: '',
      selectedAction: this.item.isBorrowable ? 'check-out' : 'check-in',
    };
  },
  computed: {},
  methods: {
    lendItem() {
      if (this.isValid()) {
        const checkIn = this.selectedAction === 'check-in';
        fetch(this.apiItemsURI + `/${this.copyItem._id}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            borrower: checkIn ? null : this.copyItem.borrower,
            isBorrowable: checkIn ? true : false,
            borrowDate: checkIn ? null : Date.now(),
          }),
        })
          .then(response => response.json())
          .then(res => {
            if (res.statusCode === 200) {
              this.$router.push({ name: 'LibraryTable' });
              this.error = null;
            } else {
              this.error = res.message;
            }
          });
      }
    },
    isValid() {
      const checkIn = this.selectedAction === 'check-in';

      if (checkIn) {
        if (!this.isLentOut) {
          this.error =
            'This item is already in the Library, not possible to put it back!';
          return false;
        }
        return true;
      } else {
        if (this.isLentOut) {
          this.error = 'This item is already lent out!';
          return false;
        } else if (!this.copyItem.borrower) {
          this.error = 'Please insert valid input!';
          return false;
        }
        return true;
      }
    },
  },
  created() {
    if (!this.item) {
      this.$router.push({ name: 'LibraryTable' });
    }
  },
};
</script>

<style>
</style>