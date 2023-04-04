const champsArray = [
    {
        championName: "Ahri",
        championType: "Asesino y mago",
        championCost: 3150
    },
    {
        championName: "Caitlyn",
        championType: "Tirador",
        championCost: 450
    },
    {
        championName: "Camille",
        championType: "Luchador y Tanque",
        championCost: 4800
    },
    {
        championName: "Aatrox",
        championType: "Luchador y Tanque",
        championCost: 4800
    },
    {
        championName: "Jhin",
        championType: "Tirador y Mago",
        championCost: 4444
    },
    {
        championName: "Akshan",
        championType: "Tirador y Asesino",
        championCost: 4800
    },
    {
        championName: "Diana",
        championType: "Luchador y Mago",
        championCost: 450
    },
    {
        championName: "Ekko",
        championType: "Asesino y Luchador",
        championCost: 3150
    },
    {
        championName: "Gwen",
        championType: "Asesino y Luchador",
        championCost: 4800
    },
    {
        championName: "Heimerdinger",
        championType: "Mago y Apoyo",
        championCost: 3150
    },
    {
        championName: "Jayce",
        championType: "Tirador y Luchador",
        championCost: 4800
    },
    {
        championName: "Leona",
        championType: "Apoyo y Tanque",
        championCost: 450
    },
    {
        championName: "Lux",
        championType: "Apoyo y Mago",
        championCost: 450
    },
    {
        championName: "Nami",
        championType: "Mago y Apoyo",
        championCost: 3150
    },
    {
        championName: "Singed",
        championType: "Luchador y Tanque",
        championCost: 4800
    },
    {
        championName: "Swain",
        championType: "Luchador y Mago",
        championCost: 3150
    },
    {
        championName: "Vi",
        championType: "Asesino y Luchador",
        championCost: 1350
    },
    {
        championName: "Warwick",
        championType: "Luchador y Tanque",
        championCost: 450
    },
    {
        championName: "Yuumi",
        championType: "Mago y Apoyo",
        championCost: 450
    },
    {
        championName: "Yasuo",
        championType: "Asesino y Luchador",
        championCost: 1350
    }
]

let alertEsenciaAzul = alert("Cantidad de esencia azul disponible para comprar 10050");
let esenciaAzul = 10050;
let campeonAComprar = prompt("Ingrese el nombre del campeon que quiera comprar ó escriba salir").toLowerCase()


const nuevaCantidadEsenciaAzul = (primeraCantidad, segundaCantidad) => {
    return primeraCantidad - segundaCantidad;
};

const calcularCompraChampion = (costoChampion, championName, championType) => {
    const nuevoCosto = nuevaCantidadEsenciaAzul(esenciaAzul, costoChampion);

    if (nuevoCosto >= 0) {
        esenciaAzul = nuevoCosto
        alert(`¡Compraste a ${championName}, que es ${championType}, y te restan ${esenciaAzul} de esencia azul`);
    }
    else if (nuevoCosto < 0) {
        alert(`No tenes suficiente esencia azul para comprar a ${championName}, te restan ${esenciaAzul} de esencia azul`);
    }
    else {
        alert(`No podes comprar a ${championName}, te restan ${esenciaAzul} de esencia azul`);
    }
}

while(campeonAComprar !=="salir") {
    switch (campeonAComprar) {
        case "ahri":
            const buyChampionAhri = champsArray.find((champion) => champion.championName.toLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionAhri.championCost, buyChampionAhri.championName, buyChampionAhri.championType)
            break;
        case "caitlyn":
            const buyChampionCaitlyn= champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionCaitlyn.championCost, buyChampionCaitlyn.championName, buyChampionCaitlyn.championType);
            break;
        case "camille":
           const buyChampionCamille = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionCamille.championCost, buyChampionCamille.championName, buyChampionCamille.championType);
            break;
        case "aatrox":
            const buyChampionAatrox = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionAatrox.championCost, buyChampionAatrox.championName, buyChampionAatrox.championType);
            break;
        case "jhin":
            const buyChampionJhin = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionJhin.championCost, buyChampionJhin.championName, buyChampionJhin.championType);     
            break;
        case "akshan":
            const buyChampionAkshan = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionAkshan.championCost, buyChampionAkshan.championName, buyChampionAkshan.championType);
            break;
        case "diana":
            const buyChampionDiana = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionDiana.championCost, buyChampionDiana.championName, buyChampionDiana.championType);
            break;
        case "ekko":
           const buyChampionEkko = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionEkko.championCost, buyChampionEkko.championName, buyChampionEkko.championType);
            break;
        case "gwen":
           const buyChampionGwen = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionGwen.championCost, buyChampionGwen.championName, buyChampionGwen.championType);
            break;
        case "heimerdinger":
            const buyChampionHeimerdinger = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionHeimerdinger.championCost, buyChampionHeimerdinger.championName, buyChampionHeimerdinger.championType);
            break;
        case "jayce":
            const buyChampionJayce = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionJayce.championCost, buyChampionJayce.championName, buyChampionJayce.championType);
            break;
        case "leona":
            const buyChampionLeona = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionLeona.championCost, buyChampionLeona.championName, buyChampionLeona.championType);
            break;
        case "lux":
            const buyChampionLux = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionLux.championCost, buyChampionLux.championName, buyChampionLux.championType);
            break;
        case "nami":
           const buyChampionNami = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionNami.championCost, buyChampionNami.championName, buyChampionNami.championType);
            break;
        case "singed":
            const buyChampionSinged = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionSinged.championCost, buyChampionSinged.championName, buyChampionSinged.championType);
            break;
        case "swain":
            const buyChampionSwain = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionSwain.championCost, buyChampionSwain.championName, buyChampionSwain.championType);
            break;
        case "vi":
            const buyChampionVi = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionVi.championCost, buyChampionVi.championName, buyChampionVi.championType);
            break;
        case "warwick":
            const buyChampionWarwick = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionWarwick.championCost, buyChampionWarwick.championName, buyChampionWarwick.championType);
            break;
        case "yuumi":
            const buyChampionYuumi = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionYuumi.championCost, buyChampionYuumi.championName, buyChampionYuumi.championType);
            break;
        case "yasuo":
           const buyChampionYasuo = champsArray.find((champion) => champion.championName.toLocaleLowerCase() === campeonAComprar)
            calcularCompraChampion(buyChampionYasuo.championCost, buyChampionYasuo.championName, buyChampionYasuo.championType);
            break;   
        default:
            alert("Ingrese un campeón válido")
            break;
    }
    campeonAComprar = prompt("Ingrese el nombre del campeon que quiera comprar ó escriba salir").toLowerCase()
}


