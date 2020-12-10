<template>
  <div id="detalhesPokemon">
    <b-container v-if="!carregouDetalhes">
      <b-row>
        <b-col id="detalhes-header" md class="p-5 text-center text-light">
          <h1>{{ pegarPokemon().name }} - {{ pegarPokemon().id }}</h1>
        </b-col>
      </b-row>
      <b-row id="main">
        <b-col md class="p-5 text-center">
          <h2>Sprites</h2>
          <div>
            <b-img-lazy
              :src="`${pegarPokemon().sprites.front_default}`"
              :title="'Pokemon ' + pegarPokemon().name + ' (Normal)'"
              :alt="pegarPokemon().name"
            ></b-img-lazy>
            <b-img-lazy
              :src="`${pegarPokemon().sprites.front_shiny}`"
              :title="'Pokemon ' + pegarPokemon().name + ' (Shiny)'"
              :alt="pegarPokemon().name"
            ></b-img-lazy>
          </div>
        </b-col>
        <b-col md class="p-5">
          <h2>Descrição</h2>
          <div>
            <p v-if="especieEncontrado.flavor_text_entries.length > 0">
              {{
                especieEncontrado.flavor_text_entries.filter((t) => {
                  return (
                    t.flavor_text.toLowerCase().includes(" this ") ||
                    t.flavor_text.toLowerCase().includes(" that ") ||
                    t.flavor_text.toLowerCase().includes(" the ") ||
                    t.flavor_text.toLowerCase().includes(" its ") ||
                    t.flavor_text.toLowerCase().includes(" it ")
                  );
                })[0].flavor_text
              }}
            </p>
          </div>
          <div>
            <h3>Tipo</h3>
            <div id="areaTipo">
              <div
                v-for="(tipo, i) in pegarPokemon().types"
                :key="i"
                :class="'text-light types-container ' + tipo.type.name"
              >
                {{ tipo.type.name }}
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md class="p-5">
          <h2>Habilidades</h2>
          <div v-for="(habilidade, i) in pegarPokemon().abilities" :key="i">
            <p>{{ habilidade.ability.name }}</p>
          </div>
        </b-col>
        <b-col md class="p-5">
          <h2>Sua anotação</h2>
          <p>{{ pegarPokemon().desc }}</p>
          <small><i>Anotação feita em: {{ pegarPokemon().descDate }}</i></small>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <Footer />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Footer from "@/components/Footer.vue";

export default {
  name: "DetalhesPokemon",
  data() {
    return {
      id: this.$route.params.id,
      pokemon: this.$route.params.pokemon,
    };
  },
  components: {
    Footer,
  },
  computed: {
    ...mapGetters(["especieEncontrado", "pokemonEncontrado"]),
    carregouDetalhes() {
      return !this.pokemon ? !this.pokemonEncontrado : !this.pokemon;
    },
  },
  methods: {
    ...mapActions(["detalharEspecie", "detalharPokemonEspecifico"]),
    pegarPokemon() {
      // console.log(((!this.pokemon) ? this.pokemonEncontrado : this.pokemon).sprites.front_default, this.pokemonEncontrado);
      return !this.pokemon ? this.pokemonEncontrado : this.pokemon;
    },
  },
  created() {
    //console.log(this.pokemon);
    this.detalharEspecie(this.id);
    if (!this.pokemon) {
      this.detalharPokemonEspecifico(this.id);
    }
  },
};
</script>

<style>
</style>