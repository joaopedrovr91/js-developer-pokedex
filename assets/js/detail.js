const pokemonDetail = document.getElementById('pokemonDetail')

var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

const pokeurl = 'https://pokeapi.co/api/v2/pokemon/'

    const pokemonID = {url: pokeurl + id}

    async function convertPokemonToDetail() {
        const result = await pokeApi.getPokemonDetail(pokemonID)
        const local = result.location.length > 0 ? 
        `   
            <div>
                <h4>${result.location.map((location) => `<li class="descriptionLocation" >${location}</li>`).join('')}</h4>
            </div>
        ` : '<span class="descriptionLocation"> nao encontramos cidades </span>'

        const html =  
        `
            <div class="DetailScreen ${result.type}">
                <div class="flexCollum">
                    <a class="buttonDetail" href="index.html">voltar</a>
                    <div class="flex">
                        <div class="headerDetail">
                            <span class="nameDetail">${result.name}</span>
                            <div class="flex">
                                <span class="typesDetail">${result.types.map((type) => `<li class=" typesDetailLI ${type}">${type}</li>`).join('')}</span>
                            </div>
                        </div>
                        <span class="numberDetail">#${result.number}</span>
                    </div>
                </div>

                <div class="detailImage">
                    <img  src="${result.photo}">
                </div>
                <ol class="detailContent">
                    <span class="description">peso : <h5> ${result.weight} </h5> </span>
                    <span class="description">altura : <h5> ${result.height} </h5> </span>
                    <span class="description"> cidades que pode ser encontrado são: </span>
                    ${local}
                </ol>
            </div>
        `

                pokemonDetail.innerHTML = html
    }

    convertPokemonToDetail();
    
    