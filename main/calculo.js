const calculos = {}

const listaLimitesInferiores = Object.keys(tarifas);// DEVUELVE UNA LISTA CON LAS LLAVES DEL OBJETO TARIFAS


console.log(listaLimitesInferiores);

calculos.obtenerLimiteInferior = function obtenerLimiteInferior(sueldoMensual){
    let indice = listaLimitesInferiores.findIndex((limite) => limite >= sueldoMensual);// GUARDA EL PIRMER INDICE QUE ENCUENTRA CON RESPECTO A LA CONDICION QUE PROPONE EL METODO FINDINDEX

    if(indice === 0){
        return listaLimitesInferiores[indice];//DEVUELVE SOLO EL PRIMER ELEMENTO DE LA LISTA
    }
    else if(indice === -1){
        return listaLimitesInferiores[listaLimitesInferiores.length - 1];
    }
    else{
        return listaLimitesInferiores[indice - 1];//DEVUELVE UN ELEMENTO ANTES DEL QUE DEVUELVE ORIGINALMENTE
    }
}

calculos.excedenteLimiteInferior = function excedenteLimiteInferior(sueldoMensual){
    const limiteInferior = calculos.obtenerLimiteInferior(sueldoMensual);//GUARDA EL VALOR DEL LIMITE INFERIOR
    const excedente = sueldoMensual - limiteInferior;//GUARDA EL VALOR EXCEDENTE DEL LIMITE INFERIOR

    return excedente
}

calculos.porcentajeLimiteInferior = function porcentajeLimiteInferior(sueldoMensual){
    const porcentajeInferior = tarifas[calculos.obtenerLimiteInferior(sueldoMensual)].porcentaje;

    return porcentajeInferior;
}

calculos.impuestoMarginal = function impuestoMarginal(sueldoMensual){
    const valorPorcentaje = calculos.porcentajeLimiteInferior(sueldoMensual);
    const valorExcedente = calculos.excedenteLimiteInferior(sueldoMensual);

    const valorImpuestoMarginal = (valorExcedente * valorPorcentaje) / 100;

    return valorImpuestoMarginal;
}

calculos.obtenerCuotaFija = function obtenerCuotaFija(sueldoMensual){
    const cuotaFija = tarifas[calculos.obtenerLimiteInferior(sueldoMensual)].cuota;
    return cuotaFija;
}

calculos.abonoAlSat = function abonoAlSat(sueldoMensual){
    const cuotaFija = tarifas[calculos.obtenerLimiteInferior(sueldoMensual)].cuota;
    const valorMarginal = calculos.impuestoMarginal(sueldoMensual);

    const isrDeterminado = cuotaFija + valorMarginal;

    return isrDeterminado;
    
}

calculos.sueldoNetoMensual = function sueldoNetoMensual(sueldoMensual){
    const isrADetener = calculos.abonoAlSat(sueldoMensual);
    const sueldoNeto = sueldoMensual - isrADetener;

    return sueldoNeto;
}
