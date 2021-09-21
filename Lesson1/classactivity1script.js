function addli() 
{
    let newItem = document.querySelector("#txtVal").value ;
    let li = document.createElement("li") ; 
    li.innerHTML = newItem ;
    
    document.querySelector("#list").appendChild(li);
}

/*
var txtVal = document.getElementById("txtVal").value,
    listNode = document.getElementById("list"),
    liNode = document.createElement("LI"),
    txtNode = document.createTextNode(txtVal);


    liNode.appendChild(txtNode) ;
    listNode.appendChild(liNode) ; 
*/