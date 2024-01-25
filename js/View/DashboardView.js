import { DashboardController } from "../Controller/DashboardController.js";
import { CheckTime } from "../utils/CheckTime.js"
import { Menu } from "../components/Menu.js";
import { AddItem } from "../components/AddItem.js";
import { Home } from "../components/Home.js";

class DashboardView {
    constructor() {
        this.dashboardController = new DashboardController();
        this.mainContent = document.querySelector("#main");
        this.menu = document.querySelector("#menu");
    }
    Init() {
        this.dashboardController.ExistSession();
        this.mainContent.innerHTML = Home.body;
        this.SetMenu();
    }
    SetMenu() {
        this.menu.innerHTML = Menu();
        this.SetUserInfo();
        this.ClockTimer();
        this.SetTimer();
        this.Logout();
        this.SetAddItem();
        this.SetHome();
    }
    SetHome() {
        const home = document.querySelector("#home");
        home.addEventListener("click", () => {
            this.mainContent.innerHTML = Home.body;
            Home.ChangePageOnClick([Home.SetRemoveProduct, Home.EditProduct, Home.SortProductsBy]);
            Home.SetRemoveProduct();
            Home.SortProductsBy();
            Home.EditProduct();
        });
        Home.ChangePageOnClick([Home.SetRemoveProduct, Home.SortProductsBy, Home.EditProduct]);
        Home.SetRemoveProduct();
        Home.SortProductsBy();
        Home.EditProduct();
    }
    SetAddItem() {
        const addItem = document.querySelector("#addItem");
        addItem.addEventListener("click", () => {
            this.mainContent.innerHTML = AddItem.body;
            AddItem.InsertProducts();
        });
    }
    SetTimer() {
        setInterval(this.ClockTimer, 1000);
    }
    SetUserInfo() {
        const user = document.querySelector("#user");
        let infoSession = JSON.parse(this.dashboardController.GetUserInfo());
        let content = `
            <span class="d-block" id="UserName">Usuário : ${infoSession["name"]}</span>
            <span class="d-block" id="Job">Cargo : ${infoSession["job"]}</span>
            <span class="d-block" id="Setor">Setor : ${infoSession["department"]}</span>
        `
        user.innerHTML = content;
    }
    ClockTimer() {
        const timer = document.querySelector("#timer");
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        hours = CheckTime(hours);
        minutes = CheckTime(minutes);
        seconds = CheckTime(seconds);
        let getCurrentDate = `
        <div>
            <span>${today.getDate()}/${CheckTime(today.getMonth() + 1)}/${today.getFullYear()}</span>
        </div>
        <div>
            <span>${hours + ":" + minutes + ":" + seconds}</span>
        </div>
        `;
        timer.innerHTML = getCurrentDate;
    }
    Logout() {
        const logout = document.querySelector("#logout");
        logout.addEventListener("click", () => {
            this.dashboardController.Logout();
        })
    }
}
const dashboardVieW = new DashboardView();
dashboardVieW.Init();