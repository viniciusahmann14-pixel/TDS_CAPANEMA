let temDinheiro = false;
let estaChovendo = false;
let carroEstaNaGaragem = true;

let logicaAnd = "#AND Você vai ao cinema?";
logicaAnd += temDinheiro && estaChovendo;
console.log(logicaAnd);

let logicaOr = "#OR você vai ao cinema?";
logicaOr += estaChovendo || carroEstaNaGarragem;
console.log(logicaOr);