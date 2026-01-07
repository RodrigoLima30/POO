class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
      return;
    }

    this.saldo -= valor;
  }
}

const contaRodrigo = new ContaBancaria("Rodrigo", 1000);
const contaMaria = new ContaBancaria("Maria", 500);

contaRodrigo.depositar(200);
contaMaria.sacar(100);

console.log(contaRodrigo);
console.log(contaMaria);
