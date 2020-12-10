<template>
  <div id="listaFavoritos">
    <b-row>
      <b-col md id="welcome-header" class="p-5 text-light">
        <h1>Lista de favoritos</h1>
        <p>Veja os pokémons que você adicionou ao favoritos aqui.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md class="pt-4">
        <h2>Seus favoritos</h2>
      </b-col>
    </b-row>
    <b-alert variant="danger" v-if="pegarFavoritos.length <= 0" show
      >Você não tem nenhum Pokémon favorito.</b-alert
    >
    <b-card-group style="justify-content: center" class="text-center" deck>
      <b-card
        v-for="(pokemon, i) in pegarFavoritos"
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
          <b-img-lazy
            :src="pokemon.sprites.front_default"
            :title="pokemon.name"
            :alt="'Pokemon ' + pokemon.name"
            style="width: 100%; image-rendering: pixelated"
          ></b-img-lazy>
        </router-link>
        <b-button-group>
          <b-button variant="danger" @click="deletarDosFavoritos(pokemon.id)"
            ><i class="fas fa-trash"></i
          ></b-button>
          <b-button variant="primary" v-b-modal.desc-modal><i class="fas fa-edit"></i></b-button>
        </b-button-group>
        <b-modal
      id="desc-modal"
      ref="modal"
      title="Insira uma anotação"
      @ok="confirmarModal(pokemon)"
    >
      <form ref="form">
        <b-form-group
          label="Nota"
          label-for="desc-input"
        >
          <b-form-textarea
            id="desc-input"
            v-model="desc"
            placeholder="Adicione uma nota neste pokemon."
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
        label="Data">
          <b-form-input type="date" v-model="date" placeholder="Insira a data da anotação"></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
      </b-card>
    </b-card-group>
    <b-row>
      <Footer />
    </b-row>
  </div>
</template>

<script>
import Footer from "../components/Footer";

import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      pagina: 0,
      desc: '',
      date: '',
    };
  },
  components: {
    Footer,
  },
  computed: {
    ...mapGetters(["pegarFavoritos"]),
  },
  methods: {
    ...mapActions(["deletarDosFavoritos", "updatePokemonEscolhido"]),
    confirmarModal(pokemon){
      pokemon.desc = this.desc;
      pokemon.descDate = this.date;
      this.updatePokemonEscolhido(pokemon)
    },
  },
};
</script>

<style>
</style>