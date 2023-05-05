//CODIGO AQUI

let saldo = 15
saldo += 22.40

console.log(saldo)

saldo -= 12.34
console.log(saldo)

saldo /= 2
console.log(saldo)

saldo *= 3.4
console.log(saldo)

saldo %= 3
console.log(saldo)


//----------------------------------------------------------------------------


// EXERCICIO DE FIXAÇÃO

const comparacao = 5 === 5
console.log(comparacao) //true

const comparacao2 = 5 !== 5
console.log(comparacao2) //false


const comparacao3 = 5 !== "5"
console.log(comparacao3) //true

const comparacao4 = "5" === "cinco"
console.log(comparacao4) //false

const comparacao5 = typeof 5 === typeof 20 
console.log(comparacao5) //true


const comparacao6 = typeof "5" === typeof "cinco" 
console.log(comparacao6) //true



//--------------------------------------------------------------------------



const primeiroNumero = 13
const segundoNumero = 13

const verificacao1 = primeiroNumero === segundoNumero
console.log(verificacao1) //true

const verificacao2 = primeiroNumero >= segundoNumero
console.log(verificacao2) //true

const verificacao3 = primeiroNumero < segundoNumero
console.log(verificacao3) //false

const verificacao4 = primeiroNumero > segundoNumero
console.log(verificacao4) //false