import { UserModel } from "../Model/UserModel.js";
export class LoginController {
    constructor() {
        this.UserModel = new UserModel();
    }
    LoginRequest(idUser, pwd, credential) {
        let existSession = this.UserModel.GetSession();
        if (existSession !== null) {
            window.location.href = './pages/Dashboard.html';
            return;
        }
        if (idUser.value === "ADMIN" && pwd.value === "1234") {
            this.UserModel.login=idUser.value;
            this.UserModel.pwd=pwd.value;
            this.UserModel.AddSession();
            window.location.href = './pages/Dashboard.html';
        }
        else {
            credential.classList.remove("visually-hidden");
        }
    }
}