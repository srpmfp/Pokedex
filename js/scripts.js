

let pokemonRepository = (function () {

    //list of manually uploaded pokemon
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    function add(pokemon) {

        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        // ul pokemon list selector
        let selectedList = document.querySelector('#pokemonList');


        // create new list element with BS class
        let createLi = document.createElement('li');
        $(createLi).addClass('list-group-item border-0 bg-secondary ');


        //  create new button element with BS classes for toggling modal
        let createButton = document.createElement('button');
        $(createButton).addClass('btn bg-primary text-white ');
        $(createButton)
            .attr('data-toggle', 'modal')
            .attr('type', 'button')
            .attr('data-target', '#pokemonModal')
            .attr('aria-label', pokemon.name + ' button')
            .attr('tabindex', '1');
        let icon = document.createElement('img');

        //adds button to lI
        createButton.addEventListener('click', function () {


            showDetails(pokemon);

        })


        // adds pokemon name to the button
        createButton.innerText = pokemon.name;
        //adds button to chart
        createLi.append(createButton);
        createLi.append(icon)


        //adds li to ul
        selectedList.append(createLi)

    }



    function showModal(nameModal, imageModal, heightModal) {

        // modalcontainer  select and clear old content
        let modalBody = document.querySelector('.modal-body')
        modalBody.innerHTML = '';

        // adding pokemon name to modal
        let title = document.createElement('h5')
        title.innerText = nameModal;
        title.id = "modal-title";
        // adding height to modal
        let height = document.createElement('p');
        height.innerText = 'Height: ' + heightModal;
        height.id = "modal-title";

        //adding pokemon image
        let image = document.createElement('img');
        image.src = imageModal;

        // Append all information
        $(modalBody).append(title);
        $(modalBody).append(image);
        $(modalBody).append(height);
    };

    // after selecting button--shows further detail on pokemon
    function showDetails(item) {
        loadDetails(item).then(function () {
            let imageModal = item.imageUrl;
            let nameModal = item.name;
            let heightModal = item.height;
            showModal(nameModal, imageModal, heightModal);
        })
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

    ////////////functions//////////////// 
    return {

        add: add,
        getAll: getAll,
        showDetails: showDetails,
        addListItem: addListItem,
        loadDetails: loadDetails,
        loadList: loadList,
        showModal: showModal,

    }

})()



// loads the pokemon into the table
pokemonRepository.loadList().then(function (pokemon) {

    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);

    })
});
