let alertEsenciaAzul = alert("Cantidad de esencia azul disponible para comprar 10050");
let esenciaAzul = 10050;
let campeonAComprar = prompt("Ingrese el nombre del campeon que quiera comprar ó escriba salir").toLowerCase()


const nuevaCantidadEsenciaAzul = (primeraCantidad, segundaCantidad) => {
    return primeraCantidad - segundaCantidad;
};

const calcularCompraChampion = (costoChampion, champion) => {
    const nuevoCosto = nuevaCantidadEsenciaAzul(esenciaAzul, costoChampion);

    if (nuevoCosto >= 0) {
        esenciaAzul = nuevoCosto
        alert(`¡Compraste a ${champion}, te restan ${esenciaAzul} de esencia azul`);
    }
    else if (nuevoCosto < 0) {
        alert(`No tenes suficiente esencia azul para comprar a ${champion}, te restan ${esenciaAzul} de esencia azul`);
    }
    else {
        alert(`No podes comprar a ${champion}, te restan ${esenciaAzul} de esencia azul`);
    }
}

while(campeonAComprar !=="salir") {
    switch(campeonAComprar) {
        case "ahri":
            const costoAhri = 3150;
            calcularCompraChampion(costoAhri, "ahri");
            break;
        case "caitlyn":
            const costoCaitylyn = 450;
            calcularCompraChampion(costoCaitylyn, "caitlyn");
            break;
        case "camille":
            const costoCamille = 4800;
            calcularCompraChampion(costoCamille, "camille");
            break;
        case "aatrox":
            const costoAatrox = 4800;
            calcularCompraChampion(costoAatrox, "aatrox");
            break;
        case "jhin":
            const costoJhin = 4444;
            calcularCompraChampion(costoJhin, "jhin");     
            break;
        case "akshan":
            const costoAkshan = 4800;
            calcularCompraChampion(costoAkshan, "akshan");
            break;
        case "diana":
            const costoDiana = 450;
            calcularCompraChampion(costoDiana, "diana");
            break;
        case "ekko":
            const costoEkko = 3150;
            calcularCompraChampion(costoEkko, "ekko");
            break;
        case "gwen":
            const costoGwen = 4800;
            calcularCompraChampion(costoGwen, "gwen");
            break;
        case "heimerdinger":
            const costoHeimerdinger = 3150;
            calcularCompraChampion(costoHeimerdinger, "heimerdinger");
            break;
        case "jayce":
            const costoJayce = 4800;
            calcularCompraChampion(costoJayce, "jayce");
            break;
        case "leona":
            const costoLeona = 450;
            calcularCompraChampion(costoLeona, "leona");
            break;
        case "lux":
            const costoLux = 450;
            calcularCompraChampion(costoLux, "lux");
            break;
        case "nami":
            const costoNami = 3150;
            calcularCompraChampion(costoNami, "nami");
            break;
        case "singed":
            const costoSinged = 4800;
            calcularCompraChampion(costoSinged, "singed");
            break;
        case "swain":
            const costoSwain = 3150;
            calcularCompraChampion(costoSwain, "swain");
            break;
        case "vi":
            const costoVi = 1350;
            calcularCompraChampion(costoVi, "vi");
            break;
        case "warwick":
            const costoWarwick = 450;
            calcularCompraChampion(costoWarwick, "warwick");
            break;
        case "yuumi":
            const costoYuumi = 450;
            calcularCompraChampion(costoYuumi, "yuumi");
            break;
        case "yasuo":
            const costoYasuo = 1350;
            calcularCompraChampion(costoYasuo, "yasuo");
            break;   
        default:
            alert("Ingrese un campeón válido")
            break;
    }
    campeonAComprar = prompt("Ingrese el nombre del campeon que quiera comprar ó escriba salir").toLowerCase()
}

