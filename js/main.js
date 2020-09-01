setAlertNone();
setInterval(setLocalTime);
var row=null;
var DataJson=[];
var money=null;
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

function submitSell()
{
    if(document.querySelector("#idTForm").rows.length!=0){
        let tableRows=document.querySelector("#idTForm").rows;
        for(let i=1;i<tableRows.length;i++){
            let cod = tableRows[i].cells[0].innerHTML;
            let prod = getvalUsingFind(cod);
            if((prod.countNow-tableRows[i].cells[2].innerHTML)<=0){
                prod.countNow=0;
                prod.countSell+=tableRows[i].cells[2].innerHTML;
            }
            else{
                prod.countNow-=tableRows[i].cells[2].innerHTML;
                prod.countSell+=tableRows[i].cells[2].innerHTML;
            }
        }
        localStorage.removeItem("DataJson");
        localStorage.setItem("DataJson", JSON.stringify(DataJson));
    } 
}

function addToSellTable(){
    let selectCod=document.querySelector("#cod");
    let qntMax=document.querySelector("#qntSell");
    if(qntMax.value!=0){
        let sellTable=document.querySelector("#idTForm");
        let prod=getvalUsingFind(selectCod.options[selectCod.selectedIndex].value);

        let tdCod=document.createElement("td");
        let tdLucro=document.createElement("td");
        let tdVend=document.createElement("td");

        let tr=document.createElement("tr");

        tdCod.innerHTML=prod.cod;
        tdLucro.innerHTML=prod.priceSell-prod.priceCost;
        tdVend.innerHTML=qntMax.value;

        tr.appendChild(tdCod);
        tr.appendChild(tdLucro);
        tr.appendChild(tdVend);

        sellTable.appendChild(tr);
    }  
}

function presetSell()
{
    let selectCod=document.querySelector("#cod");
    DataJson=JSON.parse(localStorage.getItem("DataJson"));
    for(let i=0;i<DataJson.length;i++){
        let item=document.createElement("option");
        item.innerHTML=DataJson[i].cod;
        selectCod.appendChild(item);
    }
    changeSelect();
}

function changeSelect(){
    let selectCod=document.querySelector("#cod");
    let qntMax=document.querySelector("#qntSell");
    let prod=getvalUsingFind(selectCod.options[selectCod.selectedIndex].value);
    qntMax.setAttribute("max",prod.countNow);
}

function getvalUsingFind(id) {

  let obj = DataJson.find(item => item.cod === id);
  return obj;
}

function saveData(){
    if(row ==null){
        let flag=false;
        let getinputdataArray=document.querySelectorAll("input");
        let localtdArray=[];
        let localtr=document.createElement("tr");
        let localtd=null;

        getinputdataArray.forEach(function(item) {
            if(item.value.length==0){
                flag=true;
                return;
            }
            localtdArray.push(item.value);
        });
        if(flag==false){
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
    }
    else{
        let getinputdataArray=document.querySelectorAll("input");
        for(let i=0;i<getinputdataArray.length;i++){
            row.cells[i].innerHTML=getinputdataArray[i].value;
        }
    }
    Store();
    resetForm();
}

function Store()
{
    var DataJson=[];
    if(document.querySelector("#datatable").rows.length!=0){
        let tableRows=document.querySelector("#datatable").rows;
        for(let i=1;i<tableRows.length;i++){
            let prodStore={
            cod:tableRows[i].cells[0].innerHTML, 
            priceCost:tableRows[i].cells[1].innerHTML, 
            priceSell:tableRows[i].cells[2].innerHTML, 
            countNow:tableRows[i].cells[3].innerHTML,
            countSell:tableRows[i].cells[4].innerHTML
            };
            DataJson.push(prodStore);
        }
        localStorage.setItem("DataJson", JSON.stringify(DataJson));
    } 
}

function SaveasJson(DataJson){
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(DataJson, null, 2)], {
        type: "text/plain"
      }));
    a.setAttribute("download", "data.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); 
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
            document.querySelector(".main").innerHTML='<object type="text/html" data="sell.html" style="width:100%" height="100%"></object>';
            break;
        case 2:
            document.querySelector(".main").innerHTML='<object type="text/html" data="doc.html" style="width:100%" height="100%"></object>';
            break;
        case 3:
            break;
    }
}

function setLocalTime() {
    if(document.getElementById("timer")!=null){
        var d = new Date();
        document.getElementById("timer").innerHTML = d.toLocaleTimeString();
    }
}