function soma(n1, n2) {
  return n1 + n2;
}

function subtração(n1, n2) {
  return n1 - n2;
}

function multiplicacao(n1, n2) {
  return n1 * n2;
}

function divisao(n1, n2) {
  return n1 / n2;
}

let perguntaOperacao;
while (perguntaOperacao != 'sair') {
  perguntaOperacao = prompt(
    'Qual operação você gostaria de realizar? Digite 1 para soma, 2 para subtração, 3 para multplicação ou 4 para divisão. Para sair digite "sair"',
  );
  if (perguntaOperacao == 'sair') {
    break;
  } else if (
    perguntaOperacao == 1 ||
    perguntaOperacao == 2 ||
    perguntaOperacao == 3 ||
    perguntaOperacao == 4
  ) {
    const n1 = parseFloat(prompt('Digite o 1º número'));
    const n2 = parseFloat(prompt('Digite o 2º número'));
    switch (perguntaOperacao) {
      case '1':
        alert(`O resultado da soma é ${soma(n1, n2)}`);
        break;

      case '2':
        alert(`O resultado da subtração é ${subtração(n1, n2)}`);
        break;

      case '3':
        alert(`O resultado da multplicação é ${multiplicacao(n1, n2)}`);
        break;

      case '4':
        if (n2 === 0) {
          alert(`Não é possível dividir por 0!`);
        } else {
          alert(`O resultado da divisão é ${divisao(n1, n2)}`);
          break;
        }
    }
  } else {
    alert('Operação inválida!');
  }
}
