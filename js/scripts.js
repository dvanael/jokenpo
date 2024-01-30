const gameContainer = document.querySelector(".game"),
  userImg = document.querySelector(".user-result img"),
  botImg = document.querySelector(".bot-result img"),
  result = document.querySelector(".result"),
  optionImgs = document.querySelectorAll(".option-img");

const R = "assets/rock.png", 
  P = "assets/paper.png", 
  S = "assets/scissors.png";

const draw = "Empate", win = "Você Ganhou!", lose = "Você Perdeu!";

function play(user){
    userImg.src = botImg.src = "assets/rock.png";
    result.textContent = "Aguarde...";
    
    gameContainer.classList.add("start");
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      
      let q = [R, P, S];
      let randomNum = Math.floor(Math.random()*q.length);
      let bot = q[randomNum]; 
      
      userImg.setAttribute('src', user);
      botImg.setAttribute('src', bot);
      
      if (user === bot) return result.textContent = draw;
      else if (
          (user === R && bot === S) ||
          (user === P && bot === R) ||
          (user === S && bot === P)
      ) {
        return result.textContent = win;
      } else {
        return result.textContent = lose;
      }
    }, 2500);
}
