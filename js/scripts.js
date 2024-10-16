const bulbasaur = { name: 'Bulbasaur', height: 0.7, types: ['Grass', 'Poison'] };
const charmander = { name: 'Charmander', height: 0.6, types: ['fire'] };
const squirtle = { name: 'Squirtle', height: 0.5, types: ['Water'] };
const pokemonList = [bulbasaur, charmander, squirtle];

//listing out the name and height of the pokemon in the pokemonList 
for (let i = 0; i < pokemonList.length; i++){
    var x;
    
    if (pokemonList[i].height > 0.5 && pokemonList[i].height < 0.7) {
        document.write("<br>" + pokemonList[i].name + " (Height " + pokemonList[i].height + ")");
    }
    else if (pokemonList[i].height <= 0.5) {
        document.write("<br> " + pokemonList[i].name + " (Height " + pokemonList[i].height + "). ");
    }
    else if (pokemonList[i].height > 0.6) {
        document.write(" " + pokemonList[i].name + " (Height " + pokemonList[i].height + ")-Wow, you are so big!!");
    }

}

