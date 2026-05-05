let hora =  new Date();
console.log(hora.getHours() + ":" + hora.getMinutes());
let mensagem = hora <= 18 ? "Boa tarde" : "boa noite";
console.log(mensagem);