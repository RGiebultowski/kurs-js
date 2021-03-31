const input = document.getElementById('passwordInput');
const div = document.querySelector('div');

const passwords = ['JeDeN', 'DwA'];
const messages = ['Hasło pierwsze', 'Hasło drugie'];

const showMessage = (event) => {
    const getText = event.target.value;
    console.log(getText);
    // getText.toUpperCase();
    div.textContent = '';
    passwords.forEach(function (password, i){
        if(password.toLowerCase() === getText.toLowerCase()){
            div.textContent = messages[i];
        }
    });
}

input.addEventListener('input', showMessage);

// Zmiana wartości tablicy

// passwords.forEach((password, i) =>{
//     passwords[i] = password.toLowerCase();
//     console.log(passwords[i]);
// })