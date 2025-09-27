//Classes
class Jogador {
  constructor(nome, time, chu, dri) {
    this.nome = nome;
    this.time = time;
    this.chu = chu;
    this.dri = dri;
  }
}

class Goleiro {
  constructor(nome, time, sai, ela) {
    this.nome = nome;
    this.time = time;
    this.sai = sai;
    this.ela = ela;
  }
}

//Ferramentas
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

function confronto(jogador1, jogador2) {
  const sucesso = provavel() <= (jogador1.chu / (jogador1.chu + jogador2.ela));
  return sucesso;
}

//Casos
function cI(Jogador, Goleiro){
  const bateuDireto = [ "partiu pro chute direto",
  "solta a bomba em direto no gol!",
  "chuta direto!",
  "ajeita a bola e dispara firme, mirando o gol!",
  "arrisca a batida direta!"
];
 const goleiroPegou = [ "voa FIRME na bola o ",
"SAÍDA SEGURA do ",
"GRANDE DEFESA do "
];
 const jogadorMarcou = [ "GOLAÇO do ",
"Que CANUDO do ",
"UM MÍSSIL! Lá na rede, direto dos pés do "
];

  console.log(`${Jogador.nome} `+ escolheRandVetor(bateuDireto) + "!")
  result = confronto(Jogador, Goleiro)
  if (result){
    console.log(result)
    console.log(escolheRandVetor(jogadorMarcou) + Jogador.nome)
  }else{
    console.log(result)
    console.log(escolheRandVetor(goleiroPegou) + Goleiro.nome)
  }
}

//AAAAAAAAAA
const Pedro = new Jogador("Pedro", "Vermelhos", 85, 90);
const Lucas = new Goleiro("Lucas", "Azuis", 80, 88);

cI(Pedro, Lucas);
