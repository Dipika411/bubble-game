var timer = 20;
var score = 0;
var hitrn = 0;

function increaseScore(){
     score += 10;
     document.querySelector('#scoreval').textContent = score;
}

function getNewHit()
{
     hitrn = Math.floor(Math.random() * 10);
     document.querySelector('#hitwell').textContent = hitrn;
}

function makeBubble() {
     var clutter = "";

     for (var i = 1; i <= 152; i++) {
          var rn = Math.floor(Math.random() * 10);
          clutter += `<div class="bubble">${rn}</div>`;
     }

     document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
     var timer1 = setInterval(function () {
            if (timer > 0) {
                 timer--;
                 document.querySelector("#timerval").textContent = timer;
            }
            else{
                 clearInterval(timer1)
                 document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>
                 <p>Your Total Score:</p>
                <span id="final-score">${score}</span>
            `;
            }
       }, 1000);
  }

  document.querySelector("#pbtm")
  .addEventListener("click", function(details){
     var clickdnum = Number(details.target.textContent);
     if(clickdnum === hitrn)
     {
          increaseScore();
          makeBubble();
          getNewHit();
     }
  });



runTimer();
makeBubble();
getNewHit();