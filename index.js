var addbtn = document.getElementById("add-item");
var todolist = document.getElementById("todo-list");
var item1 = document.getElementById("item1");
var inputvalue = document.getElementById("inputvalue")
var btnUpdate=document.getElementById("update-item");
var btnDelete = document.getElementById("remove-item");
var currentinputvalue = '';

inputvalue.addEventListener('input', function (e) {
    currentinputvalue = e.target.value;
});
inputvalue.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addlistItem();
    }

});
function createNewNode(){
    var newlistelement = document.createElement('li');
    var textnode=document.createTextNode(currentinputvalue);
    newlistelement.appendChild(textnode);
    newlistelement.id="item"+(todolist.childElementCount + 1);
    return newlistelement
    var newlistelement = document.createElement('li');
        // var textnode = document.createTextNode(currentinputvalue)
        // newlistelement.appendChild(textnode);
        // newlistelement.id = "item" + (todolist.childElementCount + 1)


}
function addlistItem() {
    if (currentinputvalue !== '' && currentinputvalue !== undefined && currentinputvalue !== null) {
        
        //  var textnode=document.createTextNode("list item "+((todolist.childElementCount)+1))
        // var newlistelement = document.createElement('li');
        // var textnode = document.createTextNode(currentinputvalue)
        // newlistelement.appendChild(textnode);
        // newlistelement.id = "item" + (todolist.childElementCount + 1)


        //var firstitem = todolist.firstElementChild
       // console.log(firstitem)
      // todolist.appendChild(newlistelement)
        //todolist.insertBefore(newlistelement,item1)
        //todolist.insertBefore(newlistelement, firstitem)
        var newlistelement = createNewNode();
        todolist.appendChild(newlistelement)

        inputvalue.value=''
        currentinputvalue=''
      
    }
    else {
        alert('please enter the value')
    }
}
console.log(currentinputvalue);


addbtn.addEventListener('click', addlistItem);

//Updating the list items



btnUpdate.addEventListener('click',function(){
    var firstElement=todolist.firstElementChild;
    //creating new list element 
    var newlistelement = createNewNode();
    todolist.replaceChild(newlistelement,firstElement);
});
btnDelete.addEventListener('click',function(){
    var firstElement= todolist.firstElementChild;
    todolist.removeChild(firstElement);
});

