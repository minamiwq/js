var orders = [
    {
      id: 1,
      customer: "Jhon",
      items: [
         { name: "Ноутбук", price: 50000, quantity: 1 },
  
         { name: "Мышь", price: 1500, quantity: 2 }
     ]
    },
   {
    id: 2,
    customer: "Alan",
    items: [
        { name: "Телефон", price: 30000, quantity: 1 },
  
        { name: "Чехол", price: 1000, quantity: 3 }
       ]
   },
    {
    id: 3,
    customer: "Jane",
    items: [
        { name: "Клавиатура", price: 2500, quantity: 1 },
        { name: "Монитор", price: 12000, quantity: 1 }
      ]
   }  
  ];
var orderSums = 0;
var highestOrder = 0;
var highestOrderCustomer = '';
var productCounts = {};
var popularProduct = '';
var maxQuantity = 0;

for (var i = 0; i < orders.length; i++) {
  var order = orders[i];
  var sum = 0;
  for (var j = 0; j < order.items.length; j++) {
    var item = order.items[j];
    sum += item.price * item.quantity;

    if(productCounts[item.name]){
        productCounts[item.name] += item.quantity
    }else {
        productCounts[item.name] = item.quantity
    }
  }
  console.log(order.customer + " " + sum);
  orderSums = orderSums + sum; 

  if (sum > highestOrder){
    highestOrder = sum
    highestOrderCustomer = order.customer
  }
}
console.log("Общий доход: " + orderSums);
console.log("Дорогой заказ сделал- " + highestOrderCustomer +" " + highestOrder);
console.log("Проданные товары, количество:");
for (var product in productCounts) {
  console.log(product + ": " + productCounts[product] + " шт.");
}
for (var product in productCounts) {
    if (productCounts[product] > maxQuantity) {
      maxQuantity = productCounts[product];
      popularProduct = product;
    }
  }
  console.log("Популярный товар: " + popularProduct);