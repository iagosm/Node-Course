// modulos externos
const inquirer = require("inquirer")
const chalk = require("chalk")

// modulos internos
const fs = require("fs")

// console.log('Iniciamos o Accounts')

operation()

function operation() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'O que você deseja fazer?',
      choices: [
        'Criar Conta',
        'Consultar Saldo',
        'Depositar',
        'Sacar',
        'Sair'
      ]
  },
]).then((answer) => {
  const action = answer['action'];
  console.log(action)
  if(action === 'Criar Conta') {
    createAccount();
  }
}
).catch((err) => console.log(err))
}

// criar conta
function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));
  buildAccount()
}

function buildAccount() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Digite um nome para sua conta:',
    }
  ]).then((answer) => {
    const accountName = answer['accountName']
    console.info(accountName)
    if(!fs.existsSync('accounts')) {
      fs.mkdirSync('accounts')
    }
    
  }).catch((err) => {console.log(err)})
}