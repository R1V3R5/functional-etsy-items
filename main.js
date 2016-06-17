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