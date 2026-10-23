class CuentaBancaria {
    #saldo;

    constructor(titular, saldoInicial = 0) {
        if (!titular || typeof titular !== "string") {
            throw new Error("Titular inválido");
        }

        if (!Number.isFinite(saldoInicial) || saldoInicial < 0) {
            throw new Error("Saldo inicial inválido");
        }

        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo;
    }

    consignar(valor) {
        if (!Number.isFinite(valor) || valor <= 0) {
            throw new Error("El valor debe ser positivo");
        }

        this.#saldo += valor;
    }

    retirar(valor) {
        if (!Number.isFinite(valor) || valor <= 0) {
            throw new Error("El retiro debe ser positivo");
        }

        if (valor > this.#saldo) {
            throw new Error("Saldo insuficiente");
        }

        this.#saldo -= valor;
    }
}

const cuenta = new CuentaBancaria("Ana", 100000);

cuenta.consignar(50000);
cuenta.retirar(25000);

console.log("Titular:", cuenta.titular);
console.log("Saldo final:", cuenta.saldo);

try {
    cuenta.retirar(500000);
} catch (error) {
    console.log("Error controlado:", error.message);
}