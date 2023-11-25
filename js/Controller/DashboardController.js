import { UserModel } from "../Model/UserModel.js";
export class DashboardController {
    GetUserInfo() {
        return UserModel.GetSession();
    }
    ExistSession() {
        let existSession = UserModel.GetSession();
        if (existSession === null)
            window.location.href = '../Index.html';
    }
    Logout() {
        UserModel.DestroySession();
        window.location.href = '../Index.html';
    }
}