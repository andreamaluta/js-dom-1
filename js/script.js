const lamp = document.getElementById('off');
console.log(lamp);
const button = document.getElementById('btn');
console.log(button);


button.addEventListener('click', function(){
    lamp.src = '../img/yellow_lamp.png';
})