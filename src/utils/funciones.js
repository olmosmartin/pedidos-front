
export const descuento = (precio, porcentaje)=>{
    let desc = (porcentaje * precio)/100;
    return precio - desc;
}