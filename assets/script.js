var beginButton = document.querySelector("#begin");
var clock = document.getElementById('clock');


function startQuiz(){
    var time = 2; //two min timer
    beginButton.addEventListener("click", function(event){
        clearInterval(timeInterval);
        var timeInterval = setInterval(function(){
            time--;
            clock.textContent = time + " seconds!";
            if(time === 0){
                alert("Times Up!");
                clearInterval(timeInterval);
            }
        }, 1000)
    });
}

startQuiz();