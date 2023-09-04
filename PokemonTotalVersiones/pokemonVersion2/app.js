// declaro las variables les asigno el id se su etiqueta de html
let nombre = document.getElementById('nombre');
let idPokemon = document.getElementById('idPokemon');
let imagen = document.getElementById('imagen');
let ataque = document.getElementById('ataque');
let ataque2 = document.getElementById('ataque2');

let tipoPoke = document.getElementById('tipoDePokemon');

document.addEventListener("DOMContentLoaded", () => {
    const numeroPokemon = Math.floor(Math.random() * (151 - 1)) + 1;
    PeticionApi(numeroPokemon)
})

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        const numeroPokemon = Math.floor(Math.random() * (151 - 1)) + 1;
        PeticionApi(numeroPokemon);
    });
});

const PeticionApi = async (id) => {
    try {
        console.log(id)
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        
        console.log( id, 'estos son los datos del poke', data);
        console.log(data.skill);

        const pokemon = {
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            numeroPokemon: data.id,
            nombre: data.name,
            movimientos: data.moves[0].move.name,
            movimientos1: data.moves[1].move.name,
            tipoPokemon:  data.types[0].type.name
        }

        // prueba de ataques en consola
   console.log('De aqui empieza el primero',  pokemon.movimientos);
   console.log(pokemon.movimientos1);
   console.log('tipo de poke', pokemon.tipoPokemon);

       idPokemon.innerText = pokemon.numeroPokemon;
       nombre.innerText = pokemon.nombre;
       imagen.src = pokemon.img;
       ataque.innerText = pokemon.movimientos,
       ataque2.innerText = pokemon.movimientos1,
       tipoPoke.innerHTML = pokemon.tipoPokemon
       
    } catch (error) {
        console.log(error)
    }
}