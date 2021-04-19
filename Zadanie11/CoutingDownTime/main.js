const endTime = new Date('2021-09-17 10:00:00').getTime(); //ustawienie daty końcowej w ms

const spanDays = document.querySelector('span.d');
const spanHours = document.querySelector('span.h');
const spanMinutes = document.querySelector('span.m');
const spanSeconds = document.querySelector('span.s');

setInterval(() => {
    const nowTime = new Date().getTime(); // pobranie wartości w ms

    let days = Math.floor((endTime / (1000 * 24 * 60 * 60)) - (nowTime / (1000 * 24 * 60 * 60)));
    
    days = days < 10 ? `0${days}` : days;

    let hours = Math.floor(((endTime / (1000 * 60 * 60)) - (nowTime / (1000 * 60 * 60))) % 24);

    hours = hours < 10 ? `0${hours}`: hours;

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let sec = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

    sec = sec < 10 ? `0${sec}` : sec;

    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = sec;
}, 1000);
