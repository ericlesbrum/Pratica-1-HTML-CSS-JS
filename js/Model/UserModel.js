export class UserModel {
    constructor(login, pwd) {
        this.login = login;
        this.pwd = pwd;
    }
    AddSession() {
        let existSession = localStorage.getItem("LOGIN");
        if (existSession === null)
            localStorage.setItem("LOGIN", `{"login":${this.login},"pwd":${this.pwd}}`);
        else
        {
            //Logica caso haja uma sessão existente;
        }
    }
    GetSession() {
        return localStorage.getItem("LOGIN");
    }
}