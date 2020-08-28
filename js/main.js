setAlertNone();
setInterval(setLocalTime);
var row=null;
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
function saveData(){
    if(row ==null){
        let getinputdataArray=document.querySelectorAll("input");
        let localtdArray=[];
        let localtr=document.createElement("tr");
        let localtd=null;

        getinputdataArray.forEach(function(item) {
            if(item.value.length==0)
                return;
            localtdArray.push(item.value);
        });

        localtdArray.forEach(function(item) {
            localtd=document.createElement("td");
            localtd.innerHTML=item;
            localtr.appendChild(localtd);
        });
        
        localtd=document.createElement("td");
        localtd.innerHTML=`<a onclick="editData(this)">Editar</a>
                            <a onclick="deleteData(this)">Delete</a>`;
        localtr.appendChild(localtd);
        document.querySelector("#datatable").appendChild(localtr);
    }
    else{
        let getinputdataArray=document.querySelectorAll("input");
        for(let i=0;i<getinputdataArray.length;i++){
            row.cells[i].innerHTML=getinputdataArray[i].value;
        }
    }
    resetForm();
}
function editData(td){
    row=td.parentElement.parentElement;
    let getinputdataArray=document.querySelectorAll("input");
    for(let i=0;i<getinputdataArray.length;i++){
        getinputdataArray[i].value=row.cells[i].innerHTML;
    }
}
function deleteData(td){
    row=td.parentElement.parentElement;
    document.querySelector("#datatable").deleteRow(row.rowIndex);
    resetForm();
}
function resetForm(){
    let getinputdataArray=document.querySelectorAll("input");
    getinputdataArray.forEach(function(item) {
        item.value="";
    });
    
    row=null;
}
function setAlertNone(){
    if(document.querySelector("#alert")!=null)
        document.querySelector("#alert").style.display="none";
}
function checkCredential(){
	if(document.querySelector("#idUser") !=null && document.querySelector("#inputPassword")!=null)
	{
		let id=document.querySelector("#idUser").value;
	    let psword=document.querySelector("#inputPassword").value;
	    if(id != '' && psword != ''){
	        return true;
	    }
	    else{
	        return false;
	    }
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