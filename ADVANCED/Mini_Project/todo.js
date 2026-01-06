let btn=document.getElementById("Btn");
let ul=document.getElementById("taskList");
let input=document.getElementById("taskInput");

btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.textContent=input.value;
  ul.appendChild(item);
    console.log(input.value);
    input.value="";
})