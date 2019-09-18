//Using npm
//what it does is to put fake info 
var faker = require('faker');

var randomDepartment = faker.commerce.department()
var randomProductName = faker.commerce.productName(); //Ergonomic Steel Shirt
var randomPrice = faker.commerce.price() //513.00
var randomColor = faker.commerce.color() //grey
var randomProduct = faker.commerce.product() // Chair
var randomProductMaterial = faker.commerce.productMaterial() //Rubber


// console.log(faker.fake(randomDepartment));
// console.log(faker.fake(randomProductName));
// console.log(faker.fake(randomPrice));
// console.log(faker.fake(randomColor));
// console.log(faker.fake(randomProduct));
// console.log(faker.fake(randomProductMaterial));


console.log(faker.commerce.department()  + " - " + faker.commerce.productName()  +"  -  " + faker.commerce.price()  + " -  " +  faker.commerce.color());