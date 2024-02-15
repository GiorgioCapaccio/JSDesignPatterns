import basketModule from "./BasketModule";

basketModule.addItem({
    item: 'bread',
    price: 0.5
})

basketModule.addItem({
    item: 'pasta',
    price: 0.3
})

// Outputs 2
console.log(basketModule.getItemCount());

// Outputs: 0.8
console.log(basketModule.getTotal());