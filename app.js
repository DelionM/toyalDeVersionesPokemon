// declaro las variables les asigno el id se su etiqueta de html
let nombre = document.getElementById("nombre");
let idPokemon = document.getElementById("idPokemon");
let imagen = document.getElementById("imagen");
let ataque = document.getElementById("ataque");
let ataque2 = document.getElementById("ataque2");
//entrada de datos
let entrada = document.getElementById("entrada");
let tipoPoke = document.getElementById("tipoDePokemon");
let colorDeOrilla = document.querySelector(".container-card2");

document.addEventListener("DOMContentLoaded", () => {
  const numeroPokemon = Math.floor(Math.random() * (151 - 1)) + 1;
  PeticionApi(numeroPokemon);
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const numeroPokemon = Math.floor(Math.random() * (1020 - 1)) + 1;
    PeticionApi(numeroPokemon);
  });
});

btnG1.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (151 - 1)) + 1;
  PeticionApi(numeroPokemon);
});

btnG2.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (250 - 151)) + 151;
  PeticionApi(numeroPokemon);
});

btnG3.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (386 - 250)) + 250;
  PeticionApi(numeroPokemon);
});

btnG4.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (493 - 386)) + 386;
  PeticionApi(numeroPokemon);
});

btnG5.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (649 - 493)) + 493;
  PeticionApi(numeroPokemon);
});

btnG6.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (721 - 649)) + 649;
  PeticionApi(numeroPokemon);
});

btnG7.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (809 - 721)) + 721;
  PeticionApi(numeroPokemon);
});

btnG8.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (905 - 809)) + 809;
  PeticionApi(numeroPokemon);
});

btnG9.addEventListener("click", () => {
  const numeroPokemon = Math.floor(Math.random() * (1020 - 905)) + 905;
  PeticionApi(numeroPokemon);
});

//agragamos la funcion del boton 2
document.addEventListener("DOMContentLoaded", () => {
  const btn2 = document.getElementById("btn2");

  btn2.addEventListener("click", () => {
    const nombrePokemon = entrada.value;
    //agrego la funcion de checar
    PeticionApiNombre(nombrePokemon);
  });
});


function toggleMenu() {
  const menu = document.querySelector('.menu');
  const content = document.querySelector('.content');
  if (menu.style.left === '-250px') {
      menu.style.left = '0';
      content.style.marginLeft = '250px';
  } else {
      menu.style.left = '-250px';
      content.style.marginLeft = '0';
  }
}

