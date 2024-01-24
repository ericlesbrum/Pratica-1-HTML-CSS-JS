export const Modal = `
    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">{title}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                {body}
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="confirm">Confirmar</button>
            </div>
        </div>
    </div>
 `;
export function ChangeModalText(title, body, Action = null, value = null) {
    const modalTitle = document.querySelector(".modal-header");
    const modalBody = document.querySelector(".modal-body");
    modalTitle.innerHTML = `
    <h4 class="modal-title">${title}</h4>
    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>`;
    modalBody.innerHTML = body;
    const modalFooter = document.querySelector('.modal-footer');
    if (Action.length > 0) {
        modalFooter.innerHTML = `
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="confirm">Confirmar</button>
        `
        let buttonAction = document.querySelector('#confirm');
        buttonAction.addEventListener('click', () => {
            Action[0](value);
            location.reload();
        })
    }
}