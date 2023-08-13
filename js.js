var timer = 60;
var score = 0;
var hitrn;
function incresescore(){
    score += 10;
    document.querySelector("#scrorevalue").textContent=score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;
}

function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 152; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".bpanel").innerHTML = clutter;
}

function runTimer(){
   var timerint =  setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timervalue").textContent = timer;
        }  
        else{
            clearInterval(timerint);
            document.querySelector(".bpanel").innerHTML=`<h1>Game Over</h1>`;
        }   
    },1000)
}
// jispr click karenge wo element pr event raise hoga, aur event listener na milne pr event element ke parent pr listener dhundhega , waha bhi naa milne pr event parent ke parent ke parent pr listener dhudega. use eventbubbling kahte hai

document.querySelector(".bpanel").addEventListener("click", function(dets){
    // alert("hii");
    // console.log(Number(dets.target.textContent));
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        incresescore();
        makebubble();
        getNewHit();
    }
});

makebubble();
runTimer();
getNewHit();



