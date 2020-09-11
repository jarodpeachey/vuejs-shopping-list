const shoppingList = new Vue({
  el: '#shopping-list',
  data: {
    inputState: 'closed',
    header: 'Shopping List App',
    newItem: 'Test',
    items: [
      {
        name: 'Party Hats',
        purchased: false,
      },
      {
        name: 'Board Games',
        purchased: true,
      },
      {
        name: 'Plastic Cups',
        purchased: false,
      },
    ],
  },
  computed: {
    reversedItems() {
      return this.items.slice(0).reverse();
    },
  },
  methods: {
    addItem: function () {
      this.items.push({
        name: this.newItem,
        purchased: false,
      });
      this.newItem = '';
    },
    changeState: function (newState) {
      this.inputState = newState;
      this.newItem = '';
    },
    togglePurchased: function (item) {
      item.purchased = !item.purchased;
    },
  },
});
