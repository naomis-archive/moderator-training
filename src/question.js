const highlight = (id) => {
  const answers = document.getElementsByClassName("answer");
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.remove("highlighted");
  }
  const target = document.getElementById(id);
  target.classList.add("highlighted");
};

const showAnswer = () => {
    document.getElementById("answer-modal").classList.add("shown")
}

const hideAnswer = () => {
    document.getElementById("answer-modal").classList.remove("shown")
}