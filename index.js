import {Cliente} from "./Cliente.js";
import {ContaConrrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const Cliente1 = new Cliente("Nacazinho",1111111);

const contaConrrenteRicardo = new ContaConrrente(Cliente1,1001);
contaConrrenteRicardo.depositar(500);
contaConrrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50,Cliente1,1001);

console.log(ContaConrrente.numeroDeContas);

console.log(contaPoupanca)
console.log(contaConrrenteRicardo)


// console.log(valorSacado)
// console.log(contaConrrenteRicardo);
