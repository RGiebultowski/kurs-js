const button = document.querySelector('button');
const ulElement = document.querySelector('ul');
let counter = 0;
let size = 10;

button.addEventListener("click", function(){
    counter++;
    console.log(counter - 1);
    if(counter <= 1){
        for(let i = 0; i <= 10; i++){
            const liElement = document.createElement('li');
            liElement.textContent = `Element ${i}`;
            ulElement.appendChild(liElement);
            document.body.appendChild(ulElement);
        }
        ulElement.style.display = "none";
    }else{
        size++;
        ulElement.style.display = "block";
        ulElement.style.fontSize = size + "px";
    }
})

