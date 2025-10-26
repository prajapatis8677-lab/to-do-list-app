const inputBox  =document.getElementById("input-box");
const ListContainer  =document.getElementById("list-container");

function addtask() {
    if(inputBox.value ===''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata()
}
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata(){
    localStorage.setitem("data", ListContainer.innerHTML);
}
function showtask(){
    ListContainer.innerHTML = localStorage.getitem("data");
}
showtask();