// create questions, choices and answers
var questions = [
    {
      title: "Arrays in JavaScript are indicated by enclosing your values in what?",
      choices: ["square brackets", "paranthesis", "curly braces", "exclamation points"],
      answer: "square brackets",
    },
    {
      title: "How do you return the length of an array?",
      choices: ["array.number", "array.size", "array.length", "array.index"],
      answer: "array.length",
    },
    {
        title: "Inside which HTML element do we put JavaScript?",
        choices: ["head", "js", "script", "p"],
        answer: "script",
      },
      {
        title: "What type of box do you use to answer a true or false question?",
        choices: ["alert", "prompt", "msgBox", "confirm"],
        answer: "confirm",
      },
      {
        title: "How do you repeat the same code for an entire query?",
        choices: ["repeat", "forloop", "circuit", "loophole"],
        answer: "forloop",
      },
]
// create global variables

var currentQuestion = 0;
// create header variable 
var header = document.querySelector('.header');
// create content variable
var content = document.querySelector('.content');
// create button variable
var startButton = document.querySelector('#startGame'); 
var timerEl = document.querySelector('.timer');
var timer = 0;
var stopMessage = document.querySelector('#end-message');
var title = document.querySelector('#question');

var finalScoreEl = document.querySelector('#score');
finalScore = 0;
var scoreInput = document.getElementById('score-input')
scoreInput.style.display = 'block';
var submitInitialsButton = document.getElementById('submit-initials');
var initialsInput = document.getElementById('initials');
var scoreInputForm = document.getElementById('score-input');
scoreInputForm.setAttribute('style','display:none;');
var goBackButton = document.querySelector('#go-back');
var clearHistoryButton = document.querySelector('#clear-scores');
var scoreCardTitle = document.getElementById('score-card-name');
var scoreList = document.querySelector('.scorelist');
var choiceList = document.querySelector('#choiceList');
// click the start button to show the first question

startButton.addEventListener('click', function(event){

  question.setAttribute('style','display:block;');
  choiceList.setAttribute('style','display:block;')
  // clear header and content
  header.setAttribute('style','display:none;')
  content.setAttribute('style','display:none;');
  // hide button
  startButton.setAttribute('style','display:none');
  currentQuestion = 0;
  // set timer
  timer = 30;
  // create time interval for timer countdown
  var timerInterval = setInterval(function() {
    if (timer > 0 && currentQuestion < questions.length){
      timerEl.textContent = `Timer:${timer}`;
      timer--;
    } else if (timer > 0 && currentQuestion >= questions.length) {
        finalScore = timer;
        finalScoreEl.textContent = `Your finale score is  ${finalScore}`;
        timerEl.setAttribute('style','display:none;')
        message.setAttribute('style','display:none;')
        clearInterval(timerInterval);
        scoreInputForm.setAttribute('style','display:block;')
        finalScoreEl.setAttribute('style','display:block;');
    } else if (timer <= 0) {
      // if timer runs out, send message times up and clear page
          message.setAttribute('style','display:none;')
          timer = 0;
          timerEl.textContent = 'Timer: 0';
          stopMessage.textContent = 'Times Up';
          title.setAttribute('style','display:none;')
          choiceList.setAttribute('style','display:none;');
          finalScore = timer;
          finalScoreEl.textContent = `Your finale score is  ${finalScore}`;
          clearInterval(timerInterval);
          scoreInputForm.setAttribute('style','display:block;');
          finalScoreEl.setAttribute('style','display:block;');
          
    }},1000);
  showQuestion();
}); 

function submitHighScore(event) {
  event.preventDefault(); 
  finalScoreEl.setAttribute('style','display:none;');
  scoreInputForm.setAttribute('style','display:none;');
  var scoreItems = {
    initials: initialsInput.value,
    score: finalScore,
  }; 
  window.localStorage.setItem('score', JSON.stringify(scoreItems));
  initialsInput.value = '';
  printHighScore(); 
}
goBackButton.addEventListener('click',function(){
  scoreCardTitle.setAttribute('style','display:none;')
  scoreList.setAttribute('style','display:none;');
  goBackButton.setAttribute('style','display:none;');
  clearHistoryButton.setAttribute('style','display:none;');
  header.setAttribute('style','display:block;');
  stopMessage.textContent = '';
  timerEl.setAttribute('style','display:inline;');
  startButton.setAttribute('style','display:block;');
  content.setAttribute('style','display:block;');
  timer = 0;
});   
function printHighScore(number){
  finalScoreEl.textContent = '';
  stopMessage.textContent = '';
  scoreInputForm.setAttribute('style','display:none;');
  submitInitialsButton.setAttribute('style','disply:none;')
  
  var player = JSON.parse(window.localStorage.getItem('score'));
  
  var scoreHistory = document.createElement('li');
  scoreHistory.textContent = player.initials + " - " + player.score;
  scoreList.appendChild(scoreHistory);
  scoreList.setAttribute('style','display:block;');
  scoreCardTitle.textContent = 'High Scores';
  scoreCardTitle.setAttribute('style','display:block;')
  console.log(player);
  goBackButton.setAttribute('style','display:inline;');
  clearHistoryButton.setAttribute('style','display: inline;')
}  


// show the first question and choices
function showQuestion(){
  message.textContent='';
  
  choiceList.textContent = '';
  
  
  
  // clear the  and
  
  // add the question to the h2 question
  title.textContent = questions[currentQuestion].title;
  console.log(title);
  // add the choices to a ul list
   var choiceItems = questions[currentQuestion].choices;
   
   choiceItems.forEach(function(choiceItem, index) {
    var listItem = document.createElement('li');
    
    var button = document.createElement('button');
    button.textContent = choiceItem;
    button.setAttribute('class','choiceItemButton');
    // adding li to ol
    listItem.appendChild(button);
    choiceList.appendChild(listItem); 
    
  });

  // grab choice items 
   var choiceItemButtons = document.querySelectorAll  ('.choiceItemButton');
    choiceItemButtons.forEach(function(choiceAnswer, index){ 
      choiceAnswer.addEventListener('click', function(event){ 
        // identifying answer to question, and taking action if what user clicks on is correct.
        var answerChoice = event.target.innerHTML;
        var message = document.querySelector('#message');
        // notify the user if they got it right or wrong
        if(answerChoice === questions[currentQuestion].answer){
        message.textContent = 'Correct!';
  
        } else{
          message.innerHTML = 'Wrong';
          timer = timer - 10;
        }
  
        currentQuestion++;
        if (currentQuestion < questions.length){
          setTimeout(showQuestion, 1000);
        } else {
      
          // send message saying finished
          stopMessage.textContent ="Finished";
          
          // clear title
          title.setAttribute('style','display:none;');

          choiceList.setAttribute('style','display:none;');
          
        };   
      });
    });
    submitInitialsButton.addEventListener('click', submitHighScore);
    
    ; 
  };    
    
     
     console.log(currentQuestion);
  