// Funkcje
// funkcje są obiektami, można je wywoływać
// funkcje to małe programy które coś robią z danymi lub coś zwracają. Funkcja może modyfikować program, lub nie, a jedynie przetwarzać elementy zwracając nową wartość (return)

// szkielet funkcji
//const nazwaFunkcj = function(){}

// przypisanie funkcji do zmiennej
const showMessage = function(message){
    console.log(message);
}
// wywołanie funkcji
let message = "Wiadomość";
showMessage(message);

// deklaracja funkcji
function addNumbers(number1, number2){
    return number1 + number2;
}

addNumbers(20, 7);

// konstruktor
//szkielet cosnt nazwaFunkcji = new Function();
const textAlert = new Function("text", "alert (text)");
textAlert('działa.');
// ostatni argument to ciało funkcji

// funkcja strzałkowa
// szkielet const nazwaFunkcji = () => {};

// ma inną składnię i inne zachowania. Jest zawsze anonimowa

const showTxtMessage = (txt) => {
    console.log(txt);
}

showTxtMessage("wiadomość.");

// wywołanie funkcji
// nazwa() - wywołanie funkcji
// nazwa(parametr1, parametr2) - wywołanie z parametrami
// stworzona funkcja może być wywoływana wielokrotnie, lub tez nigdy


// zwracanie wartości z funkcji
// funkcja może coś robić z danymi i może coś zwracać
// domyślnie każda funkcja zwraca undefined
// aby coś zwrócić używamy słowa retun

const divideBy3 = function(number){
    return number / 3;
}
const result = divideBy3(9);

// jeżeli chcemy sprawdzić ile argumentów wymaga funkcja
divideBy3.length;


// nadawanie wartości domyślnych w funkcjach aby uniknąć uzyskania wyników undefined

const addTwoNumbers = (x = 3, y = 5) =>{
    const result = x + y;
    console.log(result);
    return result;
}

const addTwoNumbers2 = function(x = 2, y = 2){
    const result = x + y;
    console.log(result);
    return result;
}

// CALLBACK
// funkcja wywołania zwrotnego, czyli funkcja przekazania jako argument do funkcji i wywołania w niej.
// Funkcja do której przekazujemy inną funkcję nazywa się funkcją wyższego rzędu

function count(x, CALLBACK){
    return CALLBACK(x);
}

function addOne(number){
    number++;
    console.log(number);
    return number;
}

function substractOne(number){
    number--;
    console.log(number);
    return number;
}

const resultForCallback = count(5, addOne);

// przykład 2
document.body.addEventListener("click", function(){
    console.log("click");
})
// przykład 3
//setInterval(() => console.log("mineły 2 sekundy"), 2000);

// forEach oznacza wykonaj na każdym elemencie tablicy osobno jakieś działanie

const usersAge = [20, 24, 30, 15, 2, 69, 70, 125, 55];
usersAge.forEach(userAge => console.log(`Wiek użytkownika to ${userAge}`));

// ARGUMENTS
// jest to obiekt który zawiera winofmacje jakie argumenty zostały przekazane do tablicy
const showArguments = function(){
    console.log(arguments); // arguments - nazwa dla obiektu ( nazwa przypisana )
    console.log(arguments.length); // arguments - ile argumentów przekazaliśmy
    console.log(arguments[0]); // odwołanie do konkretnego argumentu
    console.log(typeof arguments); // obiekt (tablicopodobny). Ma właściwość length, można odwołać się za pomocą notacji tablicowej np. arguments[2]
    console.log(Array.isArray(arguments)); // wynik false
}

showArguments(1, null, {});

// wykorzystanie w praktyce
// uniwersalna funkcja
function addAllNumbers(){
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

const usersMoney = addAllNumbers(3, 2, 100, 50, 52.37);

// zmiana zachowania funkcji przy różnych argumentach

function showInfoAboutUser(age, name, sex){
    if(arguments.length === 0){
        console.log("Brak danych...")
    }else if(arguments.length === 1){
        console.log(`Wiek użytkownika to ${age}`);
    }else if( arguments.length === 2){
        console.log(`Imię użytkownika to ${name} i jest w wieku ${age}`);
    }else{
        console.log(`${name} ma ${age} lat i jest ${sex}`);
    }
}

// operator rest (ES6)
// ...nazwa
// zwraca tablicę (arguments nie jest tablicą)
// tworzy z podanych wartości tablicę

function showAllArguments(...args){
    console.log(args);
    return args;
}

showAllArguments(1, "2", "ab", true);

function addAllWords(...words){
    let txt = "";
    for(let i = 0; i < words.length; i++){
        txt += `${words[i]} `;
    }
    console.log(txt);
}
addAllWords("Rafał", "Giebułtowski", "Kurs", "JavaScript", 1);
// to samo tylko foreach
function addAllWords2(...words){
    let txt = "";
    words.forEach(function(word){
        txt += `${word} `;
    })
    console.log(txt);
}
addAllWords2("Rafał", "Giebułtowski", "Kurs", "JavaScript", 2);
// to samo tylko strzałkową
function addAddWords3(...words){
    let txt = "";
    words.forEach(word => txt += `${word} `);
    console.log(txt);
}
addAddWords3("Rafał", "Giebułtowski", "Kurs", "JavaScript", 3);

// dzięki operatorowi rest możemy zbierać pozostałe argumenty (które zostały umieszczone poza parammetrami)

function showUsers(owner, ...others){
    console.log(`Na imprezie był ${owner}${others.length ? ` oraz ${others}.` : "."}`)
}

showUsers("Rafał");
showUsers("Rafał", "Karolina");

// metody a funckje 
// metody to funkcje umieszczone w obiektach 

const objectExample = {
    showName: function(){
        console.log("Rafał")
    },
    showAge(){
        console.log(24)
    }
}

objectExample.showName();
objectExample.showAge();