//Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: 'Diet Coke', price: 4.00, quantity: 25 },
    { name: 'Protein Bar', price: 3.00, quantity: 18 },
    { name: 'Protein Shake', price: 4.50, quantity: 15 },
    { name: 'Salad', price: 7.50, quantity: 10 }
];



//Task 2: Create an Orders Array of Order Objects

let orders = [];



//Task 3: Create a Function to Place an Order

//Calling the placeOrder function (Hoisting)
placeOrder();

function placeOrder() {
    //using push to add information into the orders array
    orders.push({
        customer: 'Steve',
        products: [
            {name: 'Diet Coke', quantity: 1},
            {name: 'Protein Bar', quantity: 2},
            {name: 'Protein Shake', quantity: 1}
        ],
        status: 'Completed'
    });

    orders.push({
        customer: 'Alex',
        products: [
            {name: 'Protein Bar', quantity: 3},
            {name: 'Protein Shake', quantity: 2},
            {name: 'Salad', quantity: 2}
        ],
        status: 'Completed'
    });

    orders.push({
        customer: 'Michael',
        products: [
            {name: 'Diet Coke', quantity: 6},
            {name: 'Protein Bar', quantity: 12},
            {name: 'Protein Shake', quantity: 4},
            {name: 'Salad', quantity: 5}
        ],
        status: 'Pending'
    });
};

console.log ("Order list:")

//using forEach to see the customers and their order status for the order.
orders.forEach(i => {
    console.log(`Customer: ${i.customer}`)
    console.log(`Status: ${i.status}`)
//using forEach for the products arrays to see the individual products ordered from each customer
    i.products.forEach(i => {
        console.log(`${i.name}`)
        console.log(`quantity: ${i.quantity}`)
    });
});



//Task 4: Create a Function to Calculate Total for an Order

//Calling the calculateOrderTotal function
calculateOrderTotal();

function calculateOrderTotal(orders) {
    let orderTotal = orders.products;

    for (let price of orders.products) {
        orderTotal += calculateOrderTotal (price);
    }

    return orderTotal;
}

//Calculating the order total
const orderTotal = calculateOrderTotal(i);
console.log(`Order Total for the order is: $${orderTotal}`);



//Task 5: Create a Function to Mark an Order as Completed

completeOrder();

function completeOrder(i) {
    orders.find (customer)
    return "Status: Completed"
}

orders.forEach(completeOrder =>
    console.log(completeOrder))
    