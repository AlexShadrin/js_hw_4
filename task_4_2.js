const basket = {
    items: [
        {
            name: 'plate',
            model: "A1",
            color: "white",
            price: 115,
            count: 1,
        },
        {
            name: 'fork',
            model: "B2",
            color: "silver",
            price: 34,
            count: 2,
        },
        {
            name: 'spoon',
            model: "C3",
            color: "grey",
            price: 32,
            count: 1,
        },
        {
            name: 'knife',
            model: "D4",
            color: "black",
            price: 80,
            count: 2,
        },
    ],

    getTotalPrice() {
        return this.items.reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0);
    },
}

console.log(basket.getTotalPrice());