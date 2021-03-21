//instrukcja warunkowa if

const example = 2;

if (example) {
    console.log('siema');

}

//if else

const hasTicket = true;
const moreThan15Years = true;

if (hasTicket == true && moreThan15Years == true) {
    console.log('Wchodzisz');

} else {
    console.log('Nie wchodzisz');

}

// else if

const age = "15";

if (age <= 9) {
    console.log('dziecko');

} if (age > 9 && age <= 18) {
    console.log('młodzież');

} if (age > 18) {
    console.log('dorosły');

}
//działa ale nie jest zoptymalizowane ^

// zoptymalizowane
if (parseInt(age) <= 9 && typeof age === "number") {
    console.log('dziecko');

} else if (parseInt(age) <= 18) {
    console.log('młodzież');

} else {
    console.log('dorosły');
}


// zagnieżdżone if

const guestName = "Rafał";
const guestAge = "24";

if (guestName) {
    if (guestAge > 18) {
        console.log('Zapraszamy ' + guestName);

    } else {
        console.log('Nie wejdziesz ' + guestName);

    }
} else {
    console.log('Błąd imienia.');

}

// instrukcja warunkowa switch

const dayOfWeek = "Środa";

// jako argument podaje się wartośc do porównania z argumentem instrukcji
switch (dayOfWeek) {
    // po case podajemy wartość do porównania z argumentem instrukcji
    case "poniedziałek":
        console.log('dziś poniedziałek');
        break;
    case "wtorek":
        console.log('dziś wtorek');
        break;
    case "Środa":
        console.log('dzisiaj środa');
        break;
    case "czwartek":
        console.log('dzisiaj czwartek');
        break;
    case "piątek":
        console.log('weekendu początek');
        break;
    default:
        console.log('nie wiem co to za dzień');
        break;
}

// if else w innej postaci
// a ? b : c;
// jeżli warunek "a" jest prawdziwy, wykonaj "b", jeśli nie wykonaj "c"
// operator warunkowy ?

const playerName = "DannyBrown"
let gameResult = 0;
let killedMonsters = 11;
gameResult += killedMonsters > 10 ? 1 : 0;

console.log(`Witaj ${playerName ? playerName : "nieznajomy"}`);


// pętle
// pętla pozwala wykonywać kod bloku wielokrotnie, tyle razy ile spełnioy jest warunek
// pętla pozwala pracować na elementach tablicy czy obiektu

// FOR
// for(iterator; warunek; iteracja){ blok kodu }
// powinniśmy używać let do iteratora

for (let i = 0; i < 10; i++) {
    console.log('wykonanie nr: ' + i);
}
// lub

let i = 0;
for (; i < 10; i++) {
    console.log(i);
}

// while

// while(warunek){ blok kodu }
let number = 0;
while (number < 10) {
    number++;
    console.log(number);
}

let money = 50;
while (money >= 8) {
    console.log('Mam jeszcze ' + money + ' zł. To pijemy piwko');
    money -= 8;
}
// alert(`za ${money} złote, już piwka nie kupię :c`);

let gasoline = 40;
let km = 0;

while (gasoline--) {
    km += 18;
    console.log(`przejechaliśmy ${km} kilometrów. Zostało nam ${gasoline} benzyny.`);

}

// do while
/*do{
    console.log('Wykonam się zawsze');
    
}while{
    blok kodu
}
*/

// pętla w pętli

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`zmienna ${i} pomnożona przez zmienną ${j} da wynik ${i * j}`);

    }
}

// tabliczka mnożenia
for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


// pętla na tablicy
const usersAge = [19, 18, 20, 24, 65];
for (let i = 0; i < usersAge.length; i++) {
    console.log(`wartości indexu tablicy ${i} to ${usersAge[i]}`);
}


// obliczenie wieku użytkownika
const usersDateBirth = [2000, 1997, 1932, 2015];
const currentYear = 2021;

for (let i = 0; i < usersDateBirth.length; i++) {
    const userAge = currentYear - usersDateBirth[i];
    console.log(`Wiek użytkownika o indeksie ${i} to: ${userAge}`);
}

// pętla for - of es6

const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}
// łatwa iteracja po całej tablicy


