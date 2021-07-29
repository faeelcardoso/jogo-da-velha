// Aqui irá ter contato com o HTML



document.addEventListener("DOMContentLoaded", () => { // quando a DOM tree for totalmente montada
  let squares = document.querySelectorAll(".square"); // pego todos os quadrados num array

  // limpar tudo
  let button = document.querySelector("#reiniciar");
  button.addEventListener("click", clearAll);

  // limpar counter
  let counter = document.querySelector("#counterRestart");
  counter.addEventListener("click", clearCounter);

  updateCounter();

  squares.forEach(square => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(e) {
  let currentSquare = e.target;
  let position = e.target.id; // pego o id

  if(handleMove(position)) { // se handleMove que tá lá no game.js retornar true, o jogo acabou
    setTimeout(() => {
      currentWinner = (playerTime == 0) ? "🛡️" : "⚔️";
      currentCount = (playerTime == 0) ? 0 : 1;

      updateCounter(currentCount);

      alert(`O jogo acabou! O vencedor é o jogador ${currentWinner}!`);
    }, 10);
  }

  updateSquares(position, currentSquare);
}

function updateSquares(position, currentSquare) {
      let symbol = board[position]; // pego o símbolo dessa posição no vetor board
  
      if(symbol != "") { // se tive vazio, não faz nada
        currentSquare.innerHTML = `<div class='${symbol}'></div>`; // preencho a posição com o símbolo
      }
}

function updateCounter(currentCount) {
  if(!isTheFirstTime) { // é a primeira vez?
    (currentCount == 0) ? countP1++ : countP2++;
  }

  let counters = document.querySelectorAll(".counter");
  let aux = 0;

  counters.forEach(counter => {
    if(aux == 0) {
      counter.innerText = countP1;
    } else {
      counter.innerText = countP2;
    }
    aux++;
    isTheFirstTime = false;
  });
}

function clearAll() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;

  let squares = document.querySelectorAll(".square"); // pego todos os quadrados num array

  squares.forEach(square => {
    square.innerHTML = "";
  });

  alert("Tudo pronto para começar novamente!");
}

function clearCounter() {
  countP1 = 0;
  countP2 = 0;

  let counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = 0;
  });
}