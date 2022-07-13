// TODO: add game logic

var startBtnEl = document .getElementById('start-btn');

const timerEl = document.getElementById('timer');
let time  = 75;

const timerInterval = setInterval(timerFunc, 1000);
    
function renderQuest(){
    var questionContainerEl = document.getElementById('questions');
    var titleEl = document.createElement('h2')
    titleEl = questions[0].title
}


function timerFunc(){
    timerEl.textContent = time;
    time--;
    if(time<0){
        clearInterval(timerInterval);
    }
};

create Elements

assign the elememts text

if 

function init(){
    timerinterval=setInterval(timerfunc,1000);
}

startBtnEl.onclick=init;