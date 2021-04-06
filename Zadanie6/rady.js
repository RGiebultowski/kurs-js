const buttons = document.querySelectorAll('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const inputLabel = document.querySelector('input');

console.log(h1);
console.log(buttons);

const advices = [];

const addAdvice = (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    const advice = input.value;
    if(input.value.length){
        for(let i = 0; i < advices.length; i++){
            if(advice === advices[i]){
            alert('Nie można powtórzyć rady');
            // console.log(advices)
            return;
            }
        }
        advices.push(advice);
        alert(`Rada ${advice} została dodana.`);
        // h1.textContent = advice;
        input.value = '';
    }
}

const clearData = (event) => {
    event.preventDefault();
    advices.length = 0;
    h2.textContent = `Usunięto wszytkie możliwości...`;
    h1.textContent = '';
    console.log(advices)
}

const showAllArguments = () => {
    if(advices.length > 0){
        alert(`Możliwości: \n${advices}`);
    }else{
        alert('Brak możliwości. Dodaj je....')
    }
    // for(let i = 0; i < advices.length; i++){
    //     alert(advices[i]);
    // }
}

const changeText = () => {
    h2.textContent = `Powiedz mi co mam zrobić....`
}

const showAdvice = (event) => {
    event.preventDefault();
    if(advices.length > 0){
        const index = Math.floor(Math.random() * advices.length);
        h1.textContent = advices[index];
    }else{
        alert('Brak rad.')
        return;
    }
}

buttons[0].addEventListener('click', addAdvice);
buttons[1].addEventListener('click', clearData);
buttons[2].addEventListener('click', showAdvice);
buttons[3].addEventListener('click', showAllArguments);
inputLabel.addEventListener('click', changeText);