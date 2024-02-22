const resposta = Math.floor(Math.random() * 11); // Número aleatório de 0 a 10
let tentativas = 3;
for (let i = 0; i < tentativas; i++) {
  let pergunta = prompt('Digite um número de 0 a 10');
  if (+pergunta === resposta) {
    console.log(`Sim. Você adivinhou ${pergunta} e a resposta foi ${resposta}`);
    break;
  } else {
    console.log(
      `Não. Você adivinhou ${pergunta}. Você tem mais ${
        tentativas - i - 1
      } tentativa(s)`,
    );
  }

  if (i === 2) {
    console.log(
      `Suas ${tentativas} tentativas acabaram. O número correto era: ${resposta}`,
    );
  }
}
