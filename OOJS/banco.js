class contaBancaria{
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        return this._saldo = valor;
    }


    sacar(valor){
        if (valor <= this._saldo) {
            this._saldo = this._saldo - valor ;   
        }else{
            console.log('Você não tem saldo suficiente!');
        }
        return this._saldo; 
    } 

    depositar(valor){
        this._saldo = this._saldo + valor ;   
        return this._saldo;
    }


};


class contaCorrente extends contaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){

        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        return this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'Poupança';
       
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'Universitaria';
       
    }

    sacar(valor){
        if (valor > 500) {
            console.log('valor nao permitido');
            
        }else{
            this._saldo = this._saldo - valor ;
        }

        return this._saldo;


    }
}