
class Pessoa{
    nome;
    peso;
    altura;
    
    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC (){
        return this.peso/(this.altura * this.altura)
    }
    classificarIMC(){
        const imc = this.calcularIMC();
        if(imc < 18.5){
            return ("Você está abaixo do peso.");
        } else if(imc >= 18.5 && imc < 25){
            return ("Você está com o peso normal.");
        } else if(imc >= 25 && imc < 30){
            return ("Você está acima do peso.");
        } else if(imc >= 30 && imc < 40){
            return ("Você está obeso.");
        } else{
            return ("Você está com obesidade grave.");
        
    }
}
}

const jose = new Pessoa ('José', 70, 1.75);
console.log(jose);
console.log('Seu IMC é: ' + jose.calcularIMC());
console.log('Sua classificação de IMC é: '+ jose.classificarIMC());
const Maria = new Pessoa ('Maria', 60.5, 1.65);
console.log(Maria);
console.log('Seu IMC é: ' + Maria.calcularIMC());
console.log('Sua classificação de IMC é: ' + Maria.classificarIMC());
