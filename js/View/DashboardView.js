import { DashboardController } from "../Controller/DashboardController.js";
import { CheckTime } from "../utils/CheckTime.js"
import { Menu } from "../components/Menu.js";
import { AddItem } from "../components/AddItem.js";
import { Home } from "../components/Home.js";
import { RemoveItem } from "../components/RemoveItem.js";

class DashboardView {
    constructor() {
        this.dashboardController = new DashboardController();
        this.mainContent = document.querySelector("#main");
        this.menu = document.querySelector("#menu");
    }
    Init() {
        this.dashboardController.ExistSession();
        this.SetMenu();
        this.mainContent.innerHTML = Home.body;
        Home.ChangePageOnClick();
        Home.SortProductsBy();
    }
    SetMenu() {
        this.menu.innerHTML = Menu();
        this.SetUserInfo();
        this.ClockTimer();
        this.SetTimer();
        this.Logout();
        this.SetAddItem();
        this.SetHome();
        this.SetRemoveItem();
    }
    SetHome() {
        const home = document.querySelector("#home");
        home.addEventListener("click", () => {
            this.mainContent.innerHTML = Home.body;
            Home.ChangePageOnClick();
            Home.SortProductsBy();
        });
    }
    SetAddItem() {
        const addItem = document.querySelector("#addItem");
        addItem.addEventListener("click", () => {
            this.mainContent.innerHTML = AddItem.body;
            AddItem.InsertProducts();
        });
    }
    SetRemoveItem() {
        const removeItem = document.querySelector("#removeItem");
        removeItem.addEventListener("click", () => {
            this.mainContent.innerHTML = RemoveItem.body;
            RemoveItem.SetRemoveItem();
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
            <span>${today.getDate()}/${today.getMonth()}/${today.getFullYear()}</span>
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