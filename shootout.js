//Aq é onde os betas nao tem vez
const { Jogador, Goleiro } = require("./models.js");
const { partida, menu } = require("./tools");

const Pedro = new Jogador("Pedro", "Vermelhos", 85, 90);
const Lucas = new Goleiro("Lucas", "Azuis", 80, 88);

menu()
partida(Pedro, Lucas)

