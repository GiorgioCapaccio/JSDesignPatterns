// Privates

const basket = [];

const doSomethingPrivate = () => {
  // ...
};

// Create an object exposed to the public

const basketModule = {
    // Add items to the basket

    addItem(values) {
        basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount() {
        return basket.length;
    },

    // Public alias
    doSomething() {
        doSomethingPrivate();
    },

    // Get the total value of the basket
    getTotal() {
        return basket.reduce((currentSum, item) => item.price + currentSum, 0);
    }
};

export default basketModule;