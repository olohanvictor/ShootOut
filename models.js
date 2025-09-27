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

module.exports = { Jogador, Goleiro };