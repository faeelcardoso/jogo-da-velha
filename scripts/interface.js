// Aqui irá ter contato com o HTML

document.addEventListener("DOMContentLoaded", () => { // quando a DOM tree for totalmente montada
  let squares = document.querySelectorAll(".square"); // pego todos os quadrados num array

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
      alert(`O jogo acabou! O vencedor é o jogador ${currentWinner}!`);
    }, 10);

    let button = document.querySelector("input");
    button.addEventListener("click", clearAll);
  }

  updateSquares(position, currentSquare);
}

function updateSquares(position, currentSquare) {
      let symbol = board[position]; // pego o símbolo dessa posição no vetor board
  
      if(symbol != "") { // se tive vazio, não faz nada
        currentSquare.innerHTML = `<div class='${symbol}'></div>`; // preencho a posição com o símbolo
      }
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