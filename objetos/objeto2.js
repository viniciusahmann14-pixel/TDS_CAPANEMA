const carro = {
    modelo: "AUDI a4",
    ano:2026,
    valor: "R$ 270.000,00",
    cor: "branco", 
    ligar: function () {
        console.log("Carro ligado!");
    }
}

console.log(carro.modelo);
carro.ligar();