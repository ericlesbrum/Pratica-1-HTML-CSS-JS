export function AddItem() {
    return `
    <form>
        <div class="text-start">
            <div class="mb-3 mt-3">
                <label class="form-label" for="idUser">Login</label>
                <input class="form-control" type="tel" id="idUser" placeholder="exemplo.login" required
                    autofocus>
            </div>
            <div class="mb-3">
                <label class="form-label" for="inputPassword">Senha</label>
                <input class="form-control" type="password" id="inputPassword" placeholder="****************"
                    required>
            </div>
        </div>
    </form>
    `;
} 