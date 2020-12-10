import axios from 'axios';

const state = {
    pokemons: [],
    pokemon: "",
    especie: [],
    favoritos: [],
}

const getters = {
    // pokemonsEcontrados: state => state.pokemons,
    // pokemonEncontrado: state => state.pokemon,
    especieEncontrado: state => state.especie,
    pokemonsEncontrados: state => state.pokemons,
    pokemonEncontrado: state => state.pokemon,
    pegarFavoritos: state => state.favoritos,
    pegarListaFiltrada: state => state.pokemons,
}

const actions = {
    // pegarPokemons({ commit }, pagina = 0) {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${pagina}`) //5
    //         .then(r => {
    //             commit('pegarPokemons', r.data.results)
    //         })
    // },
    // detalharPokemon({ commit }, id = 0){
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //     .then(r => {
    //         //console.log(r.data);
    //         commit('detalharPokemon', r.data)
    //     })
    // },
    async pegarPokemons({ commit }, quantidade = 0) {
        var qnome = [];
        for (let i = quantidade; i < quantidade + 100; i++) {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${(i + 1)}/`)
                .then(r => {//Trava d+?
                    qnome.push(r.data);
                })
        }
        commit('pegarPokemons', qnome);
    },
    detalharPokemonEspecifico({ commit }, id) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${(id)}/`)
            .then(r => {
                commit('detalharPokemonEspecifico', r.data)
            })
    },
    detalharEspecie({ commit }, id = 0) {
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
            .then(r => {
                commit('detalharEspecie', r.data)
            })
    },
    adicionarAFavoritos({ commit }, pokemon) {
        commit('adicionarAFavoritos', pokemon)
    },
    updatePokemonEscolhido({ commit }, pokemon) {
        commit('updatePokemonEscolhido', pokemon);
    },
    deletarDosFavoritos({ commit }, id) {
        console.log(id);
        commit('deletarDosFavoritos', id)
    },
    filtrarPorTipo({ commit }, tipo) {
        commit('filtrarPorTipo', tipo)
    }
}

const mutations = {
    pegarPokemons: (state, data) => state.pokemons = data,
    detalharPokemonEspecifico: (state, data) => state.pokemon = data,
    detalharEspecie: (state, data) => state.especie = data,
    // Favoritos
    adicionarAFavoritos: (state, data) => state.favoritos.push(data),
    deletarDosFavoritos: (state, data) => state.favoritos = state.favoritos.filter(p => p.id !== data),
    //Editar
    updatePokemonEscolhido: (state, data) => {
        const i = state.pokemons.findIndex(t => t.id === data.id)
        if (i !== -1) {
            state.pokemons.splice(i, 1, data);
        }
    },
    //Filtro
    filtrarPorTipo: (state, data) => {
        // state.pokemons.filter(p => p.types.type == data);
        state.pokemons = state.pokemons.filter((p) => {
            return (p.types.map((t) => t.type.name)).indexOf(data) >= 0;
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}