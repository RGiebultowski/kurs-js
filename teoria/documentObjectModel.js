// DOM
// reprezentacja dokumentu HTML w przeglądarce
// elementy strony są węzłami, które mogą być pobrane, modyfikowane. Można też usuwać węzły i tworzyć nowe

// struktura DOM przypomina drzewo. Na szyccie jes obiekt document
// DOM nie jest częścią JS, ale JS umożliwia pracę z DOM

// pobieranie elementów ze strony

// właściwości obiektu document
document.documentElement; // odwołanie się do obiektu html
document.body;
document.images // lista pasujących elementów - obiekt tablicopodobny(ma lenght i notację tablicy)

const imgs = [...document.images] // zamienia skrót do tablicy, uzyskujemy metody tablicowe do zebranych obrazków

// metody pobierające jeden element
document.querySelector("li:nth-child(2)"); // metoda wymaga podania jednego argumentu, który będzie selektorem css // weź selektor li który jest 2 selektorem
document.getElementById('first');

// obie metody zwracają pierwszy znaleziony element lub null jeśli nie znalazły żadnego

// metody pobierające wszytskie pasujące elementy

document.querySelectorAll("ul>li"); // nodeList czyli lista węzłów
document.getElementsByTagName('li'); // htmlCollection 
document.getElementsByClassName("even"); // htmlCollection

// zwracają listę pasujących elementów w formie tablicopodobnego obiektu (node-list w przypadku querySelectorAll i kolekcji html w przypadku dwóch pozostałych). Jeśli nie znajdują żadnego pasującego elementu to zwracany obiekt jest pusty.

// querySelectorAll przypomina bardziej tablicę ze względu na posiadanie części metod tablicowych

// zamiana pobranych elementów na tablice

const liList = document.querySelectorAll('li');
const liArray = [...liList];

// pobieranie atrybutów z elementów

const h2 = document.querySelector('h2');
console.log(h2.getAttribute('class'));
console.log(h2.getAttribute('id'));
console.log(h2.getAttribute('data-color')); // jeśli nie ma zwraca null

console.log(document.querySelector('h2').getAttribute('class'));

const h2Text = h2.textContent;
console.log(h2Text);
const h2HTML = h2.innerHTML;
console.log(h2HTML);

console.log(h2.classList);
const classListContains = h2.classList.contains("title"); // jeśli tak to true, jeśli nie to false
console.log(classListContains);

// MODYFIKACJA ELEMENTÓW
const firstLi = document.querySelector('li:first-child');
firstLi.textContent = "Nowa zawartość tekstowa";
firstLi.innerHTML = '<strong>Pogrubienie</strong> i normalnie';

// nadpisują reguły zapisane w plikustyle.css
firstLi.style.fontSize = "20px";
firstLi.style.backgroundColor = "#aac";
firstLi.style.letterSpacing = "2px";

firstLi.classList.add("space");
firstLi.classList.toggle("space"); // jeżeli jest klasa to ją usuwa, jeżeli nie ma to ją doda
firstLi.classList.remove("space"); // usuwa daną klasę

firstLi.className = "newClassName"; // nadpisanie nazwy klasy

firstLi.setAttribute('title', 'newAttributeAdded'); // setAttribute nadpisuje wartości

// modyfikowanie wielu elementów
const allLiItems = document.querySelectorAll("li");
console.log(allLiItems);

//allLiItems[1].style.fontSize = "10px";

for(let i = 0; i < allLiItems.length - 1; i++){
    allLiItems[i + 1].style.fontSize = "10px";
    allLiItems[i + 1].classList.add('red');
}

// za pomoce forEach
allLiItems.forEach(function(liItem){
    liItem.style.textDecoration = "underline";
});

// NASŁUCHIWANIE I OBSŁUGA ZDARZEŃ
// Metoda addEventListener, którą możemy wywołać na dowolnym elemencie DOM oraz na window


window.addEventListener("click", function(){
    console.log(`Click`);
});

const showScroll = function(){console.log("skroll");}

window.addEventListener("scroll", showScroll);

document.querySelector('h1').addEventListener('click', function(){
    this.textContent += "+";
})

const h1 = document.querySelector('h1');

const addText = function(){
    this.textContent += "c:";
    h1.classList.toggle("red");
}
h1.addEventListener("click", addText);

// zdażenia na wielu elementach
const items = document.querySelectorAll('li');

const liClickFunction = function(){
    console.log("Li click");
}

items.forEach(function(item){
    item.addEventListener('click', liClickFunction);
});

// TWORZENIE I DODAWANIE ELEMENTÓW DO STORNY

const liElement = document.createElement('li');
liElement.textContent = "Last Element";
liElement.style.backgroundColor = "yellow";
document.querySelector('ul').appendChild(liElement);

const divElement = document.createElement('div');
divElement.textContent = "New Div Element";
divElement.style.backgroundColor = "#aaa";
document.body.appendChild(divElement);

// DOM - obiektowy model dokumentu - model bieżącej strony internetowej, której głównym elementem jest document

// window - obiekt globalny dla środowiska uruchomieniowego jakim jest przeglądarka. Zawiera mnóstwo metod i właściwości do wykorzystania. Window reprezentuje okno przeglądarki (otwartą kartę)

console.log(window);

// setTinerval
let timer = 0;
// setInterval(() => console.log(++timer), 1000);