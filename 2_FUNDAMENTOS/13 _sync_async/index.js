const fs = require(fs)

console.log("Inicio")

fs.writeFile("arquivo.txt", "Olaaa", function(err) {
  setTimeout(function () {
    console.log('criado')
  }, 1000)
});

console.log("Fim")