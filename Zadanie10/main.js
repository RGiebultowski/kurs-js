
//closure hermetyzacja zmiennych

function add(){
    let number = 0;
    return () => {
        document.body.textContent = `aktualny stan licznika to ${number++}`;
    }
    
}

const counter = add();

document.addEventListener('click', counter);

// ----------------------------------------------------------------

const user = (name = "", age) => {
    let userName = name;
    let userAge = age;


    function showName(){
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwka'}`);
    }
    return showName();
}
user("Rafał", 23);

// ----------------------------------------------------------------

// timer

const timer = () => {
    let time = 0;
    const ms = 1000;
    function showTimer(){
        setInterval(() =>{
            document.body.textContent = `${time++} sekund`
        }, ms);
    }
    return showTimer();
}

timer();