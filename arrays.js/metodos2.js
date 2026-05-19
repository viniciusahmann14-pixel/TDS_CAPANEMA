// índices       0  1  2  3  4  5
const numeros = [1, 2, 3, 4, 5, 8];

numeros.pop(); // Exclue sempre o último valor
console.log(numeros);
numeros.splice(1, 2); // Remove o índice informado
console.log(numeros);
