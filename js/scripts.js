

 let pokemonRepository = (function () {
    
     //list of manually uploaded pokemon
    let pokemonList = [
         { name: 'Bulbasaur', height: 0.7, types: ['Grass', 'Poison'] },
         { name: 'Charmander', height: 0.6, types: ['fire'] },
         { name: 'Squirtle', height: 0.5, types: ['Water'] }
     ];  
    
     //////////////////////////// 
     
     function add(pokemon) {
        pokemonList.push(pokemon);
     }
     
    ////////////////////////////
    
     function getAll() {
        return pokemonList;
     }


    //////////////////////////// 
     return {
         getAll: getAll,
         add: add
     }
     
})()


// 

function listBig(pokemon) {
  
    // heights greater than .5 less than .7
    if (pokemon.height > 0.5 && pokemon.height < 0.7) {
        return document.write("<br>" + pokemon.name + " (Height " + pokemon.height + ")");
    }
    // heights less than or equal to .5
    else if (pokemon.height <= 0.5) {
        return document.write("<br>" + pokemon.name + " (Height " + pokemon.height + ")");
    }
    // heights greater than 0.6
    else if (pokemon.height > 0.6) {
        return document.write(" " + pokemon.name + " (Height " + pokemon.height + ")-Wow, you are so big!!");
    }
}
pokemonRepository.getAll().forEach(listBig);