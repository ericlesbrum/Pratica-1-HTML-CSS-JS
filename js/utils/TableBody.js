import { SetRemoveItem } from '../components/RemoveItem.js';
export function TableBody(products) {
    let tbody = '';
    products.forEach(element => {
        tbody += `
            <tr>
                <td>${element['prodCod']}</td>
                <td>${element['prodName']}</td>
                <td>${element['amount']}</td>
                <td>${element['costPrice']}</td>
                <td>${element['sellingPrice']}</td>
                <td>${element['totalSelling']}</td>
                <td class="d-flex">
                    <div class="edit">
                        <img src="/img/icons/edit.svg" alt="Editar"/>
                    </div>
                    <div class="sell">
                        <img src="/img/icons/dollar-sign.svg" alt="Editar" />
                    </div>
                    <div class="delete" value='${element['prodCod']}'>
                        <img src="/img/icons/trash-2.svg" alt="Excluir"  />
                    </div>
                </td>
            </tr>
            `;
    }
    )
    return tbody;
}