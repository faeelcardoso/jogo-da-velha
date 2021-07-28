// Aqui não irá ter contato com HTML, será somente o "backend" do front hahah

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0; // 0 para o jogador 1, e 1 para o jogador 2
let symbols = ["o", "x"];
let gameOver = false;
let currentWinner = "";
let winStates = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
];

function handleMove(position) {
  // o Array board na posição que foi clicada
  // irá receber o symbolo do jogador da rodada

  if(gameOver) { 
    return;
  }

  if(board[position] == "") {  // confiro se tá vazio pra n dar erro de duplo click na mesma posição
    board[position] = symbols[playerTime]; 

    gameOver = isWin(); // recebo o resultado da function isWin

    if(!gameOver) { // gameOver == false
      playerTime = (playerTime == 0) ? 1 : 0;
    }
  }

  return gameOver;
}

function isWin() {
  let result = false;
  
  winStates.forEach(e => { // confiro se já tem vencedor 
    let position0 = e[0];
    let position1 = e[1];
    let position2 = e[2];

    if(board[position0] == board[position1] && 
       board[position0] == board[position2] &&
       board[position0] != "") {

      result = true;
    } 
  });

  return result;
}