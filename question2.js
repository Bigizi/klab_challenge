let items = [
    {name:'Bike', price: 100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];

// return an item with cheap price

let item = items.filter(function(item){
    return item.price == 5;
});

console.log(item);

// return an item with high price

let item1 = items.filter(function(item1){
    return item1.price == 1000;
});

console.log(item1);

// calculation of the full price of all product

let sum = null;

items.forEach(function(value, index, array){
    sum += value.price;
});

console.log(sum);

// calculation of the full price combined and remove product of price under 10

let sum1 = null;

items.forEach(function(value, index, array){
    sum1 = (sum1 + value.price) - (value.price < 10);
});

console.log(sum1);