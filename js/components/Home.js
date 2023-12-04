import { ProductController } from '../Controller/ProductController.js';
import { TableBody } from '../utils/TableBody.js';
import { Paginate, PaginateButtons } from '../utils/Paginate.js'
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
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class='tableHeader' id='prodCod'>Cod. Produto</th>
                            <th class='tableHeader' id='prodName'>Nome do Produto</th>
                            <th class='tableHeader' id='costPrice'>Quantidade em estoque</th>
                            <th class='tableHeader' id='amount'>Preço de custo</th>
                            <th class='tableHeader' id='sellingPrice'>Preço de venda</th>
                            <th class='tableHeader' id='totalSelling'>Total Vendido</th>
                        </tr>
                    </thead>
                    <tbody id="bodyTable">
                        ${TableBody(products)}
                    </tbody>
                </table>
            </div>
            <div class='text-end'>
                <ul class="pagination pagination-ms">
                ${PaginateButtons(pageLimit, productsdb.length)}
                </ul>
            </div>
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
    }
}