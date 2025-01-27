
class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDeViagem (distância, precoCombustivel){
        return distância * this.gastoMedioPorKm * precoCombustivel;
    }
}

const Sandero = new Carro ('Renaut', 'Prata', 1/12);
console.log(Sandero);
console.log('Seu gasto de viagem seria: ' + Sandero.calcularGastoDeViagem (1327.8, 5.48));