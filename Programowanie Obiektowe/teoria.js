// Programowanie proceduralne - funkcje operuja na danych

// Programowanie obiektowe - program zbudowany z obiektów. Program jest zbiorem obiektów (połączone dane i metody) oraz relacji i zależności między nimi

// Obiekty, wzorce obiektów (konstruktory / klasy) hermetyzacja, dziedziczenie, polimorfizm, abstrakcja - elementy niezbędne by język uznać za obiektowy

//OBIEKT
// DANE (Właściwości)
// ZACHOWANIE (Metody)

//Obiekt też kontroluje dostęp do składowych
// Obiekty są dynamiczne, możemy wprowadzać zmiany, dodawać elementy lub je usuwać 


// KONSTRUKTOR
// jest to funkcja, której używamy jako wzór do tworzenia nowego obiektu. Konwencja wymaga napisania nazwy konstruktora wielką literą


// INSTANCJA
// jest to obiekt stworzony zgodnie z wzorcem w konstruktorze

// Prototyp
// jest to obiekt przypisany do konstruktora, który posiada wspólne metody i właściwości dostępne dla każdej instancji ( przydatność w dziedziczeniu)

//składnia prototype

/*
Animal.prototype.addChildren = function (childrenName){
    this.chldren.push(childrenName);
}
*/

// PROTOTYP - specjalny obiekt w funkcji konstruktora (w klasie), który przechowuje wspólne metody i właściwości dla wszytkich instancji.

// Obiekt (instancja) może mieć własne wałściwości i metody, a może je też dziedziczyć (bez przypisywania)

//Dziedziczenie w JS oparte jest przede wszytkim na prototypach

// KLASY

//tworzenie

/*
class Animal{
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    // prototyp
    eat(){
        console.log(this.name + 'om om');
    }
}

*/


// this

// nie będzie działało w funkcjach strzałkowych, będzie się odwoływać to obiektu window.



// HERMETYZACJA - ENKAPSULACJA

// Grupowanie (zamykanie) metod i właściwości w obiekcie

// Integralność danych i ukrywanie danych. Kontrolowaniem dostępu do danych ma zajmować się sam obiekt

//Popularnym rozwiązaniem jest używanie metod pobierających (getter) i dostępowych (setter) do danych w obiekcie.

// Implementacja staje się ukryta a dostęp do danych w jednym obiekcie jest udostępniony innemu obiektowi za pomocą interfejsu

// Dziedziczeie

// redukcja powtarzalnego kodu, stworzenie relacji między obiektami i grupowanie obiektów. Zmniejszenie ilości potencjalnych błędów
//extends

/*class Dogs extends Animal{

}
*/