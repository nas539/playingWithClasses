class Skincare {
    constructor(brand, faceWash, moisturizer, eyeCream) {
        this.brand = brand;
        this.faceWash = faceWash;
        this.moisturizer = moisturizer;
        this.eyeCream = eyeCream;
    }

     static brandDisplay(brand) {
        return `Welcome to ${brand} Skincare!!`;
    }

    faceWashDisplay() {
        return `We carry ${this.faceWash} to get your face clean!`;
    }

    moisturizerDisplay() {
        return `You should try our top selling moisturizer ${this.moisturizer}`;
    }

    eyeCreamDisplay() {
        return `If you want to look refreshed try our ${this.eyeCream} eye cream`;
    }
}

const ks = new Skincare("Kate Somerville", "Exfolicate", "Goat Milk", "Age Arrest");
const cc = new Skincare("Chanel", "Le Cream", "Sublamage", "Le Lift");
const sis = new Skincare("Sisley", "Cleansing Cream with Sage", "Sisleya", "Sisleya");


console.log(Skincare.brandDisplay(ks.brand))
console.log(ks.faceWashDisplay());
console.log(ks.moisturizerDisplay());
console.log(ks.eyeCreamDisplay());
console.log(Skincare.brandDisplay(cc.brand));
console.log(cc.faceWashDisplay());
console.log(cc.moisturizerDisplay());
console.log(cc.eyeCreamDisplay());
console.log(Skincare.brandDisplay(sis.brand))
console.log(sis.faceWashDisplay());
console.log(sis.moisturizerDisplay());
console.log(sis.eyeCreamDisplay());