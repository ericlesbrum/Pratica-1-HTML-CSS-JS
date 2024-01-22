import { DataBase } from '../Database/DataBase.js'
import { status } from '../utils/status.js';
export class ProductModel {
    constructor(prodCod, prodName, costPrice, sellingPrice, amount = 0, totalSelling = 0) {
        this.prodCod = prodCod;
        this.prodName = prodName;
        this.costPrice = costPrice;
        this.sellingPrice = sellingPrice;
        this.amount = amount;
        this.totalSelling = totalSelling;
        this.DataBase = new DataBase();
    }
    Add(prodCod, object) {
        const items = this.Get();
        const result = items.filter((element) => element["prodCod"] === prodCod);
        if (result.length === 0) {
            items.push(object.ConvertToJSONFormat());
            this.DataBase.Add("PRODUCTS", items);
            return status("Produto inserido com sucesso!", false);
        }
        return status("Já existe um produto registrado com esse código", false);
    }
    Get(value = null) {
        if (value === null || value === undefined)
            return JSON.parse(this.DataBase.Get("PRODUCTS"));
        const items = JSON.parse(this.DataBase.Get("PRODUCTS"));
        const result = items.filter((element) => element["prodCod"] === value);
        return result[0] === undefined ? result[0] : null;
    }
    Update() {
    }
    Remove(prodCod) {
        const items = this.Get();
        const result = items.filter((element) => element["prodCod"] !== prodCod);
        console.log(JSON.stringify(result));
        if (result.length !== 0) {
            this.DataBase.Add("PRODUCTS", result);
            return status("Produto removido com sucesso!", true);
        }
        return status("Produto não encontrado", false);
    }
    ConvertToJSONFormat() {
        return {
            prodCod: this.prodCod,
            prodName: this.prodName,
            costPrice: this.costPrice,
            sellingPrice: this.sellingPrice,
            amount: this.amount,
            totalSelling: this.totalSelling,

        };
    }
}