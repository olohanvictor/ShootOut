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
  return sucesso;
}

function duelo(Jogador, Goleiro){// mano a mano Drible x Saída 
  const sucesso = provavel() <= ((Jogador.dri) / (Jogador.dri + Goleiro.sai)); //D perto é + facil fzr o gol
  return sucesso;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function cI(Jogador, Goleiro, ConfrontoDist) {
  const bateuDireto = [
    "parte pro chute direto",
    "chuta direto!",
    "arrisca a batida direta"
  ];

  const goleiroPegou = [
    "voa FIRME na bola o ",
    "defesa SEGURA do ",
    "GRANDE DEFESA do "
  ];

  const jogadorMarcou = [
    "Que GOLAÇO do ",
    "Que CANUDO do ",
    "UM MÍSSIL! Lá na rede, direto dos pés do "
  ];

  console.log(`${Jogador.nome} ${escolheRandVetor(bateuDireto)}...`);
  await delay(2200);

  const result = ConfrontoDist(Jogador, Goleiro);
  await delay(2200);

  if (result) {
    console.log(escolheRandVetor(jogadorMarcou) + Jogador.nome + "!");
    return "jogador";
  } else {
    console.log(escolheRandVetor(goleiroPegou) + Goleiro.nome + "!");
    return "goleiro";
  }
}

async function cII(Jogador, Goleiro, ChuteMedio, Duelo, ChuteQueima) {
  const goleiroPegou = [
    "voa FIRME na bola o ",
    "defesa SEGURA do ",
    "GRANDE DEFESA do "
  ];

  console.log(`${Jogador.nome} avança em direção ao gol...`);
  await delay(2200);

  let escolhaGoleiro = randNum(1, 2);

  if (escolhaGoleiro === 1) {
    return await cI(Jogador, Goleiro, ChuteMedio);
  } else {
    console.log(`${Goleiro.nome} sai do gol e parte pra disputa mano a mano!`);
    await delay(2200);

    const result = Duelo(Jogador, Goleiro);
    await delay(2200);

    if (result) {
      console.log("Baita entortada do " + Jogador.nome + "! Agora é só bater pro gol...");
      await delay(2200);

      const chutou = ChuteQueima(Jogador);
      await delay(2200);

      if (chutou) {
        console.log(`GOL DO ${Jogador.nome}!!!!!!!!`);
        return "jogador";
      } else {
        console.log("PRA FORA!!!!");
        return "goleiro";
      }
    } else {
      console.log(escolheRandVetor(goleiroPegou) + Goleiro.nome + "!");
      return "goleiro";
    }
  }
}

const prompt = require("prompt-sync")();

function menu() {
  while (true) {
    console.log("\n=== Simulador de ShootOut ===");
    console.log("1. Jogar");
    console.log("2. Sair");

    const resp = prompt("Escolha: ");

    if (resp === "1") {
      console.log("🎮 Iniciando o jogo...")
      break;
    } else if (resp === "2") {
      console.log("👋 Saindo do jogo...");
      process.exit();
    } else {
      console.log("❌ Opção inválida!.");
    }
  }
}

async function partida(Jogador, Goleiro) {
  let pjog = 0;
  let pgol = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\n===== RODADA ${i} =====`);
    let escolha = randNum(1, 2);
    let resultado;

    if (escolha === 1) {
      resultado = await cI(Jogador, Goleiro, chute);
    } else {
      resultado = await cII(Jogador, Goleiro, chuteMedio, duelo, chuteQueima);
    }

    if (resultado === "jogador") {
      pjog += 1;
    } else {
      pgol += 1;
    }

    console.log(`\n📊 Placar:\nJogador: ${pjog} | Goleiro: ${pgol}`);

    if (pjog >= 3 || pgol >= 3){
     break; 
    }
    await delay(3000); //pausa antes da próxima rodada
  }

  console.log("\n===== FIM DA PARTIDA =====");
  if (pjog > pgol) {
    console.log(`🏆 ${Jogador.nome} vence por ${pjog} x ${pgol}!`);
  } else if (pgol > pjog) {
    console.log(`🧤 ${Goleiro.nome} leva a melhor por ${pgol} x ${pjog}!`);
  } else {
    console.log(`🤝 Empate em ${pjog} x ${pgol}!`);
  }
}


module.exports = { partida, menu };
