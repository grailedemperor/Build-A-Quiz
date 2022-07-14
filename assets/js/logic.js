// TODO: add game logic
var questions = [ 
    {
        "title": "question1"
        "options": ["opt1", "opt2", "opt3", "opt4"]
        "answer": "opt1"
    }

    {
        "title": "question2"
        "options": ["opt1", "opt2", "opt3", "opt4"]
        "answer": "opt3"
    }

    {
        "title": "question3"
        "options": ["opt1", "opt2", "opt3", "opt4"]
        "answer": "opt4"
    }

    {
        "title": "question4"
        "options": ["opt1", "opt2", "opt3", "opt4"]
        "answer": "opt2"
    }
]


var globalIndex = 0;
var startBtnEl = document .getElementById('start-btn');
var timerInterval;
var timerEl = document.getElementById('timer');
var time  = 75;
var CorrectWav = document.getElementById("CorrectWav");
var inCorrectWav = document.getElementById("inCorrectWav");

var timerInterval = setInterval(timerFunc, 1000);

function checkAnswer() {
    let result;
    if(option.onclick === answer){
       result = 'Correct' + CorrectWav.play();
        } else{
            result = 'Incorrect' + inCorrectWav.play();
        }
        return result;
        globalIndex++;
        renderQuest();
    }

    
function renderQuest(){
    for(var i = 0; i < 3; i++){
        var questionContainerEl = document.getElementById('questions');
        var titleEl = document.createElement('h2');
        var option = document.createElement('button');
        option.textContent = '1.option';
        option.onclick = checkAnswer;

        titleEl = questions[globalIndex].title;

        questionContainerEl.appendChild(titleEl);
        questionContainerEl.appendChild(option);
    }
}


function timerFunc(){
    timerEl.textContent = time;
    time--;
    if(time<0){
        clearInterval(timerInterval);
    }
};

// create Elements

// assign the elememts text

// if 

function init(){
    timerinterval=setInterval(timerfunc,1000);
    renderQuest();
}

startBtnEl.onclick=init;