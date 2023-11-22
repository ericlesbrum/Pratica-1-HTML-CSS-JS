$(function () {
    setAlertNone();
})
$('#checkIDPass').on("click", () => {
    if (document.querySelector("#idUser") != null && document.querySelector("#inputPassword") != null) {
        let id = document.querySelector("#idUser").value;
        let psword = document.querySelector("#inputPassword").value;
        if (id != '' && psword != '') {
            window.location.href = '/pages/Dashboard.html';
        }
        else {
            $("#alert").show();
        }
    }
})
/*function setAlertNone(){
    if(document.querySelector("#alert")!=null)
        document.querySelector("#alert").style.display="none";
}*/