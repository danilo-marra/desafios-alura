const formacao = prompt(
  'Escolha sua formação. 1 p/ Front-End ou 2 p/ Back-End',
);

if (formacao == 1) {
  const especFront = prompt(`Você quer aprender 1 - React ou 2 - Vue?`);
  if (especFront == 1) {
    alert('Você escolheu React');
    const estudo = prompt(
      `Você quer 1 - se especializar em React ou 2 - ser desenvolvedor Fullstack?`,
    );
    if (estudo == 1) {
      alert('Você escolheu se especializar em React!');
    } else if (estudo == 2) {
      alert('Você escolheu ser desenvolvedor Fullstack!');
    } else {
      alert('Você não escolheu nem 1 nem 2');
    }
  } else if (especFront == 2) {
    alert('Você escolheu Vue');
    const estudo = prompt(
      `Você quer 1 - se especializar em Vue ou 2 - ser desenvolvedor Fullstack?`,
    );
    if (estudo == 1) {
      alert('Você escolheu se especializar em Vue!');
    } else if (estudo == 2) {
      alert('Você escolheu ser desenvolvedor Fullstack!');
    } else {
      alert('Você não escolheu nem 1 nem 2');
    }
  } else {
    alert('Você não escolheu nem 1 nem 2');
  }
} else if (formacao == 2) {
  const especBack = prompt(`Você quer aprender 1 - C# ou 2 - Java?`);
  if (especBack == 1) {
    alert('Você escolheu C#');
    const estudo = prompt(
      `Você quer 1 - se especializar em C# ou 2 - ser desenvolvedor Fullstack?`,
    );
    if (estudo == 1) {
      alert('Você escolheu se especializar em C#!');
    } else if (estudo == 2) {
      alert('Você escolheu ser desenvolvedor Fullstack!');
    } else {
      alert('Você não escolheu nem 1 nem 2');
    }
  } else if (especBack == 2) {
    alert('Você escolheu Java');
    const estudo = prompt(
      `Você quer 1 - se especializar em Java ou 2 - ser desenvolvedor Fullstack?`,
    );
    if (estudo == 1) {
      alert('Você escolheu se especializar em Java!');
    } else if (estudo == 2) {
      alert('Você escolheu ser desenvolvedor Fullstack!');
    } else {
      alert('Você não escolheu nem 1 nem 2');
    }
  } else {
    alert('Você não escolheu nem 1 nem 2');
  }
} else {
  alert('Você não escolheu nem 1 nem 2');
}

let msg = prompt(
  'Tem mais alguma tecnologia que você gostaria de aprender? Digite "ok" em caso positivo.',
);
let techs = [];

while (msg === 'ok') {
  const tech = prompt('Qual?');
  techs.push(tech);
  msg = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.",
  );
}
alert(`Tecnologias que você gostaria de se especializar: ${techs.join(', ')}`);
