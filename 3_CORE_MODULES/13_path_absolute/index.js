const path = require('path')

//path absoluto
console.log(path.resolve("text.txt"))

//path Dinamico
const midFolder = "relatorios";
const fileName = "iago.txt";
const finalPath = path.join("/", 'arquivos', midFolder, fileName)
console.log(finalPath)