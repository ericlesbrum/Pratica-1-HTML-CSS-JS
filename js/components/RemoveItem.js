import { ClearFields } from "../utils/ClearFields.js"
import { ProductController } from "../Controller/ProductController.js";
export const RemoveItem = {
    body: `
    <div>
        <form id='formProduct'>
            <div class="text-start">
                <div class="mb-3 mt-3">
                    <label class="form-label" for="prodCod">Insira o codigo do produto</label>
                    <input class="form-control" type="tel" id="prodCod"
                        autofocus>
                </div>
                <button type="submit" id="submitProduct" class="btn btn-primary">Confirmar</button>
            </div>
        </form>
    </div>
    `,
    SetRemoveItem: () => {
        const submitProduct = document.querySelector('#submitProduct');
        const inputs = document.querySelectorAll('input');
        const productController = new ProductController();
        submitProduct.addEventListener('click', (event) => {
            event.preventDefault();
            const obj = productController.RemoveProducts(Number(inputs[0].value));
            ClearFields(inputs);
            if (obj.status) {
                console.log(obj.message);
            }
            else
                console.log(obj.message)
        })
    }
}