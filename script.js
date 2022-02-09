const prompt = require("prompt-sync")();

console.log("Hello, Word!");

let escolhas = ["PEDRA", " PAPEL", " TESOURA"];
let pontospc = 0;
let pontosuser = 0;

function jogo() {
  const rodadas = +prompt(
    `Olá, bem vindo ao desafio, quantas rodadas vc deseja jogar? `
  );

  for (i = 0; i < rodadas; i++) {
    const escolhajogador = prompt(`Escolha uma das opçoes (${escolhas}): `);

    const randompro2 = Math.floor(Math.random() * escolhas.length);

    const escolhapc = escolhas[randompro2];

    console.log(
      `Você escolheu: ${escolhajogador} e o Computador escolheu: ${escolhapc}`
    );

    if (escolhapc === escolhajogador) {
      console.log(`Empate`);
    } else if (escolhapc === "pedra" && escolhajogador === "tesoura") {
      console.log(`Pedra quebra tesoura, você perdeu`);
      pontospc++;
    } else if (escolhapc === "tesoura" && escolhajogador === "pedra") {
      console.log(`Pedra quebra tesoura, você venceu`);
      pontosuser++;
    } else if (escolhapc === "pedra" && escolhajogador === "papel") {
      console.log(`Papel envolve pedra, você venceu`);
      pontosuser++;
    } else if (escolhapc === "papel" && escolhajogador === "pedra") {
      console.log(`Papel envolve pedra, Você perdeu`);
      pontospc++;
    } else if (escolhapc === "tesoura" && escolhajogador === "papel") {
      console.log(`Tesoura corta papel, Você perdeu`);
      pontospc++;
    } else if (escolhapc === "papel" && escolhajogador === "tesoura") {
      console.log(`Tesoura corta papel, Você venceu`);
      pontosuser++;
    } else {
    }
  }
}

jogo();

console.log(`Você fez ${pontosuser} e o computador fez ${pontospc}`);

if (pontosuser === pontospc) {
  console.log(`Você empatou `);
} else if (pontosuser > pontospc) {
  console.log(`Você Venceu`);
} else if (pontosuser < pontospc) {
  console.log(`Você Perdeu `);
}

const jogardenovo = prompt(`Deseja jogar novamente? `);

if (jogardenovo === "sim") {
  jogo();
}
