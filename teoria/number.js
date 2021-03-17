// metoda .toFixed(), zaokrąglenie
// zaokroglenie do liczby całkowitej (od 5 zaokragla wzwyż, poniżej 5 w doł)
const newNumber = 123.45;
newNumber.toFixed();
//do jeddnego miejsca
newNumber.toFixed(1);
//zwracana wartość z metody jest stringiem!!!!!


//toString() zamienia na stringa
newNumber.toString(2); //zamieni na stringa ale w systemie dwójkowym  

// parseInt() zamienia stringa na liczbę całkowitą można podać również z jakiej notacji typu parseInt("100", 2) wynik 4