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
                    <div class="edit" element='${[
                        element['prodCod'],
                        element['prodName'],
                        element['amount'],
                        element['costPrice'],
                        element['sellingPrice'],
                        element['totalSelling']
                    ]}'>
                        <img src="/img/icons/edit.svg" alt="Editar"/>
                    </div>
                    <div class="sell">
                        <img src="/img/icons/dollar-sign.svg" alt="Editar" />
                    </div>
                    <div data-bs-toggle="modal" data-bs-target="#myModal" class="delete" element='${[
                            element['prodCod'],
                            element['prodName']
                        ]}'>
                        <img src="/img/icons/trash-2.svg" alt="Excluir"  />
                    </div>
                </td>
            </tr>
            `;
    }
    )
    return tbody;
}