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

var finalScore = document.querySelector('#score');
finalScore = timer
// click the start button to show the first question
startButton.addEventListener('click', function(event){
  
  // clear header and content
  header.textContent = '';
  content.textContent = '';
  // hide button
  startButton.setAttribute('style','display:none');
  // set timer
  timer=30;
  
  // create time interval for timer countdown
  var timerInterval = setInterval(function() {
    if (timer > 0 && currentQuestion < questions.length){
      timer--;
      
      timerEl.textContent = `Timer:${timer}`;
      // if timer runs out, send message times up and clear page
    } else if (timer <= 0) {
      timer = 0;
      timerEl.textContent = 'Timer: 0';
      
      clearInterval(timerInterval);
      title.setAttribute('style','display:none;')
      choiceList.setAttribute('style','display:none;')
      stopMessage.textContent = 'Times Up'
     
    } 
  },1000);
  
    

  
  
  showQuestion();
}); 
// show the first question and choices
function showQuestion(){
  message.textContent='';
  var choiceList = document.querySelector('#choiceList');
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
         if (currentQuestion <= 4){
           setTimeout(showQuestion, 1000);
          } else {
           
           
           
           console.log(finalScore);
           // send message saying finished
           stopMessage.textContent ="Finished";
           // clear title
           title.setAttribute('style','display:none;');

          choiceList.setAttribute('style','display:none;');
         };
         
     });
    });   
     
     console.log(currentQuestion);
     
     
    
     
    
   
   
   
  
   
  
  

  
// go to the next question

// show the next question with choices

//
  }