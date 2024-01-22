export function TableBody(products) {
    let tbody='';
    products.forEach(element => {
        tbody += `
            <tr>
                <td>${element['prodCod']}</td>
                <td>${element['prodName']}</td>
                <td>${element['costPrice']}</td>
                <td>${element['amount']}</td>
                <td>${element['sellingPrice']}</td>
                <td>${element['totalSelling']}</td>
                <td>
                    <img src="/img/icons/edit.svg" alt="Editar"/>
                    <img src="/img/icons/dollar-sign.svg" alt="Editar"/>
                    <img src="/img/icons/trash-2.svg" alt="Excluir"/>
                </td>
            </tr>
            `;}
    )
    return tbody;
}