import { ProductModel } from "../Model/ProductModel.js";
export class ProductController {
    constructor() {
        this.ProductModel = new ProductModel();
    }
    AddProduct(prodCod, prodName, costPrice, sellingPrice, amount = 0, totalSelling = 0) {
        const prod = new ProductModel(prodCod, prodName, costPrice, sellingPrice, amount = 0, totalSelling = 0);
        let existProduct = this.GetProducts(prodCod);
        if (existProduct === undefined) {
            this.ProductModel.Add(prodCod, prod);
            return { message: "Produto inserido com sucesso!", status: true };
        }
        else {
            return { message: "Falha ao inserir um produto!", status: false };
        }
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