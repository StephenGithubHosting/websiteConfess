let abc = 'abcdefghijklmnopqrstuvwxyz ';
let abcArr = [];
let word = [8, 26, 11, 14, 21, 4, 26, 6,0,1,1,24,26,18, 14, 26, 12, 20, 2, 7];
let words = '';
for(let i = 0; i < abc.length; i++){
    abcArr.push(abc[i]);
}

for (let x = 0; x < word.length; x++){
    words = words.concat(abcArr[word[x]])
}

console.log(words, ` <3`)

console.log(abcArr.length - 1);

function clearEffect(){    
document.querySelector('.left').style.opacity ="0";
document.querySelector('.left').style.animation ="0";
document.querySelector('.right').style.opacity ="0";
document.querySelector('.right').style.animation ="0";
}



const f = document.querySelectorAll('.status');
  
const j = f.length;

let currentStatus = 1;
console.log(currentStatus)
$('.left').on('click', ()=>{
clearEffect();
currentStatus--;
     if(currentStatus < 1){
     currentStatus = 1;
   
     } else{
         f[currentStatus].style.animation = "moveLeft 0.3s ease forwards";
         
     }
     
});
$('.right').on('click', ()=>{
clearEffect();
    currentStatus++;
    if (currentStatus > j){
        currentStatus = j;
    } else{
         f[currentStatus - 1].style.animation = "moveRight 0.3s ease forwards";
    }
});

// animation: moveRight 1s ease-in forwards 3s;
