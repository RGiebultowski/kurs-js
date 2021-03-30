let red = 255;
let green = 255;
let blue = 255;

const init = () => {
    window.addEventListener('keydown', onKeyDown);
}

const onKeyDown = (event) => {
    switch (event.key){
        case "ArrowUp": 
            document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
            console.log(red, green, blue, 'ArrowUp');
        break;
        case "ArrowDown":
            document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
            console.log(red, green, blue, 'ArrowDown');
            break;
        default:
            console.log('wrong button');
            break;
    }
}

init();