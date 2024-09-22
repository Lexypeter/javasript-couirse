
let arrays = {
  computerMove: "",
  lose:0,
  win:0,
  ties:0,
  totalDraws:0,
  totalLoss:0,
  totalWins:0,
}
function rock(){
  random = Math.random();
  let loser = document.getElementById("loser");
  let winner = document.getElementById("winner");
  let tier = document.getElementById("tier");
  let div2 = document.getElementById("div2");
  p2 = document.getElementById("p2");
  p3 = document.getElementById("p3");
  p2.src =  "./rock-emoji - Copy.png";
  if(random >= 0 && random < 1/3){
    arrays.computerMove = "rock";
  }else if (random >= 1/3 && random <2/3){
    arrays.computerMove ="paper";
  }else if(random >= 2/3 && random < 3/3){
    arrays.computerMove = "scissors";
  };
  if(  arrays.computerMove === "rock"){
    arrays.ties += 1;
    tier.innerHTML =  arrays.ties;
    div2.style.color = "yellow"
    div2.innerHTML = "Ties"
    p3.src = "./rock-emoji - Copy.png"
  }else if ( arrays.computerMove === "paper"){
    arrays.lose += 1;
    loser.innerHTML =  arrays.lose;
    div2.innerHTML = "lose";
    div2.style.color = "red"
    p3.src ="./paper-emoji.png";
  }else if ( arrays.computerMove === "scissors"){
    arrays.win += 1;
    winner.innerHTML =  arrays.win;
    div2.innerHTML = "win"
    div2.style.color = "green";
     p3.src = "./scissors-emoji.png"
  }
  if ( arrays.win == 20){
    alert("You won")
     arrays.totalWins += 1;
      func();
    }else if ( arrays.ties == 20){
      alert("Game is a Tie")
      arrays.totalDraws += 1;
        func()
    }else if( arrays.lose == 20){
      arrays.totalLoss += 1
      alert("Opss you lose");
      func()
    }  
    let nigeria = document.getElementById("totalwins");
    nigeria.innerHTML =  arrays.totalWins
    let ghana = document.getElementById("totalTies")
    ghana.innerHTML =  arrays.totalDraws
    let egypt = document.getElementById("totalLoss")
    egypt.innerHTML =  arrays.totalLoss
}
function paper(){
  let loser = document.getElementById("loser");
  let winner = document.getElementById("winner");
  let tier = document.getElementById("tier")
  let div2 = document.getElementById("div2");
  p2 = document.getElementById("p2");
  p3 = document.getElementById("p3");
  random = Math.random();
  p2.src = "./paper-emoji.png";
  if(random >= 0 && random < 1/3){
    arrays.computerMove = "rock";
  }else if (random >= 1/3 && random < 2/3){
    arrays.computerMove ="paper";
  }else if(random >= 2/3 && random < 3/3){
    arrays.computerMove = "scissors";
  };
  if(arrays.computerMove === "rock"){
    arrays.lose  += 1;
    loser.innerHTML =  arrays.lose;
  div2 = "You Loss";
  div2.style.color = "red";
  p3.src = "./rock-emoji - Copy.png"
  }else if ( arrays.computerMove === "paper"){
    arrays.ties += 1
    tier.innerHTML =  arrays.ties;
    div2.innerHTML = "Ties";
    div2.style.color = "yellow"
    p3.src ="./paper-emoji.png";
  }else if ( arrays.computerMove === "scissors"){
    arrays.win += 1;
    winner.innerHTML =  arrays.win;
     div2.innerHTML = "You Win";
     div2.style.color = "green";
     p3.src = "./scissors-emoji.png";
  }
  if ( arrays.win == 20){
    alert("You won")
    arrays.totalWins += 1;
      func();
    }else if ( arrays.ties == 20){
      alert("Game is a Tie")
      arrays.totalDraws += 1;
        func()
    }else if( arrays.lose == 20){
      arrays.totalLoss += 1
      alert("Opss you lose");
      func()
    }  
    let nigeria = document.getElementById("totalwins");
    nigeria.innerHTML =  arrays.totalWins
    let ghana = document.getElementById("totalTies")
    ghana.innerHTML =  arrays.totalDraws
    let egypt = document.getElementById("totalLoss")
    egypt.innerHTML =  arrays.totalLoss
}
function scissors(){
  let loser = document.getElementById("loser");
  let winner = document.getElementById("winner");
  let tier = document.getElementById("tier");
  let div2 = document.getElementById("div2");
  p2 = document.getElementById("p2");
  p3 = document.getElementById("p3");
  p2.src = "./scissors-emoji.png"
  random = Math.random();
  if(random >= 0 && random < 1/3){
    arrays.computerMove = "rock";
  }else if (random >= 1/3 && random <2/3){
    arrays.computerMove ="paper";
  }else if(random >= 2/3 && random < 3/3){
    arrays.computerMove = "scissors";
  };
  if( arrays.computerMove === "rock"){
    arrays.win += 1;
    arrays.computerMove = "scissors";
    winner.innerHTML =  arrays.win;
    div2.innerHTML = "You Win"
    div2.style.color = "green"
    p3.src = "./rock-emoji - Copy.png"
  }else if ( arrays.computerMove === "paper"){
    arrays.lose += 1;
    loser.innerHTML =  arrays.lose;
    div2.innerHTML = "You Loss"
    div2.style.color = "red"
    p3.src ="./paper-emoji.png";
  }else if ( arrays.computerMove === "scissors"){
    arrays.ties += 1
    tier.innerHTML =  arrays.ties;
    div2.innerHTML = "Ties"
    div2.style.color = "yellow"
     p3.src = "./scissors-emoji.png"
  }
  if ( arrays.win == 20){
    alert("You won")
    arrays.totalWins += 1;
      func();
    }else if ( arrays.ties == 20){
      alert("Game is a Tie")
      arrays.totalDraws += 1;
        func()
    }else if( arrays.lose == 20){
      arrays.totalLoss += 1
      alert("Opss you lose");
      func()
    }  
  let nigeria = document.getElementById("totalwins");
  nigeria.innerHTML =  arrays.totalWins
  let ghana = document.getElementById("totalTies")
  ghana.innerHTML =  arrays.totalDraws
  let egypt = document.getElementById("totalLoss")
  egypt.innerHTML =  arrays.totalLoss
}
function reset(){
  let confirms = confirm("Do you want to reset the game")
  if(confirms){
  let loser = document.getElementById("loser");
  let winner = document.getElementById("winner");
  let tier = document.getElementById("tier")
  let div2 = document.getElementById("div2");
  div2.innerHTML = "Start Game";
  arrays.win = 0;
  arrays.lose = 0;
  arrays.ties = 0
  winner.innerHTML =  arrays.win;;
  loser.innerHTML =  arrays.lose;
  tier.innerHTML =  arrays.ties;
    
    alert("You have successfully restarted the game good luck")
  }

}
function func(){
  let loser = document.getElementById("loser");
  let winner = document.getElementById("winner");
  let tier = document.getElementById("tier")
  let div2 = document.getElementById("div2");
  div2.innerHTML = "Start Game";
  arrays.win = 0;
  arrays.lose = 0;
  arrays.ties = 0
  winner.innerHTML =  arrays.win;;
  loser.innerHTML =  arrays.lose;
  tier.innerHTML =  arrays.ties;
}
localStorage.setItem(JSON.stringify("arrays", arrays))