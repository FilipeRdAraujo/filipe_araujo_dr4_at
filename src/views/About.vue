<template>
  <div class="about">
    <b-container>
      <b-row>
        <b-col id="sobre-header" md class="p-5 text-light">
          <h1>Sobre</h1>
          <p>Aqui você pode encontrar informações importantes.</p>
        </b-col>
      </b-row>
      <b-row id="main">
        <b-col md class="p-5">
          <h2>Nossa API</h2>
          <p>
            Para gerar todos os 800 Pokémons, nosso website utiliza a
            <a href="https://pokeapi.co/">PokéAPI</a> uma API grátis onde é
            armazenados as informações do pokemon como nome, status, sprites e
            evoluções.
          </p>
        </b-col>
        <b-col md class="text-center" style="align-self: center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            title="Logo da PokeAPI"
            alt="PokeAPI Logo"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md class="p-5"></b-col>
        <b-col md class="p-5">
          <h2>Outras formas de contato.</h2>
          <p>Entre em contato pelas nossas redes sociais.</p>
          <b-button squared variant="primary"><i class="fa fa-facebook-f"></i></b-button>
          <b-button squared variant="primary"><i class="fa fa-twitter"></i></b-button>
          <b-button squared variant="primary"><i class="fa fa-instagram"></i></b-button>
        </b-col>
      </b-row>
      <b-row>
        <Footer />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Footer,
  },
};
</script>

<style>
</style>
