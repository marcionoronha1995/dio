//1 - preço do etanol;
//2 - preço da gasolina;
//3 - timpo de combustível que está no carro;
//4 - gasto médio de combustível do carro por km;
//5 - distância da viagem;
var etanol,precoGasolina,tipoCombutivel,gastoMediKm,distanciaViagem;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o preço do etanol: ', (etanol) => {
  console.log(`Preço do etanol R$${etanol} o litro`);
  rl.close();
});
