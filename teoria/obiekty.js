// Obiekty

// nieuporządkowana lista właściwości złożnoych z nazwy (klucza) i wartości (key - value). Nazwa jest łańcuchem a wartość może być dowlonym typem. Jeśli wartością jest funkcja mówimy wtedy, że dana właściowść jest metodą.

// Tworzenie obiektu

// operator new i konstruktor obiektu(funkcja)

// 1 - tworzymy obiekt
const cat = new Object();

// 2 - przypisujemy mu właściwości
cat.name = "Klusek";
cat['age'] = 2; // dokładnie to samo co cat.age = 2;
cat['eye color'] = 'blue';
cat.meow = function(){
    console.log("Meow");
}

// literał obiektu {} - efekt jest taki same co przy konstruktorze
// przypisujemy od razu właściwości

const dog = {
  name: "Miki",
  age: 11,
  eyeColour: "brown",
  barking: function(){
      console.log("hau hau");
  },
  squeaking(){ //ES6
      console.log("uuuuuuuuuu");
  }  
};

// można dynamicznie dodawać (zmieniać) właściwości

dog.castred = false;
dog.childrens = [];
dog.castred = true;

// usuwanie właściwości
delete dog.childrens;

// odwołanie do obiektu w innej funkcji
const result = {
    value: 1
}

function addOne(){
    let increse = result.value++;
    return increse;
}

// odwołanie do obiektu w metodzie (this)
// this oznacza że ma się odwołać do obiektu na którym wykonywana jest metoda
const counter = {
    score: 0,
    increment: function(){
        this.score++;
        console.log(this.score)
    }
}

counter.increment()
