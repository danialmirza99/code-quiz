var beginButton = document.querySelector("#begin");
var clock = document.querySelector("#clock");


function startQuiz(){
    var time = 121; //two min timer
    var timeTicks = setInterval(function(){
        time--;
        clock.textContent = time + " seconds!";
        if(time ===0){
            clearInterval(timeTicks);
            alert("Times Up!");
        }
    }, 1000);
}

startQuiz();