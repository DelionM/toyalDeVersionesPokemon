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

// btnG1.addEventListener("click", () => {
//     const numeroPokemon = Math.floor(Math.random() * (151 - 1)) + 1;
//     PeticionApi(numeroPokemon);
//   });

//   btnG2.addEventListener("click", () => {
//     const numeroPokemon = Math.floor(Math.random() * (250 - 151)) + 151;
//     PeticionApi(numeroPokemon);
//   });

//agragamos la funcion del boton 2
document.addEventListener("DOMContentLoaded", () => {
  const btn2 = document.getElementById("btn2");

  btn2.addEventListener("click", () => {
    const nombrePokemon = entrada.value;
    //agrego la funcion de checar
    PeticionApiNombre(nombrePokemon);
  });
});

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
        imagen.style.background = 'url("img/agua.jpg")';
        colorDeOrilla.style.backgroundColor = "blue";
        break;
      case "grass":
        imagen.style.background = 'url("img/agua.jpg")';
        colorDeOrilla.style.backgroundColor = "green";
        break;
      case "electric":
        imagen.style.background = 'url("img/electrico.webp';
        colorDeOrilla.style.backgroundColor = "yellow";
        break;
      case "ice":
        imagen.style.background = 'url("img/hielo.webp")';
        colorDeOrilla.style.backgroundColor = "white";
        break;
      case "fighting":
        imagen.style.background = 'url("img/ataque.webp")';
        colorDeOrilla.style.backgroundColor = "#63B0DA";
        break;
      case "poison":
        imagen.style.background = 'url("img/veneno.webp")';
        colorDeOrilla.style.backgroundColor = "#17AE49";
        break;
      case "Dragon":
        imagen.style.background = 'url("img/dragon.png")';
        colorDeOrilla.style.backgroundColor = "purple";
        break;
      case "Dark":
        imagen.style.background = 'url("img/dark.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "Fairy":
        imagen.style.background = 'url("img/fairy.jpg")';
        colorDeOrilla.style.backgroundColor = "pink";
        break;
      case "steel":
        imagen.style.background = 'url("img/metal.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "Psychic":
        imagen.style.background = 'url("img/psico.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "Bug":
        imagen.style.background = 'url("img/bug.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "Ghost":
        imagen.style.background = 'url("img/fantasma.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "Rock":
        imagen.style.background = 'url("img/Rock - Roca.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
        break;
      case "Ground":
        imagen.style.background = 'url("img/tierra.jpg")';
        colorDeOrilla.style.backgroundColor = "black";
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
          colorDeOrilla.style.backgroundColor = "white";
          break;
        case "fighting":
          imagen.style.background = 'url("img/Lucha.webp")';
          colorDeOrilla.style.backgroundColor = "black";
          break;
        case "poison":
          imagen.style.background = 'url("img/veneno.webp")';
          colorDeOrilla.style.backgroundColor = "#1CC052";
          break;
          case "Flying":
            imagen.style.background = 'url("img/Flying - Volador.jpg")';
            colorDeOrilla.style.backgroundColor = "#1CC052";
            break;
        case "dragon":
          imagen.style.background = 'url("img/Dragón.jpg")';
          colorDeOrilla.style.backgroundColor = "purple";
          break;
        case "dark":
          imagen.style.background = 'url("img/negro.jpg")';
          colorDeOrilla.style.backgroundColor = "black";
          break;
        case "fairy":
          imagen.style.background = 'url("img/magia.jpg")';
          colorDeOrilla.style.backgroundColor = "pink";
          break;
        case "steel":
          imagen.style.background = 'url("img/acero.jpg")';
          colorDeOrilla.style.backgroundColor = "black";
          break;
        case "psychic":
          imagen.style.background = 'url("img/Psychic - Psíquico.jpg")';
          colorDeOrilla.style.backgroundColor = "black";
          break;
        case "bug":
          imagen.style.background = 'url("img/bug.webp")';
          colorDeOrilla.style.backgroundColor = "black";
          break;
        case "ghost":
          imagen.style.background = 'url("img/Ghost - Fantasma.jpg")';
          colorDeOrilla.style.backgroundColor = "purple";
          break;
        case "rock":
          imagen.style.background = 'url("img/Rock - Roca.jpg")';
          colorDeOrilla.style.backgroundColor = "black";
          break;
        case "ground":
          imagen.style.background = 'url("img/tierra.jpg")';
          colorDeOrilla.style.backgroundColor = "black";
          break;
          case "normal":
          imagen.style.background = 'url("img/normal.webp")';
          colorDeOrilla.style.backgroundColor = "yellow";
          break;
        default:
          imagen.style.background = 'url("img/humo.gif")';
          break;
      }


  } catch (error) {
    console.log(error);
  }
};
