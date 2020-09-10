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

function setTd(){
    let td=[];
    for(let i=0;i<5;i++){
        td.push(document.createElement("td"));
    }
    return td;
}
function setToDoc(type){
    DataJson=JSON.parse(localStorage.getItem("DataJson"));
    if(DataJson!=null){
        let table=document.querySelector("#datatable");
        DataJson.forEach(function(item){
            let aux=document.createElement("tr");
            let text="";
            if(type==0){
                text="<td>"+item.cod+"</td>"+
                        "<td>"+item.priceCost+"</td>"+
                        "<td>"+item.priceSell+"</td>"+
                        "<td>"+item.countNow+"</td>"+
                        "<td>"+item.countSell+"</td>";
                
                text+=`<td><a onclick="editData(this)">Editar</a>
                            <a onclick="deleteData(this)">Delete</a></td>`;
                
                aux.innerHTML=(text);
                table.appendChild(aux);
            }
            else{
                text="<td>"+item.cod+"</td>"+
                        "<td>"+item.priceCost+"</td>"+
                        "<td>"+item.priceSell+"</td>"+
                        "<td>"+item.countNow+"</td>"+
                        "<td>"+item.countSell+"</td>";
                aux.innerHTML=(text);
                table.appendChild(aux);
            }
        })
    }
} 

function submitSell()
{
    DataJson=JSON.parse(localStorage.getItem("DataJson"));
    if(document.querySelector("#idTForm").rows.length!=0){
        let tableRows=document.querySelector("#idTForm").rows;
        for(let i=1;i<tableRows.length;i++){
            let cod = tableRows[i].cells[0].innerHTML;
            let prod = getvalUsingFind(cod);
            let index = DataJson.findIndex(x => x.cod === prod.cod);
            if((prod.countNow-tableRows[i].cells[2].innerHTML)<=0){
                DataJson.pop(DataJson[index]);
            }
            else{
                prod.countNow-=tableRows[i].cells[2].innerHTML;
                prod.countSell=parseInt(prod.countSell)+parseInt(tableRows[i].cells[2].innerHTML);
                DataJson[index]=prod;
            }
        }
    if(DataJson!=null){
        localStorage.removeItem("DataJson");
        localStorage.setItem("DataJson", JSON.stringify(DataJson));
        }
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
    if(DataJson.length!=0){
           for(let i=0;i<DataJson.length;i++){
            let item=document.createElement("option");
            item.innerHTML=DataJson[i].cod;
            selectCod.appendChild(item);
        }
        changeSelect(); 
    }
    else{
        alert("Não há produtos no estoque.");
    }
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
function checkIfItemExist(datavalue){
    DataJson=JSON.parse(localStorage.getItem("DataJson"));
    if(DataJson!=null){
        if(DataJson.findIndex(item => item.cod == datavalue)>=0)
           return true;
        else
            return false;
    }
    else{
        return false;
    }
}
function saveData(){
    if(row ==null){
        let flag=false;
        let getinputdataArray=document.querySelectorAll("input");
        let localtdArray=[];
        let localtr=document.createElement("tr");
        let localtd=null;
        let exist=checkIfItemExist(getinputdataArray[0].value);
        if(exist){
            alert("Ja possui um item com este codigo, por favor digite ou altere o mesmo");
            flag=true;
        }
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
        else{
            alert("Preencha todos os campos");
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
    Store();
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
            window.location.href="Index.html"
            break;
    }
}

function setLocalTime() {
    if(document.getElementById("timer")!=null){
        var d = new Date();
        document.getElementById("timer").innerHTML = d.toLocaleTimeString();
    }
}