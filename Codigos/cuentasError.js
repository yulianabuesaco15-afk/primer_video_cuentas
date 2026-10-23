class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    consignar(valor) {
        this.saldo = valor;
    }

    retirar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
}

let cuenta = new CuentaBancaria("Ana", 100000);
cuenta.consignar(50000);

console.log("Saldo:", cuenta.saldo);