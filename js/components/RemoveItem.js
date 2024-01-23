import { ProductController } from "../Controller/ProductController.js";
export const SetRemoveItem = (value) => {
    const productController = new ProductController();
    const obj = productController.RemoveProducts(parseInt(value));
    if (obj.status) {
        console.log(obj.message);
    }
    else
        console.log(obj.message)
}