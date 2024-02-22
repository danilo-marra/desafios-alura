let perguntaCompras;
let comidas = [];
let comidaCategoria = [];

while (perguntaCompras !== 'não') {
  perguntaCompras = prompt(
    'Você deseja adicionar uma comida na sua lista de compras?',
  );
  if (perguntaCompras === 'não') {
    break;
  } else {
    let perguntaComida = prompt('Qual comida você deseja inserir?');
    comidas.push(perguntaComida);
    let categoria = ['frutas', 'laticinios', 'congelados', 'doces'];
    let perguntaCategoria = prompt(
      `Em qual categoria essa comida se encaixa? Digite ${categoria[0]} para frutas, ${categoria[1]} para laticinios, ${categoria[2]} para congelados, ou ${categoria[3]} para doces`,
    );
    comidaCategoria.push({
      comida: perguntaComida,
      categoria: perguntaCategoria,
    });
  }
}

for (let item of comidaCategoria) {
  alert(`Lista de compras: ${item.comida} - ${item.categoria} `);
}
