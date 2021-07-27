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

  handleMove(position); // mando pro game.js lidar com isso
  updateSquares(position, currentSquare);
}

function updateSquares(position, currentSquare) {
      let symbol = board[position]; // pego o símbolo dessa posição no vetor board
  
      if(symbol != "") { // se tive vazio, não faz nada
        currentSquare.innerHTML = `<div class='${symbol}'></div>`; // preencho a posição com o símbolo
      }
}