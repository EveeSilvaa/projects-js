
function escrevaMeuNome(nome){
    return ('Seu nome é '+ nome);
}
escrevaMeuNome('Maria');

function verifiqueAMaioridade(idade){
    if (idade >= 18){
        console.log (escrevaMeuNome('Maria') + ' e você é maior de idade');
    }
    else{
        console.log (escrevaMeuNome('Maria') + 'e você é menor de idade');
    }
}

verifiqueAMaioridade(19);