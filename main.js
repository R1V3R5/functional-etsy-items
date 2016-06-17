//---------------1----------------------

var prices = items.map(function(item) {
  return item.price;
});

// total = price.reduce( (prev, curr) => prev + curr );

var total = prices.reduce(function(prev, curr) {
  return prev + curr;
});

var average = (total / items.length)

var avg = average.toFixed(2)


//--------------2---------------------------
//Show me how to get an array of items that cost between $14.00 and $18.00 USD
var between = items.filter(function(item) {
  if (item.price > 14 && item.price < 18) {
    return item;
  }
});

var betweenArray = between.map(function(item) {
  return item.title;
});

//--------------3----------------------------
//Which item has a "GBP" currency code? Display it's name and price.
var currency = items.filter(function(item) {
  if (item.currency_code == "GBP") {
    return item;
  }
});

var currencyCode = currency.map(function(item) {
  return (item.title + " costs " + item.price)
});

//---------------4-------------------------------
//Display a list of all items who are made of wood.

var wood = items.filter(function(item) {
  var material = item.materials
  if (material.includes("wood")) {
    return item;
  }
});

var itemsWithWood = wood.map(function(item) {
  return (item.title + " is made of wood!");
});


//-------------5-----------------------------------
//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.