const COVERAGES = ['Full Coverage', 'Low Coverage', 'Medium Coverage', 'Special Full Coverage', 'Super Sale'];
class CarInsurance {

    constructor(products = []) {
        this.products = products;
    }

    getPriceFullCoverage(product) {
        return product.price + (product.sellIn < 0 ? 2 : 1);
    }

    getPriceLowCoverage(product) {
        return product.price - (product.sellIn < 0 ? 2 : 1);
    }

    getPriceMediumCoverage(product) {
        return product.price - (product.sellIn < 0 ? 2 : 1);
    }

    getPriceSpecialFullCoverage(product) {
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

    validatePrice(price) {
        return price < 0 ? 0 : (price > 50 ? 50 : price);
    }


    updatePrice() {
        for (let i = 0; i < this.products.length; i++) {

            switch (this.products[i].name) {
                case COVERAGES[0]:
                    this.products[i].price = this.validatePrice(this.getPriceFullCoverage(this.products[i]));
                    this.products[i].sellIn--
                        break;
                case COVERAGES[1]:
                    this.products[i].price = this.validatePrice(this.getPriceLowCoverage(this.products[i]));
                    this.products[i].sellIn--
                        break;
                case COVERAGES[2]:
                    this.products[i].price = this.validatePrice(this.getPriceMediumCoverage(this.products[i]));
                    this.products[i].sellIn--
                        break;
                case COVERAGES[3]:
                    this.products[i].price = this.validatePrice(this.getPriceSpecialFullCoverage(this.products[i]));
                    this.products[i].sellIn--
                        break;
                case COVERAGES[4]:
                    this.products[i].price = this.validatePrice(this.getPriceSuperSale(this.products[i]));
                    this.products[i].sellIn--
                        break;
            }
        }
        return this.products;
    }

}

module.exports = { CarInsurance };