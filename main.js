let livesCounter=3;
let smurfsCounter=0;

const smurfs = document.querySelectorAll('.smurf');
const azraels = document.querySelectorAll('.azrael');

Array.from(smurfs).forEach(element=>element.addEventListener('click',foundSomething));
Array.from(azraels).forEach(element=>element.addEventListener('click',foundSomething))

function foundSomething(event){
    
    let element = event.target;
    if (element.classList.contains('smurf') && (element.style.opacity==='')){
        element.style.opacity='1';
        smurfsCounter++;
        if(smurfsCounter===6)
            document.querySelector('h1').textContent='You Won!';  
    }
    else if (element.classList.contains('azrael')){
            element.style.opacity='1';
            livesCounter--;
            switch(livesCounter){
                case 2: document.querySelector('#heart1').style.display='none'; break;
                case 1: document.querySelector('#heart2').style.display='none';
            }
            if (livesCounter===0){
                document.querySelector('#heart3').style.display='none';
                Array.from(smurfs).forEach(element=>element.style.display='none');
                document.querySelector('#gargamel').style.display='block';
                document.querySelector('h1').textContent='Game Over!';
            }
            else{
                setTimeout(()=>{element.style.opacity="0";},3000);
            }
    }
    console.log(`I'm in! Smurfs: ${smurfsCounter} lives: ${livesCounter}`);
}

document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.start').addEventListener('click', start);
document.querySelector('.help').addEventListener('click', help);
function start(){
    document.querySelector('h4').style.display = 'none';
}
function help(){
    document.querySelector('h4').style.display = 'block';
}
// async function reset() {
//     let result = await fetch('/api?action=reset');
//     let data = await result.json();
//     console.log(data);
//     document.querySelector('#brainySmurf').style.left = `${data.width}%`;
//     document.querySelector('#brainySmurf').style.top = `${data.height}%`;
// }

const characters = Array.from(document.querySelectorAll('.smurf, .azrael')); 

function isOccupied(posX, posY){
    for(let i=0; i< characters.length; i++){
        console.log('checking', characters[i].id, characters[i].width, characters[i].height);
        if (Math.abs(characters[i].width - posX)<=20 || Math.abs(characters[i].height - posY) <= 20)
        return true;
    }
    return false;
}

function reset(){
    let posX=50;
    let posY=50;
    console.log(characters);
    characters.forEach(character => {
        console.log("Moving: ", character.id);
        do{
            posX = Math.trunc(Math.random() * 90 + 2);
            posY = Math.trunc(Math.random() * 60 + 25);
            console.log('testing: ', posX, posY);
        }while(isOccupied(posX, posY));

        character.style.left = `${posX}%`;
        character.style.top = `${posY}%`;
        console.log(character.id, "Moved To: ", posX, posY);
    });
}