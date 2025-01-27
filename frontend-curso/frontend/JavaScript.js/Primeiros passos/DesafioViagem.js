
console.log("Vamos calcular os gastos da sua viagem.");

const gasolinaValor = 5.78;
const kmLitro = 12.8;
const distancia = 1327.8;
const etanolValor = 5.59;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distancia / kmLitro

if(tipoCombustivel === "Etanol"){
    const gastoTotal = litrosConsumidos * etanolValor;
    console.log("R$"+ gastoTotal.toFixed(2));
} else {
    const gastoTotal = litrosConsumidos * gasolinaValor;
    console.log("R$"+ gastoTotal(2));
}
