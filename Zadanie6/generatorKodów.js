const chars = 'QWERTYUIOPASDFGHJKLZXCVBNM0123456789';
const button = document.querySelector('button');
const section = document.querySelector('section');

const amountOfCodes = 50;
const codeLength = 10;

button.textContent = `Wygeneruj ${amountOfCodes} kodów`;

const codesGenerator = () =>{
    for(let i = 0; i < amountOfCodes; i++){
        console.log('dziala')
        let code = '';
        for(let j = 0; j < codeLength; j++){
            console.log('dziala')
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

button.addEventListener('click', codesGenerator);
