import { ProductController } from "../Controller/ProductController.js";
export const EditItem={
    body:`
    <form id='formProduct'>
            <div class="text-start">
                <div class="mb-3 mt-3">
                    <label class="form-label" for="prodCod">Código do produto</label>
                    <input class="form-control" type="tel" id="prodCod" autofocus>
                </div>
                <div class="mb-3 mt-3">
                    <label class="form-label" for="prodName">Nome do produto</label>
                    <input class="form-control" type="tel" id="prodName"
                        autofocus>
                </div>
                <div class="mb-3 mt-3">
                    <label class="form-label" for="sellingPrice">Preço de venda</label>
                    <input class="form-control" type="tel" id="sellingPrice"
                        autofocus>
                </div>
                <div class="mb-3 mt-3">
                    <label class="form-label" for="amount">Quantidade em estoque </label>
                    <input class="form-control" type="tel" id="amount"
                        autofocus>
                </div>
                <button type="submit" id="cancel" class="btn btn-danger">Cancelar</button>
                <button type="submit" id="submitProduct" class="btn btn-primary">Confirmar</button>
            </div>
        </form>
    `,
    
}