console.log("Vamos verificar seu IMC");


function calcularIMC(peso, altura){
    return (peso/(altura * altura));
}

function classificarIMC(IMC){
    if(IMC < 18.5){
        return ("Você está abaixo do peso.");
    } else if(IMC >= 18.5 && IMC < 25){
        return ("Você está com o peso normal.");
    } else if(IMC >= 25 && IMC < 30){
        return ("Você está acima do peso.")
    } else if(IMC >= 30 && IMC < 40){
        return ("Você está obeso.");
    } else{
        return ("Você está com obesidade grave.");
    }
}

function main(){
    const altura = 1.65;
    const peso = 60.9;
    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC));
}

main();