const PeticionApiNombre = async (nombrePokemon) => {
  try {
    console.log(nombrePokemon);

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    );
    const data = await res.json();

    console.log(nombrePokemon, "estos son datos del poke", data);
    console.log(data.skill);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      numeroPokemon: data.id,
      nombre: data.name,
      movimientos: data.moves[0].move.name,
      movimientos1: data.moves[1].move.name,
      tipoPokemon: data.types[0].type.name,
    };

    idPokemon.innerText = pokemon.numeroPokemon;
    nombre.innerText = pokemon.nombre;
    imagen.src = pokemon.img;
    (ataque.innerText = pokemon.movimientos),
      (ataque2.innerText = pokemon.movimientos1),
      (tipoPoke.innerHTML = pokemon.tipoPokemon);

    switch (pokemon.tipoPokemon) {
      case "fire":
        imagen.style.background = 'url("img/fire.jpg")'; // Cambia 'img/agua.webp' por la nueva ruta de la imagen de fondo
        colorDeOrilla.style.backgroundColor = "red"; // Cambia 'red' al color que desees
        break;
      case "water":
        imagen.style.background = 'url("img/agua.webp")';
        colorDeOrilla.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen.style.background = 'url("img/planta.webp")';
        colorDeOrilla.style.backgroundColor = "green";
        break;
      case "electric":
        imagen.style.background = 'url("img/electrico.webp")';
        colorDeOrilla.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen.style.background = 'url("img/hielo.webp")';
        colorDeOrilla.style.backgroundColor = "#02779e";
        break;
      case "fighting":
        imagen.style.background = 'url("img/Lucha.webp")';
        colorDeOrilla.style.backgroundColor = "#FE8383";
        break;
      case "poison":
        imagen.style.background = 'url("img/veneno.webp")';
        colorDeOrilla.style.backgroundColor = "#1CC052";
        break;
      case "Flying":
        imagen.style.background = 'url("img/cielo.webp")';
        colorDeOrilla.style.backgroundColor = "#1CC052";
        break;
      case "dragon":
        imagen.style.background = 'url("img/Dragón.jpg")';
        colorDeOrilla.style.backgroundColor = "purple";
        break;
      case "dark":
        imagen.style.background = 'url("img/dark.jpg")';
        colorDeOrilla.style.backgroundColor = "#29768E";
        break;
      case "fairy":
        imagen.style.background = 'url("img/magia.jpg")';
        colorDeOrilla.style.backgroundColor = "#9061c2";
        break;
      case "steel":
        imagen.style.background = 'url("img/acero.jpg")';
        colorDeOrilla.style.backgroundColor = "#8d9c9d";
        break;
      case "psychic":
        imagen.style.background = 'url("img/Psychic - Psíquico.jpg")';
        colorDeOrilla.style.backgroundColor = "#849112";
        break;
      case "bug":
        imagen.style.background = 'url("img/bug.webp")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "ghost":
        imagen.style.background = 'url("img/Ghost - Fantasma.jpg")';
        colorDeOrilla.style.backgroundColor = "#306CBD";
        break;
      case "rock":
        imagen.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "ground":
        imagen.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla.style.backgroundColor = "#c3b68c";
        break;
      case "normal":
        imagen.style.background = 'url("img/normal.jpg")';
        colorDeOrilla.style.backgroundColor = "#9A4E00";
        break;
      default:
        imagen.style.background = 'url("img/humo.gif")';
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

const PeticionApi = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(id, "estos son los datos del poke", data);
    console.log(data.skill);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      numeroPokemon: data.id,
      nombre: data.name,
      movimientos: data.moves[0].move.name,
      movimientos1: data.moves[1].move.name,
      tipoPokemon: data.types[0].type.name,
    };
    idPokemon.innerText = pokemon.numeroPokemon;
    nombre.innerText = pokemon.nombre;
    imagen.src = pokemon.img;
    (ataque.innerText = pokemon.movimientos),
      (ataque2.innerText = pokemon.movimientos1),
      (tipoPoke.innerHTML = pokemon.tipoPokemon);

    switch (pokemon.tipoPokemon) {
      case "fire":
        imagen.style.background = 'url("img/fire.jpg")'; // Cambia 'img/agua.webp' por la nueva ruta de la imagen de fondo
        colorDeOrilla.style.backgroundColor = "red"; // Cambia 'red' al color que desees
        break;
      case "water":
        imagen.style.background = 'url("img/agua.webp")';
        colorDeOrilla.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen.style.background = 'url("img/planta.webp")';
        colorDeOrilla.style.backgroundColor = "green";
        break;
      case "electric":
        imagen.style.background = 'url("img/electrico.webp")';
        colorDeOrilla.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen.style.background = 'url("img/hielo.webp")';
        colorDeOrilla.style.backgroundColor = "#02779e";
        break;
      case "fighting":
        imagen.style.background = 'url("img/Lucha.webp")';
        colorDeOrilla.style.backgroundColor = "#FE8383";
        break;
      case "poison":
        imagen.style.background = 'url("img/veneno.webp")';
        colorDeOrilla.style.backgroundColor = "#1CC052";
        break;
      case "Flying":
        imagen.style.background = 'url("img/cielo.webp")';
        colorDeOrilla.style.backgroundColor = "#1CC052";
        break;
      case "dragon":
        imagen.style.background = 'url("img/Dragón.jpg")';
        colorDeOrilla.style.backgroundColor = "purple";
        break;
      case "dark":
        imagen.style.background = 'url("img/dark.jpg")';
        colorDeOrilla.style.backgroundColor = "#29768E";
        break;
      case "fairy":
        imagen.style.background = 'url("img/magia.jpg")';
        colorDeOrilla.style.backgroundColor = "#9061c2";
        break;
      case "steel":
        imagen.style.background = 'url("img/acero.jpg")';
        colorDeOrilla.style.backgroundColor = "#8d9c9d";
        break;
      case "psychic":
        imagen.style.background = 'url("img/Psychic - Psíquico.jpg")';
        colorDeOrilla.style.backgroundColor = "#849112";
        break;
      case "bug":
        imagen.style.background = 'url("img/bug.webp")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "ghost":
        imagen.style.background = 'url("img/Ghost - Fantasma.jpg")';
        colorDeOrilla.style.backgroundColor = "#306CBD";
        break;
      case "rock":
        imagen.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "ground":
        imagen.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla.style.backgroundColor = "#c3b68c";
        break;
      case "normal":
        imagen.style.background = 'url("img/normal.jpg")';
        colorDeOrilla.style.backgroundColor = "#9A4E00";
        break;
      default:
        imagen.style.background = 'url("img/humo.gif")';
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
