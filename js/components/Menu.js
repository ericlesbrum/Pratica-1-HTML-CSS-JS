export function Menu() {
    return `
    <div class="text-center mb-2">
        <img src="../img/userimage.jpg" class="img-thumbnail tex" alt="userimage" style="max-width:120px;">
    </div>
    <div id="user" class="text-center">
    </div>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto px-2">
        <li id="home" class="nav-item nav-button">
            <span class="nav-link text-white">
                Home
            </span>
        </li>
        <li id="addItem" class="nav-item nav-button">
            <span class="nav-link text-white">
                Inserir produto no estoque
            </span>
        </li>
        <li id="report" class="nav-item nav-button">
            <span class="nav-link text-white">
                Emitir relatorio gerencial
            </span>
        </li>
        <li id="logout" class="nav-item nav-button">
            <span class="nav-link text-white">
                Sair
            </span>
        </li>
    </ul>
    <hr>
    <div class="text-center">
        <p id="timer"></p>
        <footer class="fixed-bottom">
            <p class="coppy text-center">&copy; 2017-2023</p>
        </footer>
    </div>
    `
}