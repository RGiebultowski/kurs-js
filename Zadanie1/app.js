const button = document.querySelector("button");
let number = 1;

button.addEventListener("click", function(){
    console.log("click");
    const div = document.createElement("div");
    div.textContent = number;
    if(number%5 == 0){
        div.classList.add("circle");
    }
    document.body.appendChild(div);
    number++; 
});