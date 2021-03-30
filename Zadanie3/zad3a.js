const createListButton = document.querySelector('button');
const elementNumber = 10;
let counter = 1;
let lastNumber = 0;
let textSize = 10;
let mainUlList;
let isListExist = false;
createListButton.addEventListener("click", function(){
    if(!isListExist){
        const ulList = document.createElement('ul');
        mainUlList = ulList;
        for(let i = 0; i <= elementNumber; i++){
            const li = document.createElement('li');
            li.textContent = `Elemenr nr ${i}`;
            li.style.fontSize = textSize + i + 'px';
            ulList.appendChild(li);
            document.body.appendChild(ulList);
            lastNumber = i;
        }
        counter++;
        isListExist = !isListExist;
        console.log(isListExist);
    }else{
        textSize += 10;
        console.log(lastNumber);
        console.log(counter);
        console.log(textSize);
        for(let i = lastNumber + 1; i <= elementNumber * counter; i++){
            const li = document.createElement('li');
            li.textContent = `Elemenr nr ${i}`;
            for(let j = textSize + 1; j <= lastNumber + 11; j++){
                li.style.fontSize = j + 'px';
            }
            mainUlList.appendChild(li);
            document.body.appendChild(mainUlList);
            lastNumber = i;
        }
        counter++;
    }
})