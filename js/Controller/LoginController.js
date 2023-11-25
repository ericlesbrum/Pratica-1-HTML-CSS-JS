import { UserModel } from "../Model/UserModel.js";
export class LoginController {
    constructor() {
        this.user = "";
    }
    LoginRequest(idUser, pwd, credential) {
        if (idUser.value === "ADMIN" && pwd.value === "1234") {
            this.user = new UserModel(idUser.value, pwd.value);
            this.user.AddSession();
            // window.location.href = './pages/Dashboard.html';
        }
        else {
            credential.classList.remove("visually-hidden");
        }
    }
    GetUserInformation() {
        return this.user.GetSession();
    }
}