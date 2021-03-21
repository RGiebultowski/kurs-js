// HOISTING - zachowanie po wywołaniu kodu

// Interpreter czyta nasz kod od początku do końca, więc kolejność ma znaczenie, ale hoisting ten proces zaburza
// Zanim kod zostanie wykonany jest przetworzony. Więc interpreter przechodzi przez kod kilka razy (szuka błędów, wyszukuje deklaracji...)

// Hoisting - przeniesienie części deklaracji na początek zakresu

// const i let nie podlega hoistingowi
// var podlega

// funkcja stworzona za pomocą deklaracji podlega hoistingowi i może być wywyołana nawet przed jej zadeklarowaniem

console.log(myHoistingFunction);
myHoistingFunction();

function myHoistingFunction(){
    console.log("myHoistingFunction....")
}