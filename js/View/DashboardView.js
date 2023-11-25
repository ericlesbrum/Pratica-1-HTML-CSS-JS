import { DashboardController } from "../Controller/DashboardController.js";
class DashboardView {
    constructor() {
        this.dashboardController = new DashboardController();
        this.mainContent = document.querySelector("#main");
        this.nav_buttons = document.querySelectorAll(".nav-button");
    }
    Init() {
        this.dashboardController.ExistSession();
        this.SetUserInfo();
        this.ClockTimer();
        this.SetTimer();
        this.Logout();
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
function CheckTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
const dashboardVieW = new DashboardView();
dashboardVieW.Init();