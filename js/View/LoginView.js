import { LoginController } from "../Controller/LoginController.js";
class LoginView {
    Copyright() {
        const coppy = document.querySelector(".coppy");
        coppy.innerHTML = `
            &copy; 2017-${new Date().getFullYear()}
        `;
    }
    ValidateForm() {
        const form = document.querySelector('form');
        const idUser = document.querySelector("#idUser");
        const pwd = document.querySelector("#inputPassword");
        const credential = document.querySelector("#msgError");
        form.addEventListener('submit', event => {
            event.preventDefault();
            const loginController = new LoginController();
            loginController.LoginRequest(idUser, pwd, credential);
        });
    }
}
const loginView = new LoginView();
loginView.Copyright();
loginView.ValidateForm();