// TABLICE - OBIEKT

// jest to obiekt wbudowany ( ma właściwości i metody)
// posiada uporzątkowaną kolejność, zbiór wartości
// każda wartość ma swój indeks liczony od 0

// tworzenie tablicy

const nameList = ["Rafał", "Karolina", "Wojtek", "Agnieszka"];

// lub
const cityList = [];
cityList[0] = "Gdansk";
cityList[1] = "Sopot";

// Konstruktor - pusta tablica
const gameItems = new Array();
// Konstruktor z wypełnionymi danymi
const colors = new Array("red", "green", "blue");

// możemy edytować tablicę nawet jeśli jest oa przypisana do zmiennej const
const myArryaConst = [];

myArryaConst[0] = "pierwsza wartość";
console.log(myArryaConst); // wynik pierwsza wartość
myArryaConst[0] = "nowa pierwsza wartość";
console.log(myArryaConst); // wynik 0-> nowa pierwsza wartość

// tablica może przechowywać wszytko, nawet tablice w tablicy


//usuwanie wartośći z tablicy

//delete nazwaListy[index]; to usuwa wartość a nie index

// są metody które mogą usunąć również index wraz z wartością

//wykorzystywanie długości tablicy
//szybkie tworzenie długiej tablicy
const longArray = [];
longArray.length = 100;

// odwołanie się do ostatniego elementu tablicy
cityList[cityList.length - 1];
 // dodanie kolejnego elementu do tablicy na ostatnie miejsce
cityList[cityList.length] = "Gdynia";
console.log(cityList);

// powiększenie tablicy
cityList.length += 2;
// zmniejszenie tablicy
cityList.length = 4;
// wyzerowanie tablicy
cityList.length = 0;

// sprawdze nie czy to jest tablica
typeof cityList; // object
// powinniśmy sprawdzić czy jest instancją Array
cityList instanceof Array;
// również jest instancją obiektu
cityList instanceof Object;

Array.isArray(cityList);

//destrukturyzacja
const game = [120, 109.24, "Daddy"];

let [time, points, name] = game;

//przekazanie danych z tablicy do konkretnych zmiennych


// TABLICE - NAJWAŻNIEJSZE METODY

const italianUsers = ["Giovanni", "michelle", "Angelo", "Luigi", "Valentina", "Marco"];

// push - dodaj element na końcy tablicy

italianUsers.push("Alessandra");
console.log(italianUsers);

// inshift - dodaj element na początku tablicy

italianUsers.unshift("Tommaso");
console.log(italianUsers);

// pop - usnięcie ostatniego elementu tablicy
// metoda ta usuwa wartość oraz index
italianUsers.pop();
console.log(italianUsers);

delete italianUsers[italianUsers.length - 1]; // usunięcie ostatniej wartości tablicy bez indeksu

// shift - usuń pierwszy element tablicy wraz z indexem

italianUsers.shift();
console.log(italinaUsers);

delete italianUsers[0];// usunięcie pierwszej wartości tablicy bez indeksu

// usunięte wartości z tablicy możemy wyciągnąć i przypisać do zmiennej

const removedLastElementOfArray = italianUsers.pop();
const removedFirstElementOfArray = italianUsers.shift();

// concat - łączenie tablic. w istocie nie tyle łaczy dwie tablice, a na ich podstawie tworzy nową

const redColors = ["czerwony", "zachodzące słońce", "krwisty"];
const greenColors = ["zielony", "trawiasty", "zielony banan"];

const redAndGreenColors = redColors.concat(greenColors);
// powstaje nowa tablica która zawiera elementy pierwszej i drugiej
// można przekazywać wiele tablic jako argumenty metody po przecinku

// nowy sposób w ES6 za pomocą operatora spread (operator rozwijania, operator trzech kropek)

const colorsCollection = [...redColors, ...greenColors];
// elementy tablicy są pojedyńczo wyjęte
// ...redColors - "czerwony", "zachodzące słońce", "krwisty"
// trzy kropki rozbiera tablice na elementy pierwsze

// metoda slice
const items = ["zad", "bza", "wus", "xad", "coe", "mer", "tve"];

//zwraca nową tablicę, która składa się z części tablicy na której jest wykonywany. Jeśli damy tylko jeden argument, to będzie zwracała od tego element (indexu) do kończa

items.slice(3);

items.slice(2,3);
// drugi argument mówi, do którego elementu (index), ale bez tego elementu

items.slice(-1);
//jesli użyjemy minusa to mówimy ile od końca mamy zwrócić, w tym wypadku to będzie tylko ostatni element

//slice nie wpływa na tablicę na której jest wykonywany, zwróconą wartość przypiszemy do nowej zmiennej

// metoda splice
// jest to metoda destrukcyjna. Zmienia tablice na której pracuje
const animals = ["dog", "cat", "canary", "mouse"];

animals.splice(1,2); // od indeksu pierwszego usun 2 elementy. Najpierw wskazuje się od którego indeksu usunąć a druga wartość określa ilość usuniętych elementów
animals.splice(2); // usunie wszystkie elementy od indexu 2 łącznie z nim.
animals.splice(0); // zeruje całą tablicę

//metoda splice umożliwia wymianę danych w tablicy
animals.splice(3,1, 'hamster');

// umożliwia dodawanie elementów
animals.splice(2, 0, "rat");
animals.splice(0, 0, "horse", "pig", "donkey");

// metoda sort
// metoda destrukcyjna
["Rafał", "Zenek", "Arek"].sort(); // sortuje alfabetycznie tablicę

// metoda indexof
// szuka takiego elementu w tablicy, jeśli znajdzie zwraca index tego elementu, jeśli nie zwraca -1
animals.indexOf('dog');
// indexof jeżeli znajdzie nie szuka dalej
// lastIndexOf szuka od końca

// metod includes
// zwraca wartość true jeżeli zawiera, jeżeli nie to false

animals.includes("dog");

// metoda join
// Tworzy stringa z elementów, domyślnie oddzielonych przecinkiem. Możemy to zmienić
console.log(items);
items.join(); // wynikiem jest string wszyskich elementów tablicy oddzielony przecinkami
// nie jest to metoda modyfikująca nie modyfikuje tablicy na której się pracuje

// metoda reverse
// metoda destrukcyjna która odrwaca kolejność czyli pierwszy element jest ostatni, a ostatni pierwszy
items.reverse(); // zwracana jest nowa tablica 


// Split
// metoda która wykonywana jest na stringu ale tworzy tablicę

const exampleString = "Rafal";
const lettersOfExampleString = exampleString.split(''); // wynikiem jest tablica liter stringa
console.log(lettersOfExampleString);

