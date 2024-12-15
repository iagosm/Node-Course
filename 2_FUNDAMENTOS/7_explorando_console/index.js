// mais de um valor

const x = 10;
const y = "Algum texto";
const z = [1, 2];

console.log(x, z, y)

// Contagem de impressões
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`);

// variavel entre string
console.log("o nome é %s, ele é programador", y)

//limpar o console
setTimeout(() => {
  console.clear()
}, 2000);