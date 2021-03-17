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


