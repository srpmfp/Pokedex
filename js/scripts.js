const bulbasaur = { name: 'Bulbasaur', height: 0.7, types: ['Grass', 'Poison'] };
const charmander = { name: 'Charmander', height: 0.6, types: ['fire'] };
const squirtle = { name: 'Squirtle', height: 0.5, types: ['Water'] };
const pokemonList = [bulbasaur, charmander, squirtle];

//listing out the name and height of the pokemon in the pokemonList 
for (let i = 0; i < pokemonList.length; i++){
    
    // heights greater than .5 less than .7
    if (pokemonList[i].height > 0.5 && pokemonList[i].height < 0.7) {
        document.write("<br>" + pokemonList[i].name + " (Height " + pokemonList[i].height + ")");
    }
    // heights less than or equal to .5
    else if (pokemonList[i].height <= 0.5) {
        document.write("<br> " + pokemonList[i].name + " (Height " + pokemonList[i].height + "). ");
    }
    // heights greater than 0.6
    else if (pokemonList[i].height > 0.6) {
        document.write(" " + pokemonList[i].name + " (Height " + pokemonList[i].height + ")-Wow, you are so big!!");
    }

}

