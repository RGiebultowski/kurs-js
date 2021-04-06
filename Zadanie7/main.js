
const gameResults = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerChoice: "",
    aiChoice: ""
}

let counter = 0;
let interval;

const gameChoiceItems = [...document.querySelectorAll('.select img')];

function choosedHand(){
    game.playerChoice = this.dataset.option
    console.log(game.playerChoice);
    gameChoiceItems.forEach(item => item.style.boxShadow = '');
    this.style.boxShadow ='0 0 10px 6px yellow';
}

function checkResult(player, ai){
    if(player === ai){
        return 'draw'
    }else if((player === 'papier' && ai === 'kamien') || (player === 'kamien' && ai === 'nozyce')  || (player === 'nozyce' && ai ===  'papier')){
        return 'win'
    }else{
        return 'lose'
    }
}

async function showResults(player, ai, result){
    document.querySelector('[data-summary="yourChoice"]').textContent = player;

    gameResults.numbers++;

    document.querySelector('p.numbers span').textContent = gameResults.numbers;

    await new Promise(r => setTimeout(r, 1550));
    document.querySelector('[data-summary="aiChoice"]').textContent = ai;

    if(result === "win"){
        document.querySelector('p.wins span').textContent = ++gameResults.wins;
        document.querySelector('[data-summary="winner"]').textContent = 'Gracz!';
        document.querySelector('[data-summary="winner"]').style.color = 'green';
    }else if(result === "lose"){
        document.querySelector('p.losses span').textContent = ++gameResults.losses;
        document.querySelector('[data-summary="winner"]').textContent = 'Komputer!';
        document.querySelector('[data-summary="winner"]').style.color = 'red';
    }else{
        document.querySelector('p.draws span').textContent = ++gameResults.draws;
        document.querySelector('[data-summary="winner"]').textContent = 'Remis!';
        document.querySelector('[data-summary="winner"]').style.color = 'grey';
    }
}

function startGame(){
    animationEnd = false;
    if(!game.playerChoice){
        return alert('Wybierz dłoń');
    }

    game.aiChoice = aiChoice();
    const result = checkResult(game.playerChoice, game.aiChoice);
    showResults(game.playerChoice, game.aiChoice, result);
}

function aiChoice(){
    let intervalTimer = 1;
    interval = setInterval(aiAnimation, intervalTimer * 500);
    // randomize choice of ai
    const aiHand = gameChoiceItems[Math.floor(Math.random() * 3)].dataset.option;
    console.log(aiHand);
    return aiHand;
}

async function aiAnimation(){
    console.log('wykonałem się');
    counter++;
    // console.log(counter)
    for(let i = 0; i < gameChoiceItems.length; i++){
        console.log(i);
        if(i === 0){
            gameChoiceItems[i].style.boxShadow ='0 0 10px 6px blue';
            gameChoiceItems[i + 1].style.boxShadow ='';
            gameChoiceItems[gameChoiceItems.length - 1].style.boxShadow ='';
        }else if(i === 1){
            gameChoiceItems[gameChoiceItems.length - 1].style.boxShadow ='';
            gameChoiceItems[i].style.boxShadow ='0 0 10px 6px blue';
            gameChoiceItems[0].style.boxShadow ='';
        }else if(i === 2){
            gameChoiceItems[i].style.boxShadow ='0 0 10px 6px blue';
            gameChoiceItems[0].style.boxShadow ='';
            gameChoiceItems[i - 1].style.boxShadow ='';
        }
        await new Promise(r => setTimeout(r, 100));
    }
    if(counter == 3){
        gameChoiceItems[gameChoiceItems.length - 1].style.boxShadow ='';
        clearInterval(interval);
        counter = 0;
        //set color animation of aiChoice and Player
        for(let i = 0; i < gameChoiceItems.length; i++){
            const attribute = gameChoiceItems[i].dataset.option // lub .getAttribute('data-option');
            
            if(attribute === game.playerChoice){
                gameChoiceItems[i].style.boxShadow ='0 0 10px 6px yellow';
            }

            if(attribute === game.aiChoice){
                gameChoiceItems[i].style.boxShadow ='0 0 10px 6px blue';
            }
        }
    }
}

gameChoiceItems.forEach(item => item.addEventListener('click', choosedHand));

const startButton = document.querySelector('.start');

startButton.addEventListener('click', startGame);



