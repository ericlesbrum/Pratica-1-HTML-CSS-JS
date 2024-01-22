import { ProductModel } from "../Model/ProductModel.js";
export class ProductController {
    constructor() {
        this.ProductModel = new ProductModel();
    }
    AddProduct(prodCod, prodName, costPrice, sellingPrice, amount = 0, totalSelling = 0) {
        const prod = new ProductModel(prodCod, prodName, costPrice, sellingPrice, amount = 0, totalSelling = 0);
        return this.ProductModel.Add(prodCod, prod);
    }
    GetProducts(prodCod = null) {
        return this.ProductModel.Get(prodCod);
    }
    UpdateProducts() {

    }
    RemoveProducts(prodCod) {
        return this.ProductModel.Remove(prodCod);
    }
}