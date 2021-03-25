const btn = document.querySelector("button");
const list = document.querySelector("ul");
let number = 1;

btn.addEventListener("click", function(){
    console.log("click");
    const li = document.createElement("li");
    li.textContent = number;
    list.appendChild(li);
    // console.log(list);
    // console.log(li);
    if(number%3 == 0){
        li.classList.add("big");
    }
    document.body.appendChild(list);
    number += 2;
});