<template>
  <div id="lista">
    <div>
      <label for="selectTipo">Filtrar página</label>
      <b-form-select
        id="selectTipo"
        v-model="selected"
        :options="options"
        @change="teste(selected)"
        class="mb-3"
      ></b-form-select>
    </div>
    <div>
      <div v-if="!listaEstaCarregada" class="text-center zIndex-2">
        <b-spinner style="width: 3rem; height: 3rem" label="Loading">
        </b-spinner>
        <br />
        <p>Carregando Pokémons...</p>
      </div>

      <b-card-group style="justify-content: center" class="text-center" deck>
        <b-card
          v-for="(pokemon, i) in pokemonsEncontrados"
          :key="i"
          class="c-card"
          style="min-width: 140px; max-width: 140px; margin: 5px"
        >
          <router-link
            :to="{
              name: 'Detalhes',
              params: {
                id: pokemon.id,
                pokemon: pokemon,
              },
            }"
          >
            <b-img-lazy :src="pokemon.sprites.front_default" :title="pokemon.name" :alt="'Pokemon '+pokemon.name"></b-img-lazy>
          </router-link>
          <b-button variant="primary" @click="adicionarAFavoritos(pokemon)"
            ><i class="fas fa-heart"></i
          ></b-button>
        </b-card>
      </b-card-group>
    </div>
    <div id="pagination-column" v-if="listaEstaCarregada" class="text-center">
      <b-button
        class="m-1 text-light"
        variant="warning"
        size="sm"
        @click="
          pokemonsEncontrados.splice(0, pokemonsEncontrados.length);
          selected= null;
          pegarPokemons(0);
          pagina = 0;
        "
      >
        <i class="fas fa-backward"></i>
      </b-button>
      <b-button
        class="m-1 text-light"
        variant="warning"
        size="sm"
        @click="paginaAnterior()"
        ><i class="fas fa-arrow-left"></i
      ></b-button>
      <strong>{{ pagina }} / 700</strong>
      <b-button
        class="m-1 text-light"
        variant="warning"
        size="sm"
        @click="proximaPagina()"
        ><i class="fas fa-arrow-right"></i
      ></b-button>
      <b-button
        class="m-1 text-light"
        variant="warning"
        size="sm"
        @click="
          pokemonsEncontrados.splice(0, pokemonsEncontrados.length);
          selected= null;
          pegarPokemons(700);
          pagina = 700;
        "
      >
        <i class="fas fa-forward"></i>
      </b-button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import ComandosListagem from './ComandosListagem.vue'

export default {
  name: "Lista",
  data() {
    return {
      pagina: 0,
      selected: null,
      options: [
        { value: null, text: "All" },
        { value: "normal", text: "Normal" },
        { value: "fire", text: "Fire" },
        { value: "fighting", text: "Fighting" },
        { value: "water", text: "Water" },
        { value: "flying", text: "Flying" },
        { value: "grass", text: "Grass" },
        { value: "poison", text: "Poison" },
        { value: "electric", text: "Electric" },
        { value: "ground", text: "Ground" },
        { value: "psychic", text: "Psychic" },
        { value: "rock", text: "Rock" },
        { value: "ice", text: "Ice" },
        { value: "bug", text: "Bug" },
        { value: "dragon", text: "Dragon" },
        { value: "ghost", text: "Ghost" },
        { value: "dark", text: "Dark" },
        { value: "steel", text: "Steel" },
        { value: "fairy", text: "Fairy" },
      ],
    };
  },
  computed: {
    ...mapGetters(["pokemonsEncontrados", "pegarListaFiltrada"]),
    listaEstaCarregada() {
      return this.pokemonsEncontrados.length > 0 ? true : false;
    },
  },
  methods: {
    ...mapActions(["pegarPokemons", "adicionarAFavoritos", "filtrarPorTipo"]),
    proximaPagina() {
      this.selected= null;
      this.pokemonsEncontrados.splice(0, this.pokemonsEncontrados.length);
      if (this.pagina < 700) {
        this.pagina += 100;
        this.pegarPokemons(this.pagina);
      }
    },
    paginaAnterior() {
      this.selected= null;
      this.pokemonsEncontrados.splice(0, this.pokemonsEncontrados.length);
      if (this.pagina >= 100) {
        this.pagina -= 100;
        this.pegarPokemons(this.pagina);
      }
    },
    async teste(s) {
      this.pokemonsEncontrados.splice(0, this.pokemonsEncontrados.length);
      await this.pegarPokemons(this.pagina);
      if (s != null) {
        this.filtrarPorTipo(s);
      }
    },
  },
  mounted() {
    this.pokemonsEncontrados.splice(0, this.pokemonsEncontrados.length);
    this.pegarPokemons();
  },
};
</script>

<style>
</style>