let livesCounter=3;
let smurfsCounter=0;

const smurfs = document.querySelectorAll('.smurf');
const azraels = document.querySelectorAll('.azrael');
const found = document.querySelector('.found');

Array.from(smurfs).forEach(element=>element.addEventListener('click',foundSomething));
Array.from(azraels).forEach(element=>element.addEventListener('click',foundSomething))

function foundSomething(event){
    
    let element = event.target;
    if (element.classList.contains('smurf') && (element.style.opacity!=='1')){
        element.style.opacity='1';
        smurfsCounter++;
        found.innerText = smurfsCounter;
        if(smurfsCounter===6)
            document.querySelector('h1').textContent='You Won!';  
    }
    else if (element.classList.contains('azrael')){
            element.style.opacity='1';
            livesCounter--;
            switch(livesCounter){
                case 2: document.querySelector('#heart1').style.display='none'; break;
                case 1: document.querySelector('#heart2').style.display='none';
                break;
            }
            if (livesCounter===0){
                document.querySelector('#heart3').style.display='none';
                Array.from(smurfs).forEach(element=>element.style.opacity = 0);
                document.querySelector('#gargamel').style.display='block';
                document.querySelector('h1').textContent='Game Over!';
            }
            else{
                setTimeout(()=>{element.style.opacity="0";},3000);
            }
    }
    // console.log(`I'm in! Smurfs: ${smurfsCounter} lives: ${livesCounter}`);
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


async function reset() {
    let result = await fetch('/api?action=reset');
    let data = await result.json();
    // console.log(data);
    const characters = Array.from(document.querySelectorAll('.smurf, .azrael')); 

    document.querySelector('#gargamel').style.display='none';
    document.querySelector('h1').textContent='Find The Smurfs';
    document.querySelector('#heart1').style.display='block';
    document.querySelector('#heart2').style.display='block';
    document.querySelector('#heart3').style.display='block';
    Array.from(document.querySelectorAll('.smurf, .azrael')).forEach(element=>element.style.opacity = .1);

    smurfsCounter = 0;
    found.innerText = smurfsCounter;
    livesCounter = 3;
    
    characters.forEach(character => {
        character.style.left = 0;
        character.style.top = 0;
    });

    let posX=0;
    let posY=0;

    characters.forEach((character, i) => {
        // console.log(data[i].left)
        character.style.left = `${data[i].left}%`;
        character.style.top = `${data[i].top}%`;
        // console.log(character.id, "Moved To: ", data[i].left, data[i].top);
    });
}

reset()


