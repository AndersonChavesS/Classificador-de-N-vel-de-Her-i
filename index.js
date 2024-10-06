// Variáveis para nome e experiência do herói
let nome = 'BladerMaster';
let xp = 7500;
let nivel;

// Estrutura de decisão usando switch para classificar o nível do herói
switch (true) {
  case xp < 1000:
    nivel = 'Ferro';
    break;
  case xp >= 1001 && xp <= 2000:
    nivel = 'Bronze';
    break;
  case xp >= 2001 && xp <= 5000:
    nivel = 'Prata';
    break;
  case xp >= 5001 && xp <= 7000:
    nivel = 'Ouro';
    break;
  case xp >= 7001 && xp <= 8000:
    nivel = 'Platina';
    break;
  case xp >= 8001 && xp <= 9000:
    nivel = 'Ascendente';
    break;
  case xp >= 9001 && xp <= 10000:
    nivel = 'Imortal';
    break;
  case xp >= 10001:
    nivel = 'Radiante';
    break;
  default:
    nivel = 'Desconhecido';
}

// Saída com o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
