import { ProductModel } from "../Model/ProductModel.js";
export class ProductController {
    constructor() {
        this.ProductModel = new ProductModel();
    }
    AddProducts(prodCod, object) {
        return this.ProductModel.Add(prodCod, object);
    }
    GetProducts(prodCod) {
        return this.ProductModel.Get(prodCod);
    }
    UpdateProducts() {

    }
    RemoveProducts(prodCod) {
        return this.ProductModel.Remove(prodCod);
    }
}