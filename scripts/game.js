// Aqui não irá ter contato com HTML, será somente o "backend" do front hahah

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0; // 0 para o jogador 1, e 1 para o jogador 2
let symbols = ["o", "x"];

function handleMove(position) {
  // o Array board na posição que foi clicada
  // irá receber o symbolo do jogador da rodada
  if(board[position] == "") {  // confiro se tá vazio pra n dar erro de duplo click na mesma posição
    board[position] = symbols[playerTime]; 

    if(playerTime == 0) {
      playerTime = 1;
    } else {
      playerTime = 0;
    }
  }
}