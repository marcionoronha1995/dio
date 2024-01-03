// Crie duas instâncias do objeto Date com as datas desejadas
var data1 = new Date('2022-01-01');
var data2 = new Date('2022-12-31');

// Calcule a diferença em milissegundos
var diferencaEmMilissegundos = Math.abs(data2 - data1);

// Converta a diferença para dias
var diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

console.log('Diferença em dias:', diferencaEmDias);

//agora faca um programa com html e css para informar a data e cacular os dias
//faca o teste com datas em ano bisesto 
//crite testes de datas, compare com os resultados da calculadora hp