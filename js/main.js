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
