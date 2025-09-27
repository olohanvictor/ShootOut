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
  return new Promise(resolve => setTimeout(resolve, ms))
}


function chute(Jogador, Goleiro) {
  const sucesso = provavel() <= (Jogador.chu / (Jogador.chu + Goleiro.ela))
  return sucesso;
}

function chuteMedio(Jogador, Goleiro) {
  const sucesso = provavel() <= ((Jogador.chu+20) / (Jogador.chu + Goleiro.ela))//+ perto + facil fzr o gol
  return sucesso;
}

function chuteQueima(Jogador) {
  const chute = (Jogador.chu * 0.66) / 100;
  const sucesso = provavel() >= chute//Muito perto exige uma habilidade a mais
  console.log("Chute chanse: "+chute)
  console.log("Resul: "+sucesso)
  return sucesso;
}

function duelo(Jogador, Goleiro){// mano a mano Drible x Saída 
  const sucesso = provavel() <= ((Jogador.dri) / (Jogador.dri + Goleiro.sai)); //D perto é + facil fzr o gol
  return sucesso;
}

function cI(Jogador, Goleiro, ConfrontoDist){
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


  console.log(`${Jogador.nome} `+ escolheRandVetor(bateuDireto) + "...");

  const result = ConfrontoDist(Jogador, Goleiro)
  
  if (result){
    console.log(result);
    console.log(escolheRandVetor(jogadorMarcou) + Jogador.nome + "!");
  } else {
    console.log(result);
    console.log(escolheRandVetor(goleiroPegou) + Goleiro.nome + "!");
  }
}

function cII(Jogador, Goleiro, ChuteMedio, Duelo, ChuteQueima){
  console.log(`${Jogador.nome} avança em direção ao gol...`)
  let escolhaGoleiro = randNum(1,2)

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

  if (escolhaGoleiro === 1){
    cI(Jogador, Goleiro, ChuteMedio)

  } else {
    console.log(`${Goleiro.nome} sai do gol e parte pra disputa mano a mano!`)
    const result = Duelo(Jogador, Goleiro)
    
    if (result){
      console.log(result);
      console.log("Baita entortada do " + Jogador.nome + "! Agora é só bater pro gol...");
      const chutou = ChuteQueima(Jogador)
      if (chutou){
        console.log(`GOL DO ${Jogador.nome}!!!!!!!!`)
      } else {
        console.log("PRA FORA!!!!")
      }

    } else { //Feito
      console.log(result);
      console.log(escolheRandVetor(goleiroPegou) + Goleiro.nome + "!");
    }
  }
}

//Aq é onde os betas nao tem vez
const Pedro = new Jogador("Pedro", "Vermelhos", 85, 90);
const Lucas = new Goleiro("Lucas", "Azuis", 80, 88);

//Eu ODEIO Node.
function shootout(){
  console.log("Inicio Loop=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
  cI(Pedro, Lucas, chute);
  console.log("Transição de caso=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
  cII(Pedro, Lucas, chuteMedio, duelo, chuteQueima)
  console.log("Fim Loop=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
}


shootout();


