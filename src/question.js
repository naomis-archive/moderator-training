const highlight = (id) => {
  const answers = document.getElementsByClassName("answer");
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.remove("highlighted");
  }
  const target = document.getElementById(id);
  target.classList.add("highlighted");
};

const showAnswer = () => {
  const validate = document.getElementsByClassName("highlighted");
  if (!validate.length) return alert("Please select an answer!");
  const modal = document.getElementById("answer-modal");
  modal.classList.add("shown");
  const marginValue = Math.max(
    0,
    (document.body.clientHeight - modal.style.height) / 2
  );
  modal.setAttribute("style", `margin-top: ${marginValue}px`);
};

const hideAnswer = () => {
  document.getElementById("answer-modal").classList.remove("shown");
};

const formatChat = () => {
  const chats = document.getElementsByClassName("chatbox");
  for (let i = 0; i < chats.length; i++) {
    console.log(chats[i].innerHTML);
    chats[i].innerHTML = chats[i].innerHTML.replace(
      /^[\s]*(.*): (.*)/gm,
      "<img class='pfp' src='../../public/img/disc.jpg'><span class='username'>$1</span><span class='chat-content'>$2</span>"
    );
    console.log(chats[i].innerHTML);
  }
};
