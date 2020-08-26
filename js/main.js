document.querySelector("#alert").style.display="none";
$(function(){
    $("#checkIDPass").click(function(){
        if(checkCredential()){
            window.location.href='Dashboard.html';
        }
        else{
            $("#alert").show();
        }
    })
});
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
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
