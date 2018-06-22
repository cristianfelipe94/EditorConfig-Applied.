const numero1 = prompt('Ingrese numero 1.');
const numero2 = prompt('Ingrese numero 2.');


const maxnum1 = parseFloat(numero1);
const maxnum2 = parseFloat(numero2);


function max(maxnum1, maxnum2) {
    if (isNaN(maxnum1) || isNaN(maxnum2)) {
        return `Ingrese valor numerico`;

    } else if (maxnum1 > maxnum2) {
        return `${maxnum1} es mayor que ${maxnum2}`;

    } else if (maxnum1 < maxnum2) {
        return `${maxnum2} es mayor que ${maxnum1}`;

    } else if (maxnum1 = maxnum2) {
        return `${maxnum1} es igual que ${maxnum2}`;

    } else {
        return numero;
    }
}


let arreglo = [maxnum1, maxnum2];
console.log(max(arreglo[0], arreglo[1]))