//Coberturas en las que se realizara una operación
const { constants } = require('../common/constants');


class CarInsurance {

    constructor(products = []) {
        this.products = products;
    }

    getPriceFullCoverage(product) {
        return product.price + (product.sellIn < 0 ? 2 : 1);
    }

    getPriceLowMediumCoverage(product) {
        return product.price - (product.sellIn < 0 ? 2 : 1);
    }

    getPriceSpecialFullCoverage(product) {
        //el producto ya no es válido
        if (product.sellIn < 0) {
            return 0;
        }
        if (product.sellIn <= 5) {
            return product.price + 3;
        }
        if (product.sellIn <= 10) {
            return product.price + 2;
        }
        return product.price + 1;
    }

    getPriceSuperSale(product) {
        return product.price - 2 * (product.sellIn < 0 ? 2 : 1);
    }

    //Validar que precio cumpla con las condiciones solicitadas entre 0 y 50
    validatePrice(price) {
        return price < 0 ? 0 : (price > 50 ? 50 : price);
    }


    updatePrice() {
        for (let i = 0; i < this.products.length; i++) {

            switch (this.products[i].name) {
                case constants.FULL_COVERAGE:
                    this.products[i].price = this.validatePrice(this.getPriceFullCoverage(this.products[i]));
                    this.products[i].sellIn--
                        break;
                case constants.LOW_COVERAGE:
                    this.products[i].price = this.validatePrice(this.getPriceLowMediumCoverage(this.products[i]));
                    this.products[i].sellIn--
                        break;
                case constants.MEDIUM_COVERAGE:
                    this.products[i].price = this.validatePrice(this.getPriceLowMediumCoverage(this.products[i]));
                    this.products[i].sellIn--
                        break;
                case constants.SPECIAL_FULL_COVERAGE:
                    this.products[i].price = this.validatePrice(this.getPriceSpecialFullCoverage(this.products[i]));
                    this.products[i].sellIn--
                        break;
                case constants.SUPER_SALE:
                    this.products[i].price = this.validatePrice(this.getPriceSuperSale(this.products[i]));
                    this.products[i].sellIn--
                        break;
            }
        }
        return this.products;
    }

}

module.exports = { CarInsurance };