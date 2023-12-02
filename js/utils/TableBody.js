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
            </tr>
            `;}
    )
    return tbody;
}