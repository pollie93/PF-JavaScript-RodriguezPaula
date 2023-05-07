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

const esenciaAzulStorage = localStorage.getItem('esenciaAzul');
if (esenciaAzulStorage !== null) {
    const esenciaAzulRecuperada = parseInt(esenciaAzulStorage, 10);
    esenciaAzul = esenciaAzulRecuperada;
} else {
    console.log('No hay cantidad de esencia azul guardada en el localStorage');
};

const esenciaActual = document.getElementById("esenciaActual");

const mostrarEnDomEsenciaRestante = () => {
    const esenciaRestante = localStorage.getItem('esenciaAzul');
    if (esenciaRestante !== null) {
        esenciaActual.innerHTML += `
            <p class="descripcion-champ" style="color: darkblue;">Esencia azul restante: ${esenciaRestante}</p>
        `;
    }
};

const mostrarEnDom = () => esenciaActual.innerHTML  +=
    `
        <p class="descripcion-champ" style="color: darkblue;">Esencia azul disponible: ${esenciaAzul}</p>
    `

const mostrarError = () => esenciaActual.innerHTML += ` 
    <p class="descripcion-champ" id="error" style="color: red;">No tienes suficiente esencia azul!</p>
`
mostrarEnDom();

const limpiarDom = () => esenciaActual.innerHTML =  ``

let championsEnCarrito = []; 

const addToCart = (champion) => {
    if ((esenciaAzul - champion.championCost) < 0) {
        const hayError = document.getElementById("error");
        if (!hayError) return mostrarError();
        return;
    };
    esenciaAzul -= champion.championCost
    limpiarDom()
    mostrarEnDom()
    championsEnCarrito.push(champion);
    localStorage.setItem('championsEnCarrito', JSON.stringify(championsEnCarrito));
    localStorage.setItem('esenciaAzul', esenciaAzul.toString());
    limpiarDom()
    mostrarEnDomEsenciaRestante()
};

champsArray.forEach((champion) => {
    const champButton = document.getElementById(champion.id);
    champButton.addEventListener("click", () => {
        addToCart(champion);
    })
});

const resetContainerButton = document.getElementById("btnReset");
resetContainerButton.addEventListener("click", () => {
    localStorage.clear();
    esenciaAzul = 10050;
    limpiarDom();
    mostrarEnDom();
    championsEnCarrito = [];
});


/* ---LLamado a la API--- */
const ciudad = 'Buenos Aires'; 
const pais = 'Argentina'; 

const btnConsultar = document.getElementById('btnConsultar');

const consultarClimaApi = async () => {
    const appId = 'cca4101ea4deeaf1a8df8b41cd61b44a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    const resultadoDiv = document.getElementById('resultado');

    try {
      resultadoDiv.innerHTML = `<p>Consultando clima para: ${ciudad}, ${pais}</p>`;

      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      resultadoDiv.innerHTML += `
        <p>Temperatura: ${datos.main.temp} K</p>
        <p>Humedad: ${datos.main.humidity}%</p>
      `;
    } catch (error) {
      console.error(error);
      resultadoDiv.innerHTML = '<p>Error al consultar el clima.</p>';
    }
};

btnConsultar.addEventListener('click', async () => await consultarClimaApi());