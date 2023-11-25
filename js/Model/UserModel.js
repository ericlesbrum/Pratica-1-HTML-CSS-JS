export class UserModel {
    name = "Administrador";
    job = "Administrador";
    department = "Administrativo";
    constructor(login, pwd) {
        this.login = login;
        this.pwd = pwd;
    }
    AddSession() {
        localStorage.setItem("LOGIN", `
        {
            "name":"Administrador",
            "job":"Administrador",
            "department":"Administrativo"
        }
        `);
    }

    static GetSession() {
        return localStorage.getItem("LOGIN");
    }
    static DestroySession() {
        localStorage.removeItem("LOGIN");
    }
}