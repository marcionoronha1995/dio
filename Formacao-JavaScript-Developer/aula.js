console.log("....novo teste")
const camisaMarcio = "azul";
const camisaMarleny = "amarelo";
console.log(camisaMarcio.length);
console.log(camisaMarleny.length);
console.log(camisaMarcio.length + camisaMarleny.length);
console.log((camisaMarcio.length % 2) === 0 );
console.log((camisaMarleny.length % 2) === 0);
if ((camisaMarcio.length % 2) === 0) {
 console.log(camisaMarcio.length + " o número de caracteres da string é par");
} else {
    console.log(camisaMarcio.length + "é impar");
};
if ((camisaMarleny.length % 2) === 0) {
 console.log(camisaMarleny.length + " o número de caracteres da string é par");
} else {
    console.log(camisaMarleny.length + " o número de caracteres da string é impar");
};
const numeroZero = 0;
console.log(numeroZero);
if ((numeroZero % 2) === 0) {
 console.log(numeroZero + " o número da constante é par");
} else {
    console.log(numeroZero + "é impar");
};