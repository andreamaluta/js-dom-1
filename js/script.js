const lamp = document.getElementById('off');
console.log(lamp);
const button = document.getElementById('btn');
console.log(button);


button.addEventListener('click', function(){
    if(lamp.src.includes('white')){
        lamp.src = '../img/yellow_lamp.png';
        button.innerText = 'Spegni';
    }else{
        lamp.src = '../img/white_lamp.png';
        button.innerText = 'Accendi';
    }
})

