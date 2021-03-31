const inputLabel = document.getElementById('password');
const div = document.querySelector('div');
const passwords = ["Rafał", "Wiosna"];
const messages = ["Chce być programistą", "Robi się ciepło"];

const showMessage = function(event) {
    const text = event.target.value;
    div.textContent = '';
    passwords.forEach((password, index) => {
        if(password === text){
            div.textContent = messages[index];
        }
    })
}

inputLabel.addEventListener('input', showMessage);

inputLabel.addEventListener('focus', (event) => {
    event.target.classList.add('active');
})

inputLabel.addEventListener('blur', (event) => {
    event.target.classList.remove('active');
})





// if(passwords === event.target.value){
    //     div.textContent = messages;
        
    // } else {
    //     div.textContent = "";
    // }