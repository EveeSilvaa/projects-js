console.log("Vamos ver quanto você terá que pagar.");

function aplicarDesconto (valor, desconto) {
    return (valor - valor * (desconto / 100));
}

const precoNormal = 120;
const formaPagamento = 4;

if(formaPagamento === 1){
    console.log ("R$"+ (aplicarDesconto(precoNormal, 10)));
} else if(formaPagamento === 2){
    console.log ("R$"+ (aplicarDesconto(precoNormal, 15)));
} else if(formaPagamento === 3){
    console.log ("R$"+ (aplicarDesconto(precoNormal, 0)));
} else{
    console.log ("R$"+ (aplicarJuros(precoNormal, 10)));
}

function aplicarJuros (valor, juros){
    return (valor + valor * (juros / 100));
}


