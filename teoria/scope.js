// scope
// zakres mówi gdzie dana zmienna jest widoczna i gdzie może być wykorzystana

// zakres globalny i zakres lokalny (zakres lokalny tworzy blok lub ciało funkcji)

// kązdy blok, funkcja tworzy swój zakres

// Zakres globalny
// Poza blokami i funkcjami. Przestrzeń najwyższego rzędu

// Zmienne zadeklarowane w zakresie globalnym są widoczne wszędzie w programiw (również w innych zakresach)

const userName = "Rafał";

function showName(){
    const userName = "Karolnia"; // gdyby nie był otego wynikiem byłoby "Rafał"
    //userName = "Nowy User name"; // wygeneruje błąd bo chce nadpisać
    console.log(userName);
}

showName();

// zakres lokalny Funkcja
