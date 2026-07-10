//6.	Crea una clase CuentaBancaria con: 
//	atributo privado saldo 
//	método para depositar dinero 
//	método para retirar dinero validando que no quede en negativo 


class CuentaBancaria { 
    private saldo: number;

    constructor() {
        this.saldo = 0;
    }

    depositar(monto: number) {
        this.saldo += monto;
    }

    retirar(monto: number) {
        if (this.saldo - monto >= 0) {
            this.saldo -= monto;
        } else {
            console.log("No hay suficiente dinero");
        }
    }

    verSaldo() {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria()
cuenta.depositar(100)
cuenta.retirar(30)
console.log(cuenta.verSaldo())
