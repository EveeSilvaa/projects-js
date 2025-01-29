
let nota1 = 2.2;
let nota2 = 6.7;
let nota3 = 7;
const media = ((nota1 + nota2 + nota3)/3);

const aprovado = (media >= 7);
const recuperacao = (7 > media >= 5);
const reprovado = (media < 5);


if(aprovado){
    console.log("Parabéns, você foi aprovado!");
}  else if (recuperacao) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você ficou reprovado :(");
}