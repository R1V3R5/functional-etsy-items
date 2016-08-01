//---------------1----------------------

var prices = items.map(function(item) {
  return item.price;
});
// total = price.reduce( (prev, curr) => prev + curr );
var total = prices.reduce(function(prev, curr) {
  return prev + curr;
});
var average = (total / items.length)
var avg = ("The average price of all items is $" + average.toFixed(2))
var answer1 = document.querySelector("#answer1");
answer1.innerHTML = avg



//--------------2---------------------------
//Show me how to get an array of items that cost between $14.00 and $18.00 USD
var between = items.filter(function(item) {
  return item.price > 14 && item.price < 18
});

var betweenArray = between.map(function(item) {
  return item.title;
});

// console.log(betweenArray)
betweenArray.forEach(function (title) {
  document.getElementById("answer2").innerHTML += title + "<br><br>";
});

// var answer2 = document.querySelector("#answer2");
// answer2.innerHTML = betweenArray



//--------------3----------------------------
//Which item has a "GBP" currency code? Display it's name and price.
var currency = items.filter(function(item) {
  return item.currency_code == "GBP"
});

var currencyCode = currency.map(function(item) {
  return (item.title + " costs £" + item.price)
});

var answer3 = document.querySelector("#answer3");
answer3.innerHTML = currencyCode



//---------------4-------------------------------
//Display a list of all items who are made of wood.

var wood = items.filter(function(item) {
  return item.materials.includes("wood")
});

var itemsWithWood = wood.map(function(item) {
  return (item.title + " is made of wood!");
});

itemsWithWood.forEach(function (title) {
  document.getElementById("answer4").innerHTML += title + "<br><br>";
});


//-------------5-----------------------------------
//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var manyMaterial = items.filter(function(item) {
  return item.materials.length >= 8
});

var manyMaterialItem = manyMaterial.map(function(item) {
  return (item.title + " is made of " + item.materials.length + " materials!");
});

var features = manyMaterial.map(function(item) {
  return [item.title, item.materials.length, item.materials];
});



var materialList = manyMaterial.map(function(item) {
  // var matsArray = item.materials;
  return item.materials;
  // matsArray
});
newHTML = ""
var answer5 = document.querySelector("#answer5");
manyMaterial.forEach(function(item) {
  newHTML += "<p>" + item.title + " used" + item.materials.length + " materials" + "</p>";
  newHTML += "<ul class=\"materials\">";
  item.materials.forEach(function(material) {
    newHTML += "<li class=\"material\">" + material + "</li>";
  });
  newHTML += "</ul>"
});
answer5.innerHTML = newHTML


//---------------6-----------------------------------
//How many items were made by their sellers?

var whoMade = items.filter(function(item) {
  return item.who_made === "i_did"
});

var made = (whoMade.length + " were made by their sellers!")
var answer6 = document.querySelector("#answer6");
answer6.innerHTML = made