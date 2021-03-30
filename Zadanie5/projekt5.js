const inputLabel = document.getElementById('password');
const div = document.querySelector('div');
const password = "Rafał";
const message = "Chce być programistą";

const showMessage = (event) => {
    if(password === event.target.value){
        div.textContent = message;
        
    } else {
        div.textContent = "";
    }
}

inputLabel.addEventListener('input', showMessage);

inputLabel.addEventListener('focus', (event) => {
    event.target.classList.add('active');
})

inputLabel.addEventListener('blur', (event) => {
    event.target.classList.remove('active');
})