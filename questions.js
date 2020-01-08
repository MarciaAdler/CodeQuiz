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
        choices: ["<head>", "<js>", "<script>", "<p>"],
        answer: "<script>",
      },
      {
        title: "What type of box do you use to answer a true or false question?",
        choices: ["alert", "prompt", "msgBox", "confirm"],
        answer: "confirm",
      },
      {
        title: "How do you indicate equals as a condition in an if statement",
        choices: ["=", "==", "===", "===="],
        answer: "===",
      },
]
= {
askQuestion()
var solutionList = document.createElement("ol");

for (let i = 0; i < questions.length; i++) {
    var solution = document.createElement("li");
    solution.textContent = questions[i].answer;
    solutionList.appendChild(solution);
}
document.body.appendChild(solutionList);
}