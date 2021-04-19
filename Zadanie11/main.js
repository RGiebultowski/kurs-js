const clock = () => {
    const date = new Date();

    const sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    
    document.querySelector('.clock span').textContent = `${hour}:${min}:${sec}`;
}

setInterval(clock, 1000);

