const rectangle = document.createElement('div');
let flag = true;
let height = 10;

rectangle.style.height = height + 'px';

document.body.appendChild(rectangle);

window.addEventListener('scroll', function() {
    if(flag) {
        height += 15;
        rectangle.style.height = height + 'px';
    }else{
        height -= 15;
        rectangle.style.height = height + 'px';
    }

    if(height >= window.innerHeight/2){
        flag = !flag;
        rectangle.style.backgroundColor = "red";
    }else if( height <= 10){
        flag = true;
        rectangle.style.backgroundColor = "greenyellow";
    }
})