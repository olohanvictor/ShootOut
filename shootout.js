//Aq é onde os betas nao tem vez
const { Jogador, Goleiro } = require("./models.js");
const { cI, cII, chute, chuteMedio, chuteQueima, duelo } = require("./tools");

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