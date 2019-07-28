// 'use strict'
my_data= []
select_n = 0
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
//interface
const interf = () => {
  return new Promise((resolve, reject) => {
    rl.question('\nWelcome to CRUD app on CLI\n\n 1 - Create user \n 2 - View data \n 3 - Exit \n Select one number: ', (numb) => {
    	select_n = parseInt(numb)
      resolve()
    })
  })
}
//no idea
const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q2 What do you think of Node.js? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}
//create
const create_name = () => {
  return new Promise((resolve, reject) => {
    rl.question('\nWhats your name? ', (name) => {
      console.log(`\nyour name saved: ${name}\n`)
      my_data.push(name)
      resolve()
    })
  })
}
//read
const view_data = () => {
  return new Promise((resolve, reject) => {
    rl.question(`your data name is:  ${my_data}`, (answer) => {
      resolve()
    })
  })
}
const main = async () => {
  // await interf()
  while (select_n >= 0) {
  	await interf()
  	if (select_n === 1) {
  		await create_name()
  		select_n = 0
  	}else if(select_n === 2){
		await view_data()
		select_n =0
  	}else{
  		break
  	}
  }
  rl.close()
}
main()


