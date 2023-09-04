// declaro las variables les asigno el id se su etiqueta de html
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');

document.addEventListener("DOMContentLoaded", () => {
        const numeroPokemon = Math.floor(Math.random() * (151 - 1)) + 1;
        PeticionApi(numeroPokemon);
});
const PeticionApi = async (id) => {
    try {
        console.log(id)
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        
        console.log(data);
        console.log(data.name);

        const pokemon = {
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            nombre: data.name,
        }
   
       nombre.innerText = pokemon.nombre;
       imagen.src = pokemon.img;
       
    } catch (error) {
        console.log(error)
    }
}