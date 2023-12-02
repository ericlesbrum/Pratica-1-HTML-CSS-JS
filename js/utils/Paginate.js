function Paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
function PaginateButtons(page_size, length) {
    let lengthPaginate = Math.ceil(length /page_size);
    let paginateBody = '';
    for (let index = 1; index <= lengthPaginate; index++) {
        paginateBody += `
            <li class="page-item">
                <span class="page-link text-black">${index.toFixed()}</span>
            </li>
        `;
    }
    return paginateBody;
}
export {
    Paginate,
    PaginateButtons
}