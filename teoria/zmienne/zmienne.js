// Typy danych
// 7 typów wbudowanych

//Typy proste
//string, number,  boolean, undefined, null, symbol

//Typy referencyjne (obiekty)
//Obiekty: obiekt, funkcja, tablica....

//Typ jest to element języka kótry zachowuje pewne cechy dla danego języka

//typeof - operator, który zwraca informacje o typie

typeof "Text";
typeof "222.222";
let userName = "Rafał";
typeof userName;
console.log(typeof userName);
console.log(userName);



//Number - liczba (bez podziału na integer, float, decimal)

typeof 222.222;
typeof 1000;
typeof 3.2e10;
typeof NaN;
typeof (2.2 * "a"); // typ liczbowy ale nie jest to liczba wynik wychodzi NaN


//Boolean - wartość logiczna
typeof true;
typeof false;
typeof 2==3;
typeof 2==2;

//Undefined - niezdefiniowany( jedna wartość)
typeof undefined;
let dateFirstLogin;
typeof dateFirstLogin;
console.log(dateFirstLogin);

//Null - nie posiada (jedna wartość)
let userSecondName = null;
typeof null;

// Symbol (nowy typ w ES6)
typeof Symbol();
console.log(Symbol());

//Typ referencyjny obiekty
typeof {};
typeof function () {};
typeof [];
console.log(typeof {}); // obiekt
console.log(typeof function () {}); // funkcja
console.log(typeof []); // tablica

//Zmienna jest to sposób na przechowanie danych w pamięci

//3 ATRYBUTY ZMIENNEJ W JS
// - nazwa
// - miejsce w pamięci (identyfikator, którym jest nazwa)
// - wartość zmiennej
// - atrybut czasu życia, identyfikator dostępu (globalna i lokalna)

// Zmienne w JS nie mają typu, jednak wartość zmiennej posiada typ

//let number idUser = 1; // Źle
let idUser = 1; // Dobrze

// Typy w JS nadawane są dynamiczne, czyli w procesie wykonywania kodu

// Deklaracja zmiennych let, const, var
let firstLetterUserName;
firstLetterUserName = "R";
// lub
let userFirstName = "Rafał";

console.log(firstLetterUserName);
console.log(userFirstName);

let showUserName = function() {console.log(userFirstName) };

//deklaracja wielu zmiennych
let name, age, address;
let position = [200,100], score = null, time = 20.2, ipAddress;
const firstUser = "Ania", secoundUser = "Tomasz";

// Zmienne stałe i zmienne zmienne

//const - zmienna stała
// let - zmienna
// var - zmienna przed ES6

// Do const nie można przypisać nowej wartości ( można modyfikować przypisane obiekty)
// let i const można zadeklarować tylko raz, var pozwala deklarować wielokrotnie

var a = "a";
console.log(a);
var a = "b";
console.log(a);

//const na obiektach
const arrayExample = [1];
// przypisanie nowego obiektu nie jest możliwe
//arrayExample = [1 , 2];

// Modyfikacje w obiekcie już przypisanym jest możliwe
arrayExample[1] = [2];
console.log(arrayExample);






