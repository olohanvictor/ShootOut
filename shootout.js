//Aq é onde os betas nao tem vez

const { Jogador, Goleiro } = require("./models.js");
const { cI, sleep } = require("./tools");

const Pedro = new Jogador("Pedro", "Vermelhos", 85, 90);
const Lucas = new Goleiro("Lucas", "Azuis", 80, 88);

//Eu ODEIO Node.
async function shootout(){
    for (let i = 1; i <= 5; i++){
        cI(Pedro, Lucas);
        await sleep(3000)
    }
}

shootout()
