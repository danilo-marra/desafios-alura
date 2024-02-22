let perguntaCompras = '1';
let categorias = ['frutas', 'laticinios', 'doces', 'congelados'];
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let indiceElemento;
let removido;

while (perguntaCompras === '1' || perguntaCompras === '2') {
  perguntaCompras = prompt(
    'Digite 1 para adicionar, ou 2 para remover itens da sua lista de compras. Para sair digite "não"',
  );
  if (perguntaCompras == 'não') break;
  else if (perguntaCompras === '1') {
    let perguntaComida = prompt('Qual comida você deseja inserir?');

    let perguntaCategoria = prompt(
      `Em qual categoria essa comida se encaixa? Digite 1 para ${categorias[0]}, 2 para ${categorias[1]}, 3 para ${categorias[2]} ou 4 para ${categorias[3]}?`,
    );

    if (perguntaCategoria === '1') {
      frutas.push(perguntaComida);
    } else if (perguntaCategoria === '2') {
      laticinios.push(perguntaComida);
    } else if (perguntaCategoria === '3') {
      doces.push(perguntaComida);
    } else if (perguntaCategoria === '4') {
      congelados.push(perguntaComida);
    }
  } else if (perguntaCompras === '2') {
    let perguntaRemover = prompt(
      `Qual item gostaria de remover? Frutas: ${frutas} | Laticínios: ${laticinios} | Doces: ${doces} | Congelados: ${congelados}`,
    );

    if (frutas.includes(perguntaRemover)) {
      indiceElemento = frutas.indexOf(perguntaRemover);
      removido = frutas.splice(indiceElemento, 1);
      alert(`Item removido: ${removido}`);
    } else if (laticinios.includes(perguntaRemover)) {
      indiceElemento = laticinios.indexOf(perguntaRemover);
      removido = laticinios.splice(indiceElemento, 1);
      alert(`Item removido: ${removido}`);
    } else if (doces.includes(perguntaRemover)) {
      indiceElemento = doces.indexOf(perguntaRemover);
      removido = doces.splice(indiceElemento, 1);
      alert(`Item removido: ${removido}`);
    } else if (congelados.includes(perguntaRemover)) {
      indiceElemento = congelados.indexOf(perguntaRemover);
      removido = congelados.splice(indiceElemento, 1);
      alert(`Item removido: ${removido}`);
    } else {
      alert('Não foi possível encontrar o item dentro da lista');
    }
  }
}

alert(
  `Listas de Compras: Frutas: ${frutas} | Laticínios: ${laticinios} | Doces: ${doces} | Congelados: ${congelados}`,
);
