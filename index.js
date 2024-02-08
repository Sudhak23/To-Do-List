var addbtn = document.getElementById("add-item");
var todolist = document.getElementById("todo-list");
var item1 = document.getElementById("item1");
var inputvalue = document.getElementById("inputvalue")
var currentinputvalue = '';

inputvalue.addEventListener('input', function (e) {
    currentinputvalue = e.target.value;
});
inputvalue.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addlistItem();
    }

});
function addlistItem() {
    if (currentinputvalue !== '' && currentinputvalue !== undefined && currentinputvalue !== null) {
        var newlistelement = document.createElement('li');
        //  var textnode=document.createTextNode("list item "+((todolist.childElementCount)+1))
        var textnode = document.createTextNode(currentinputvalue)
        console.log(currentinputvalue);
        newlistelement.appendChild(textnode);
        newlistelement.id = "item" + (todolist.childElementCount + 1)


        //var firstitem = todolist.firstElementChild
       // console.log(firstitem)
        todolist.appendChild(newlistelement)
        //todolist.insertBefore(newlistelement,item1)
        //todolist.insertBefore(newlistelement, firstitem)
        inputvalue.value=''
        currentinputvalue=''
      
    }
    else {
        alert('please enter the value')
    }
}
console.log(currentinputvalue);


addbtn.addEventListener('click', addlistItem);

