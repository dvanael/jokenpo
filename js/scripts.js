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

const themeButton = document.querySelector('.theme-btn'),
  body = document.body,
  lightMode = "img/light.png",
  darkMode = "img/dark.png"
  
themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeButton.style.opacity = 0; // Reduz a opacidade antes de mudar a imagem
    setTimeout(() => {
      themeButton.src = lightMode; // Muda a imagem
      themeButton.style.opacity = 1; // Aumenta a opacidade após a mudança
    }, 200); // Aguarda 300ms antes de mudar a imagem para coincidir com a duração da transição definida em CSS
  } else {
    themeButton.style.opacity = 0;
    setTimeout(() => {
      themeButton.src = darkMode;
      themeButton.style.opacity = 1;
    }, 200);
  }
});