const expect = require('chai').expect;
const { constants } = require('../src/common/constants');
const { Product } = require('../src/model/product');
const { CarInsurance } = require('../src/model/carInsurance');

describe(constants.FULL_COVERAGE, () => {
    it('should sellIn and price be equal to 1', () => {
        const carInsurance = new CarInsurance([new Product(constants.FULL_COVERAGE, 2, 0)]);
        const products = carInsurance.updatePrice();
        expect(products[0].sellIn).equal(1);
        expect(products[0].price).equal(1);
    });
});

describe(constants.FULL_COVERAGE + " after 30 days", () => {
    it('should sellIn be equal to -28 and price be equal to 50', () => {
        const carInsurance = new CarInsurance([new Product(constants.FULL_COVERAGE, 2, 0)]);
        let products = carInsurance.updatePrice();
        for (let i = 1; i < 30; i += 1) {
            products = carInsurance.updatePrice();
        }
        expect(products[0].sellIn).equal(-28);
        expect(products[0].price).equal(50);
    });
});

describe(constants.LOW_COVERAGE, () => {
    it('should sellIn be equal to 4 and price be equal to 6', () => {
        const carInsurance = new CarInsurance([new Product(constants.LOW_COVERAGE, 5, 7)]);
        const products = carInsurance.updatePrice();
        expect(products[0].sellIn).equal(4);
        expect(products[0].price).equal(6);
    });
});

describe(constants.LOW_COVERAGE + " after 30 days", () => {
    it('should sellIn be equal to -25 and price be equal to 0', () => {
        const carInsurance = new CarInsurance([new Product(constants.LOW_COVERAGE, 5, 7)]);
        let products = carInsurance.updatePrice();
        for (let i = 1; i < 30; i += 1) {
            products = carInsurance.updatePrice();
        }
        expect(products[0].sellIn).equal(-25);
        expect(products[0].price).equal(0);
    });
});

describe(constants.MEDIUM_COVERAGE, () => {
    it('should sellIn be equal to 9 and price be equal to 19', () => {
        const carInsurance = new CarInsurance([new Product(constants.MEDIUM_COVERAGE, 10, 20)]);
        const products = carInsurance.updatePrice();
        expect(products[0].sellIn).equal(9);
        expect(products[0].price).equal(19);
    });
});

describe(constants.MEDIUM_COVERAGE + " after 30 days", () => {
    it('should sellIn be equal to -20 and price be equal to 0', () => {
        const carInsurance = new CarInsurance([new Product(constants.MEDIUM_COVERAGE, 10, 20)]);
        let products = carInsurance.updatePrice();
        for (let i = 1; i < 30; i += 1) {
            products = carInsurance.updatePrice();
        }
        expect(products[0].sellIn).equal(-20);
        expect(products[0].price).equal(0);
    });
});

describe(constants.MEGA_COVERAGE, () => {
    it('should sellIn be equal to 0 and price be equal to 80', () => {
        const carInsurance = new CarInsurance([new Product(constants.MEGA_COVERAGE, 0, 80)]);
        const products = carInsurance.updatePrice();
        expect(products[0].sellIn).equal(0);
        expect(products[0].price).equal(80);
    });
});

describe(constants.MEDIUM_COVERAGE + " after 30 days", () => {
    it('should sellIn be equal to -20 and price be equal to 0', () => {
        const carInsurance = new CarInsurance([new Product(constants.MEGA_COVERAGE, 0, 80)]);
        let products = carInsurance.updatePrice();
        for (let i = 1; i < 30; i += 1) {
            products = carInsurance.updatePrice();
        }
        expect(products[0].sellIn).equal(0);
        expect(products[0].price).equal(80);
    });
});

describe(constants.SPECIAL_FULL_COVERAGE, () => {
    it('should sellIn be equal to 14 and price be equal to 21', () => {
        const carInsurance = new CarInsurance([new Product(constants.SPECIAL_FULL_COVERAGE, 15, 20)]);
        const products = carInsurance.updatePrice();
        expect(products[0].sellIn).equal(14);
        expect(products[0].price).equal(21);
    });
});

describe(constants.SPECIAL_FULL_COVERAGE + " after 30 days", () => {
    it('should sellIn be equal to -15 and price be equal to 0', () => {
        const carInsurance = new CarInsurance([new Product(constants.SPECIAL_FULL_COVERAGE, 15, 20)]);
        let products = carInsurance.updatePrice();
        for (let i = 1; i < 30; i += 1) {
            products = carInsurance.updatePrice();
        }
        expect(products[0].sellIn).equal(-15);
        expect(products[0].price).equal(0);
    });
});

describe(constants.SUPER_SALE, () => {
    it('should sellIn be equal to 2 and price be equal to 4', () => {
        const carInsurance = new CarInsurance([new Product(constants.SUPER_SALE, 3, 6)]);
        const products = carInsurance.updatePrice();
        expect(products[0].sellIn).equal(2);
        expect(products[0].price).equal(4);
    });
});

describe(constants.SUPER_SALE + " after 30 days", () => {
    it('should sellIn be equal to -27 and price be equal to 0', () => {
        const carInsurance = new CarInsurance([new Product(constants.SUPER_SALE, 3, 6)]);
        let products = carInsurance.updatePrice();
        for (let i = 1; i < 30; i += 1) {
            products = carInsurance.updatePrice();
        }
        expect(products[0].sellIn).equal(-27);
        expect(products[0].price).equal(0);
    });
});