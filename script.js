let currentQuestion = 0;

function init() {
  document.getElementById("all_questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question_text").innerHTML = question["question"];
  for (let i = 1; i < 5; i++) {
    document.getElementById(`answer_${i}`).innerHTML = question[`answer_${i}`];
  }
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let rightAnswer = `answer_${question[`right_answer`]}`;

  if (rightAnswer == selection) {
    document
      .getElementById(selection)
      .parentNode.classList.add("bg-success-subtle");
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
  init();
}
