//Funções e utilidades em geral
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function escolheRandVetor(lista) {
  if (lista.length === 0) return null;
  return lista[randNum(0, lista.length - 1)];
}

function provavel() {
  return Math.random();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function cI(Jogador, Goleiro){
  const bateuDireto = [
    "parte pro chute direto",
    "chuta direto!",
    "arrisca a batida direta"
  ];

  const goleiroPegou = [
    "voa FIRME na bola o ",
    "saída SEGURA do ",
    "GRANDE DEFESA do "
  ];

  const jogadorMarcou = [
    "Que GOLAÇO do ",
    "Que CANUDO do ",
    "UM MÍSSIL! Lá na rede, direto dos pés do "
  ];

  function confronto(jogador1, jogador2) {
    const sucesso = provavel() <= (jogador1.chu / (jogador1.chu + jogador2.ela));
    return sucesso;
  }

  console.log(`${Jogador.nome} `+ escolheRandVetor(bateuDireto) + "...");

  const result = confronto(Jogador, Goleiro)
  
  if (result){
    console.log(result);
    console.log(escolheRandVetor(jogadorMarcou) + Jogador.nome + "!");
  } else {
    console.log(result);
    console.log(escolheRandVetor(goleiroPegou) + Goleiro.nome + "!");
  }
}

function cII(){
  //Fazer
}

module.exports = { randNum, escolheRandVetor, provavel, cI, cII, sleep };