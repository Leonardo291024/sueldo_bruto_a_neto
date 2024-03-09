const inputSueldoBruto = document.getElementById('inputSueldoBruto');

const spanSueldoBruto = document.getElementById('spanSueldoBruto');
const spanlimiteInferior = document.getElementById('spanLimiteInferior');
const spanExcedenteLimiteInferior = document.getElementById('spanExcedenteLimiteInferior');
const spanPorcentajeLimiteInferior = document.getElementById('spanPorcentajeLimiteInferior');
const spanImpuestoMarginal = document.getElementById('spanImpuestoMarginal');
const spanCuotaFija = document.getElementById('spanCuotaFija');
const spanISRDeterminado = document.getElementById('spanISRDeterminado');
const spanISRARetener = document.getElementById('spanISRARetener');
const spanSueldoNeto = document.getElementById('spanSueldoNeto');

const btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', calculaElSueldoNeto);

function calculaElSueldoNeto(){
    const sueldoBruto = Number(inputSueldoBruto.value);

    if(!sueldoBruto){
        alert("Digita el sueldo bruto");
        return;
    }

    if(sueldoBruto <  7467.90){
        alert("El sueldo bruto no puede ser inferior al salario mínimo de $7,467.90 MXN para el período mensual.");
        return;
    }

    spanSueldoBruto.innerText = sueldoBruto;
    spanlimiteInferior.innerText = calculos.obtenerLimiteInferior(sueldoBruto);
    spanExcedenteLimiteInferior.innerText = calculos.excedenteLimiteInferior(sueldoBruto).toFixed(2);
    spanPorcentajeLimiteInferior.innerText = calculos.porcentajeLimiteInferior(sueldoBruto) + "%";
    spanImpuestoMarginal.innerText = calculos.impuestoMarginal(sueldoBruto).toFixed(2);
    spanCuotaFija.innerText = calculos.obtenerCuotaFija(sueldoBruto);
    spanISRDeterminado.innerText = calculos.abonoAlSat(sueldoBruto).toFixed(2);
    const isrRetenido = calculos.abonoAlSat(sueldoBruto);
    spanISRARetener.innerText = isrRetenido.toFixed(2);

    const sueldoNeto = sueldoBruto - isrRetenido;
    spanSueldoNeto.innerText = sueldoNeto.toFixed(2);

}