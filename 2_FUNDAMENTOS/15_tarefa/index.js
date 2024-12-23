// receber o nome e idade do usuario
//; Apresente esta resposta com uma cor de fundo aamarelha e texto preto bgYello e bLACK
// inseiratramtamente para possivel erro com o catch

const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer.prompt([
  {name: 'nome', message: 'Qual o seu nome?'},
  {name: 'idade', message: 'Qual a sua idade?'}
])
.then((answers) => {
  if(!answers.nome || !answers.idade) {
    throw new Error("O nome ou idade não foram enviados")
  }
const response = `o nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`
console.log(chalk.bgYellow.black(response))
}).catch((err) => console.log(err))