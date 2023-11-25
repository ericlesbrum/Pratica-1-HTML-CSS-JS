import { UserModel } from "../Model/UserModel.js";
export class LoginController {
    LoginRequest(idUser, pwd, credential) {
        let existSession = UserModel.GetSession();
        if (existSession !== null) {
            window.location.href = './pages/Dashboard.html';
            return;
        }
        if (idUser.value === "ADMIN" && pwd.value === "1234") {
            this.user = new UserModel(idUser.value, pwd.value);
            this.user.AddSession();
            window.location.href = './pages/Dashboard.html';
        }
        else {
            credential.classList.remove("visually-hidden");
        }
    }
}