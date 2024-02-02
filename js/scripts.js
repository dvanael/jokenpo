const gameContainer = document.querySelector(".game"),
  userImg = document.querySelector(".user-result img"),
  botImg = document.querySelector(".bot-result img"),
  result = document.querySelector(".result"),
  optionImgs = document.querySelectorAll(".option-img");

const R = "img/rock.png", 
  P = "img/paper.png", 
  S = "img/scissors.png";

const draw = "Empate", win = "Você Ganhou!", lose = "Você Perdeu!";

let isProcessing = false;

function play(user, option){
    if (isProcessing) return;
    isProcessing = true;

    gameContainer.classList.add("start");
    userImg.src = botImg.src = R;
    result.textContent = "Aguarde";
    result.classList.add("loading");
    option.classList.add("selected");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      
      let q = [R, P, S];
      let randomNum = Math.floor(Math.random()*q.length);
      let bot = q[randomNum]; 
      
      userImg.src = user;
      botImg.src = bot;
      
      if (user === bot) result.textContent = draw;
      else if (
        (user === R && bot === S) ||
        (user === P && bot === R) ||
        (user === S && bot === P)
        ) {
          result.textContent = win;
        } else {
          result.textContent = lose;
        }
      
      result.classList.remove("loading")
      option.classList.remove("selected");
      isProcessing = false;
    }, 2500);
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.src = "img/light.png"
});
