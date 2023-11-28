import { UserModel } from "../Model/UserModel.js";
export class DashboardController {
    constructor() {
        this.UserModel = new UserModel();
    }
    GetUserInfo() {
        return this.UserModel.GetSession();
    }
    ExistSession() {
        let existSession = this.UserModel.GetSession();
        if (existSession === null)
            window.location.href = '../Index.html';
    }
    Logout() {
        this.UserModel.DestroySession();
        window.location.href = '../Index.html';
    }
}