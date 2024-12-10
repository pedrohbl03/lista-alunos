let alunosArray = [
  ["Aluno 1", "Aluno 2", "Aluno 3"], //nomes
  [[10, 8, 9], [8, 5, 6], [7, 4, 8]], //peso das avaliações
  [1, 2, 3], // pesos 
];

function calculoConceito(boletim) {
  let mediaAlunos = [];

  for (let i = 0; i < boletim[0].length; i++) {
    let media = 0;

    for (let j = 0; j < boletim[1][i].length; j++) {
      media += (boletim[1][i][j] * boletim[2][j]);
    }

    let pesoTotal = boletim[2].reduce((acc, peso) => acc + peso);

    mediaAlunos.push({
      nome: boletim[0][i],
      media: media / pesoTotal,
    });
  }

  return mediaAlunos;
}


function render() {
  const alunos = calculoConceito(alunosArray);

  const lista = document.getElementById("lista-alunos");

  alunos.forEach((aluno) => {
    const li = document.createElement("li");
    li.innerHTML = `${aluno.nome}: ${aluno.media.toFixed(2)}`;
    lista.appendChild(li);
  });
}

render();