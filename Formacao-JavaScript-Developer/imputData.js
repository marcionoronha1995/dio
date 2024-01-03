const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (userInput) => {
  console.log(`User input: ${userInput}`);
  rl.close();
});