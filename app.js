let user_score = 0;
let comp_score = 0;

let user_counter = document.getElementById("user-score");
let comp_counter = document.getElementById("computer-score");
let score_bored = document.querySelector(".score-boared");
let result = document.querySelector(".result>h2");
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissor = document.getElementById("s");

function getComputerChoice() {
  const Choice = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return Choice[randomNumber];
}

function toLetter(letter) {
  if (letter === "r") {
    return "Rock";
  }
  if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}
function win(userChoice, ComputerChoice) {
  user_score++;
  user_counter.innerHTML = user_score;
  comp_counter.innerHTML = comp_score;
  result.innerHTML = `${toLetter(userChoice)}    beats   ${toLetter(
    ComputerChoice
  )}   .You win ! `;
}

function lose(userChoice, ComputerChoice) {
  comp_score++;
  comp_counter.innerHTML = comp_score;
  user_counter.innerHTML = user_score;
  result.innerHTML = `${toLetter(ComputerChoice)}    beats   ${toLetter(
    userChoice
  )}   .You lose ! `;
}
function draw(userChoice, ComputerChoice) {
  user_counter.innerHTML = user_score;
  comp_counter.innerHTML = comp_score;
  result.innerHTML = `${toLetter(userChoice)}   equals   ${toLetter(
    ComputerChoice
  )}   .Its a Draw ! `;
}
function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, ComputerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, ComputerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, ComputerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", () => {
    game("r");
  });
  paper.addEventListener("click", () => {
    game("p");
  });
  scissor.addEventListener("click", () => {
    game("s");
  });
}

main();
