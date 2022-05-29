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

document.querySelector('button').addEventListener('click', reset);

async function reset() {
    let result = await fetch('/api?action=reset');
    let data = await result.json();
    console.log(data);
    document.querySelector('#brainySmurf').style.left = `${data.width}%`;
    document.querySelector('#brainySmurf').style.top = `${data.height}%`;
}