let currentQuestion = 0;
let allRightAnswer = 0;

function init() {
  document.getElementById("all_questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("question_card").classList.add("d-none");
    document.getElementById("end_card").classList.remove("d-none");
    document.getElementById("head_picture").src = "./assets/img/flags.png";
    document.getElementById("right_answers").innerHTML = allRightAnswer;
    document.getElementById("all_answers").innerHTML = questions.length;
  } else {
    let question = questions[currentQuestion];
    document.getElementById("question_text").innerHTML = question["question"];
    for (let i = 1; i < 5; i++) {
      document.getElementById(`answer_${i}`).innerHTML =
        question[`answer_${i}`];
    }
    document.getElementById("current-question").innerHTML = currentQuestion + 1;
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let rightAnswer = `answer_${question[`right_answer`]}`;

  if (rightAnswer == selection) {
    document
      .getElementById(selection)
      .parentNode.classList.add("bg-success-subtle");
    allRightAnswer++;
  } else {
    document
      .getElementById(selection)
      .parentNode.classList.add("bg-danger-subtle");
    document
      .getElementById(rightAnswer)
      .parentNode.classList.add("bg-success-subtle");
  }
  document.getElementById("next_button").disabled = false;
}

function nextQuestion() {
  for (let i = 1; i < 5; i++) {
    let answerContainer = document.getElementById(`answer_${i}`);
    answerContainer.parentNode.classList.remove("bg-danger-subtle");
    answerContainer.parentNode.classList.remove("bg-success-subtle");
  }

  document.getElementById("next_button").disabled = true;
  currentQuestion++;
  showQuestion();
}
