const button = document.querySelector('button');
const div = document.querySelector('div');
const names = [];

const addName = (event) =>{
    event.preventDefault(); // prevent default zatrzymuje odświerzanie strony
    const inputName = document.querySelector('imput');
    const name = inputName.value;
    if(inputName.value.length){
        for(nameLength of names){
            if(nameLength === name){
                alert('Please add other name');
                return;
            }
        }
        names.push(name);
        div.textContent += name + ', ';
        inputName.value = '';
    }
    
}

button.addEventListener('click', addName);