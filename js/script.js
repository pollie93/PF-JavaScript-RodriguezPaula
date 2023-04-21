const champsArray = [
    {
        championName: "Ahri",
        championType: "Asesino y mago",
        championCost: 3150,
        id: "comprarAhri",
    },
    {
        championName: "Caitlyn",
        championType: "Tirador",
        championCost: 450,
        id: "comprarCaitlyn",
    },
    {
        championName: "Camille",
        championType: "Luchador y Tanque",
        championCost: 4800,
        id: "comprarCamille",
    },
    {
        championName: "Aatrox",
        championType: "Luchador y Tanque",
        championCost: 4800,
        id: "comprarAatrox",
    },
    {
        championName: "Jhin",
        championType: "Tirador y Mago",
        championCost: 4444,
        id: "comprarJhin",
    },
    {
        championName: "Akshan",
        championType: "Tirador y Asesino",
        championCost: 4800,
        id: "comprarAkshan",
    },
    {
        championName: "Diana",
        championType: "Luchador y Mago",
        championCost: 450,
        id: "comprarDiana",
    },
    {
        championName: "Ekko",
        championType: "Asesino y Luchador",
        championCost: 3150,
        id: "comprarEkko",

    },
    {
        championName: "Gwen",
        championType: "Asesino y Luchador",
        championCost: 4800,
        id: "comprarGwen",
    },
    {
        championName: "Heimerdinger",
        championType: "Mago y Apoyo",
        championCost: 3150,
        id: "comprarHeimerdinger",
    },
    {
        championName: "Jayce",
        championType: "Tirador y Luchador",
        championCost: 4800,
        id: "comprarJayce",
    },
    {
        championName: "Leona",
        championType: "Apoyo y Tanque",
        championCost: 450,
        id: "comprarLeona",
    },
    {
        championName: "Lux",
        championType: "Apoyo y Mago",
        championCost: 450,
        id: "comprarLux",
    },
    {
        championName: "Nami",
        championType: "Mago y Apoyo",
        championCost: 3150,
        id: "comprarNami",
    },
    {
        championName: "Singed",
        championType: "Luchador y Tanque",
        championCost: 4800,
        id: "comprarSinged",
    },
    {
        championName: "Swain",
        championType: "Luchador y Mago",
        championCost: 3150,
        id: "comprarSwain",
    },
    {
        championName: "Vi",
        championType: "Asesino y Luchador",
        championCost: 1350,
        id: "comprarVi",
    },
    {
        championName: "Warwick",
        championType: "Luchador y Tanque",
        championCost: 450,
        id: "comprarWarwick",
    },
    {
        championName: "Yuumi",
        championType: "Mago y Apoyo",
        championCost: 450,
        id: "comprarYuumi",
    },
    {
        championName: "Yasuo",
        championType: "Asesino y Luchador",
        championCost: 1350,
        id: "comprarYasuo"
    }
]

let esenciaAzul = 10050;

const esenciaActual = document.getElementById("esenciaActual");
const mostrarEnDom = () => esenciaActual.innerHTML  +=
    `
        <p class="descripcion-champ" style="color: darkblue;">Esencia azul disponible: ${esenciaAzul}</p>
    `

const mostrarError = () => esenciaActual.innerHTML += ` 
    <p class="descripcion-champ" id="error" style="color: red;">No tienes suficiente esencia azul!</p>
`

mostrarEnDom();

const limpiarDom = () => esenciaActual.innerHTML =  ``

const championsEnCarrito = [];

const addToCart = (champion) => {
    if (esenciaAzul - champion.championCost < 0) {
        const hayError = document.getElementById("error");
        if (!hayError) return mostrarError();
        return;
    };
    esenciaAzul -= champion.championCost
    limpiarDom()
    mostrarEnDom()
    championsEnCarrito.push(champion);
}

champsArray.forEach((champion) => {
    const champButton = document.getElementById(champion.id);
    champButton.addEventListener("click", () => {
        addToCart(champion);
        console.log(championsEnCarrito)
    })
})
