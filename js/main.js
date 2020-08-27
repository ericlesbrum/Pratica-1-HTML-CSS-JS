setAlertNone();
setInterval(setLocalTime);
$(function(){
    $("#checkIDPass").click(function(){
        if(checkCredential()){
            window.location.href='Dashboard.html';
        }
        else{
            $("#alert").show();
        }
    });
});
function setAlertNone(){
    if(document.querySelector("#alert")!=null)
        document.querySelector("#alert").style.display="none";
}
function checkCredential(){
    let id=document.querySelector("#idUser").value;
    let psword=document.querySelector("#inputPassword").value;
    if(id != '' && psword != ''){
        return true;
    }
    else{
        return false;
    }
}
function redirect(pos) {
    switch(pos){
        case 0:
            document.querySelector(".main").innerHTML='<object type="text/html" data="storage.html" style="width:100%" height="100%"></object>';
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            break;
    }
}
function setLocalTime() {
    if(document.getElementById("timer")!=null){
        var d = new Date();
        document.getElementById("timer").innerHTML = d.toLocaleTimeString();
    }
}