//OPERATORY
// operator może być znakiem, może być słowem: typeof, delete, new;

2 + 2; // wynik 4 
"2" + "2"; //da wynik "22"
2 + true // da wynik 3
"2" + true // wynik "2true"
2 * "2" // da wynik 4 number

// podział operatorów ze względu na ilość argumentów
let result;
//dwuargumentowe
result = 1;
//jednoargumentowy
result++;
//trójargumentowy
3 > 2 ? "ture" : "false";

//preikrementacja
++result;
//inkrementacja 
result++;
//predekrementacja
--result;
//dekrementacja
result--;


//Modulo - dzielenie z resztą
10 % 9;

//potęga ES6
2 ** 5;

//operatory porównania
"tekst" == "tekst2" // zwykłe porównanie
"2" == 2 // dokonuje porównania typów, true, dokonuje konwersji typów
"2" === 2 // bez konwersji typów, a więc porównuje też typ, false