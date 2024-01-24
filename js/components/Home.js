import { ProductController } from '../Controller/ProductController.js';
import { TableBody } from '../utils/TableBody.js';
import { Paginate, PaginateButtons } from '../utils/Paginate.js'
import { SetRemoveItem } from './RemoveItem.js';
import { Modal, ChangeModalText } from '../utils/Modal.js';
const productController = new ProductController();
const productsdb = productController.GetProducts();
const pageLimit = 10;
var pageCount = 1;
var products = Paginate(productsdb, pageLimit, pageCount);
var elementID = null;
export const Home = {
    body: `
        <div>
            <div>
                <h4>Estoque</h4>
            </div>
            <div>
                <div>
                    <input/>
                    <img src="/img/icons/search.svg" alt="Excluir"/>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class='tableHeader' id='prodCod'>Cod. Produto</th>
                            <th class='tableHeader' id='prodName'>Nome do Produto</th>
                            <th class='tableHeader' id='costPrice'>Quantidade em estoque</th>
                            <th class='tableHeader' id='amount'>Preço de custo</th>
                            <th class='tableHeader' id='sellingPrice'>Preço de venda</th>
                            <th class='tableHeader' id='totalSelling'>Total Vendido</th>
                            <th class='tableHeader' id='operation'>Operações</th>
                        </tr>
                    </thead>
                    <tbody id="bodyTable">
                        ${TableBody(products)}
                    </tbody>
                </table>
            </div>
            <div class='text-end'>
                <ul class="pagination pagination-ms">
                    <li class="page-item" id="previous">
                        <a class="page-link text-black">Anterior</a>
                    </li>
                    ${PaginateButtons(pageLimit, productsdb.length)}
                    <li class="page-item" id="next">
                        <a class="page-link text-black">Próximo</a>
                    </li>
                </ul>
            </div>
            ${Modal}
        </div>
        `,
    ChangePageOnClick: () => {
        const pageLinks = document.querySelectorAll('.page-item');
        const bodyTable = document.querySelector('#bodyTable');
        pageLinks.forEach(element => {
            element.addEventListener('click', () => {
                elementID = null;
                pageCount = parseInt(element.childNodes[1].innerHTML);
                products = Paginate(productsdb, pageLimit, pageCount);
                bodyTable.innerHTML = TableBody(products);
            })
        })
    },
    SortProductsBy() {
        const productsProperty = document.querySelectorAll('.tableHeader');
        productsProperty.forEach(element => {
            element.addEventListener('click', () => {
                if (elementID === element.id) {
                    products.reverse();
                }
                else {
                    if (element.id === 'prodCod' && elementID === null) {
                        products.reverse();
                    }
                    else
                        this.SortArray(element);
                    elementID = element.id;
                }
                bodyTable.innerHTML = TableBody(products);
            })
        });
    },
    SortArray(element) {
        productsdb.sort((a, b) => {
            return a[element.id] < (b[element.id]) ? -1 : (a[element.id] > b[element.id]);
        })
        products = Paginate(productsdb, pageLimit, pageCount);
    },
    SetRemoveProduct() {
        const removeProductsButton = document.querySelectorAll(".delete");
        removeProductsButton.forEach(element => {
            element.addEventListener('click', () => {
                ChangeModalText('Você deseja remover este item?',
                    `O item que será removido é: ${element.getAttribute('prodName')}, deseja efetuar esta ação?`,
                    [SetRemoveItem], element.getAttribute('prodCod'));
            })
        });
    }
}