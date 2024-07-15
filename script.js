let currentQuestion = 0;

function init() {
  let allQuestions = document.getElementById("all_questions");
  allQuestions.innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question_text").innerHTML = question["question"];
  for (let i = 1; i < 5; i++) {
    document.getElementById(`answer_${i}`).innerHTML = question[`answer_${i}`];
  }
}

function answer(selection){
    let question = questions[currentQuestion];
    let rightAnswer = `answer_${question[`right_answer`]}`;

    if(rightAnswer == selection){
        // document.getElementById(selection).classList.add('green');
        alert("RICHTIG")
    }else{
        // document.getElementById(selection).classList.add('red');
        alert("FALSCH")
    }
};
