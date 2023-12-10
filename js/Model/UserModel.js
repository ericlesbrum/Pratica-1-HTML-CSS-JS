import { DataBase } from "../database/DataBase.js";
export class UserModel {
    name = "Administrador";
    job = "Administrador";
    department = "Administrativo";
    constructor(login, pwd) {
        this.login = login;
        this.pwd = pwd;
        this.DataBase = new DataBase();
    }
    AddSession() {
        this.DataBase.Add("LOGIN", `
        {
            "name":"Administrador",
            "job":"Administrador",
            "department":"Administrativo"
        }
        `);
    }
    GetSession() {
        return this.DataBase.Get("LOGIN")
    }
    DestroySession() {
        this.DataBase.Remove("LOGIN")
    }
}