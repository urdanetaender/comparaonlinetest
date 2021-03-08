const { Product } = require('./model/product');
const { CarInsurance } = require('./model/carInsurance');

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

const titlePrinter = (i) => {
    console.log('');
    console.log(`-------- day ${i} --------`);
    console.log('name, sellIn, price');
};

const productPrinter = (product) => {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

//Dia 0 o de inicio del ciclo para la actualización de precios
titlePrinter(0)
productsAtDayZero.forEach(productPrinter);
for (let i = 1; i <= 30; i += 1) {
    titlePrinter(i)
    carInsurance.updatePrice().forEach(productPrinter);
}