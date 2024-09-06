// counter program

const decreaseBtn = document.getElementById ("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLable");
let count = 0;


increaseBtn.onClick = function(){
    count ++;
    countLable.textContent = count;
}

decreaseBtn.onClick = function(){
    count --;
    countLable.textContent = count;
}
 
resetBtn.onClick = function(){
    count = 0 ;
    countLable.textContent = count;
}
