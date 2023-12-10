import { DataBase } from '../Database/DataBase.js'
export class ProductModel {
    constructor(prodCod, prodName, costPrice, sellingPrice, amount, totalSelling) {
        this.prodCod = prodCod;
        this.prodName = prodName;
        this.costPrice = costPrice;
        this.sellingPrice = sellingPrice;
        this.amount = amount;
        this.totalSelling = totalSelling;
        this.DataBase = new DataBase();
    }
    Add(prodCod, object) {
        const items = this.GetProducts();
        const result = items.filter((element) => element["prodCod"] === prodCod);
        if (result === null) {
            items.push(object);
            this.DataBase.Add("PRODUCTS", JSON.stringify(items));
            return true;
        }
        return false;
    }
    Get(value=null) {
        if(!value)
            return JSON.parse(this.DataBase.Get("PRODUCTS"));
        const items = JSON.parse(this.DataBase.Get("PRODUCTS"));
        const result = items.filter((element) => element["prodCod"] === value);
        if (result !== null) {
            return result[0];
        }
        return items;
    }
    Update() {
    }
    Remove(prodCod) {
        const items = this.GetProducts();
        const result = items.filter((element) => element["prodCod"] !== prodCod);
        if (result !== null) {
            this.DataBase.Add("PRODUCTS", JSON.stringify(items));
            return true;
        }
        return false;
    }
}