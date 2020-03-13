let result = 0

function add() {
    document.getElementById('result').innerText =  result
    result++
}



function remove() {
    document.getElementById('result2').innerText =  result
    result--
}



var i = 0;
var images = ['./images/ar0.jpeg','./images/ar5.jpg', './images/ar2.jpeg', './images/ar3.jpeg', './images/ar4.jpeg'];
var time = 3000;


function changeImg(){

    document.slide.src = images[i];

    if (i< images.length -1){
        i++;
    }else{
        i=0
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg



















/*let result = document.getElementById('result')
let btnplus = document.getElementById ('btnplus')
let btnmoins =document.getElementById ('btnmoins')
let count = parseInt(result.innerText)
let result2 = document.getElementById('result2')
let count2 = parseInt(result2.innerText)


btnplus.addEventListener('click', function(){
    count++;
    result.innerHTML = count;

})


btnmoins.addEventListener('click', function(){
    count2--
   result2.innerText = count2;

})*/





