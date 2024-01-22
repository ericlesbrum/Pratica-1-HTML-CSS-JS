import { ProductController } from '../Controller/ProductController.js';
import { ClearFields } from '../utils/ClearFields.js';
export const AddItem = {
    body: `
    <div>
        <form id='formProduct'>
            <div class="text-start">
                <div class="mb-3 mt-3">
                    <label class="form-label" for="prodCod">Insira o codigo do produto</label>
                    <input class="form-control" type="tel" id="prodCod"
                        autofocus>
                </div>
                <div class="mb-3 mt-3">
                    <label class="form-label" for="prodName">Insira o nome do produto</label>
                    <input class="form-control" type="tel" id="prodName"
                        autofocus>
                </div>
                <div class="mb-3 mt-3">
                    <label class="form-label" for="costPrice">Digite o preco de custo</label>
                    <input class="form-control" type="tel" id="costPrice"
                        autofocus>
                </div>
                <div class="mb-3 mt-3">
                    <label class="form-label" for="sellingPrice">Digite o preco de venda</label>
                    <input class="form-control" type="tel" id="sellingPrice"
                        autofocus>
                </div>
                <div class="mb-3 mt-3">
                    <label class="form-label" for="amount">Quantidade em estoque </label>
                    <input class="form-control" type="tel" id="amount"
                        autofocus>
                </div>
                <button type="submit" id="submitProduct" class="btn btn-primary">Confirmar</button>
            </div>
        </form>
    </div>
    `,
    InsertProducts: () => {
        const submitProduct = document.querySelector('#submitProduct');
        const inputs = document.querySelectorAll('input');
        const productController = new ProductController();
        submitProduct.addEventListener('click', (event) => {
            event.preventDefault();
            const obj = productController.AddProduct(Number(inputs[0].value), inputs[1].value, Number(inputs[2].value), Number(inputs[3].value), Number(inputs[4].value))
            ClearFields(inputs);
            if (obj.status) {
                console.log(obj.message);
            }
            else
                console.log(obj.message)
        })
    },
}
