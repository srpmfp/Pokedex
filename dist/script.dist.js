let pokemonRepository = (function () {
    let pokemonList = []; let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; function add(pokemon) { pokemonList.push(pokemon) }
    function addListItem(pokemon) {
        let selectedList = document.querySelector('#pokemonList'); let createLi = document.createElement('li'); $(createLi).addClass('list-group-item border-0 bg-transparent p-1 m-auto'); let createButton = document.createElement('button'); $(createButton).addClass('btn btn-success btn-subtle bg-grey-600 '); $(createButton).attr('data-toggle', 'modal').attr('type', 'button').attr('data-target', '#pokemonModal').attr('aria-label', pokemon.name + ' button').attr('tabindex', '1'); let icon = document.createElement('img'); createButton.addEventListener('click', function () { showDetails(pokemon) })
        createButton.innerText = pokemon.name; createLi.append(createButton); createLi.append(icon)
        selectedList.append(createLi)
    }
    function showModal(nameModal, imageModal, heightModal) {
        let modalBody = document.querySelector('.modal-body')
        modalBody.innerHTML = ''; let title = document.createElement('h5')
        title.innerText = nameModal; title.id = "modal-title"; let height = document.createElement('p'); height.innerText = 'Height: ' + heightModal; height.id = "modal-title"; let image = document.createElement('img'); image.src = imageModal; $(modalBody).append(title); $(modalBody).append(image); $(modalBody).append(height)
    }; function showDetails(item) { loadDetails(item).then(function () { let imageModal = item.imageUrl; let nameModal = item.name; let heightModal = item.height; showModal(nameModal, imageModal, heightModal) }) }
    function getAll() { return pokemonList }
    function loadList() { return fetch(apiUrl).then(function (response) { return response.json() }).then(function (json) { json.results.forEach(function (item) { let pokemon = { name: item.name, url: item.url }; add(pokemon) }) }).catch(function (e) { console.error(e) }) }
    function loadDetails(item) { let url = item.url; return fetch(url).then(function (response) { return response.json() }).then(function (details) { item.imageUrl = details.sprites.front_default; item.height = details.height; item.types = details.types }).catch(function (e) { console.error(e) }) }
    return { add: add, getAll: getAll, showDetails: showDetails, addListItem: addListItem, loadDetails: loadDetails, loadList: loadList, showModal: showModal, }
})()
pokemonRepository.loadList().then(function (pokemon) { pokemonRepository.getAll().forEach(function (pokemon) { pokemonRepository.addListItem(pokemon) }) })