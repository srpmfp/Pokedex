

let pokemonRepository = (function () {

    //list of manually uploaded pokemon
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['Grass', 'Poison'] },
        { name: 'Charmander', height: 0.6, types: ['fire'] },
        { name: 'Squirtle', height: 0.5, types: ['Water'] }
    ];

    /////////////List Out Pokemon/////////////// 

    function addListItem(pokemon) {
        // ul pokemon list selector
        let selectedList = document.querySelector('.pokemonSelect');

        // create new list element
        let createLi = document.createElement('li');

        //  create new button element
        let createButton = document.createElement('button')


        // individual list item selector
        let pokeSelect = document.querySelector('.pokemon');

        //adds button to lI
        createButton.addEventListener('click', function (event) {
            let target = event.target;
            return showDetails(pokemon);
        });

        createButton.innerText = pokemon.name;
        createButton.classList.add('pokeButton');
        createLi.appendChild(createButton);



        //adds li to ul
        createLi.classList.add('pokemon');
        selectedList.prepend(createLi);


    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }


    /////////////return all///////////////

    function getAll() {
        return pokemonList;
    }


    ////////////functions call//////////////// 
    return {
        getAll: getAll,
        showDetails: showDetails,
        addListItem: addListItem
    }

})()

function listPokemon(pokemon) {
    pokemonRepository.addListItem(pokemon);
}


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});