

let pokemonRepository = (function () {

    //list of manually uploaded pokemon
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';



    function add(pokemon) {

        pokemonList.push(pokemon);
    }



    function addListItem(pokemon) {
        // ul pokemon list selector
        let selectedList = document.querySelector('.pokemonSelect');

        // create new list element
        let createLi = document.createElement('li');

        //  create new button element
        let createButton = document.createElement('button')



        //adds button to lI
        createButton.addEventListener('click', function () {
            showDetails(pokemon);
        })

        // adds pokemon name to the button
        createButton.innerText = pokemon.name;
        createButton.classList.add('pokeButton');
        //adds button to chart
        createLi.appendChild(createButton);



        //adds li to ul
        createLi.classList.add('pokemon');
        selectedList.prepend(createLi);


    }

    // after selecting button--shows further detail on pokemon
    function showDetails(item) {
        loadDetails(item).then(function () {
            console.log(item);
        });
    }



    /////////////return all///////////////

    function getAll() {
        return pokemonList;
    }

    // API call to get details

    function loadList() {


        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {

                let pokemon = {
                    name: item.name,
                    url: item.url
                };

                add(pokemon);
            });

        }).catch(function (e) {
            console.error(e);

        })
    }
    // callback to get details on specific pokemon

    function loadDetails(item) {


        let url = item.url; // url for that Pokemon's specific information
        return fetch(url).then(function (response) {

            return response.json();

        }).then(function (details) {

            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;


        }).catch(function (e) {

            console.error(e);

        })
    }

    ////////////functions call//////////////// 
    return {

        add: add,
        getAll: getAll,
        showDetails: showDetails,
        addListItem: addListItem,
        loadDetails: loadDetails,
        loadList: loadList

    }

})()


// loads the pokemon into the table
pokemonRepository.loadList().then(function (pokemon) {

    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);

    })
});
