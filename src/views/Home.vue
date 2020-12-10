<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-row>
      <b-col md id="welcome-header" class="p-5 text-light">
        <h1>Bem vindo ao Pokémon API! Procure por seu pokémon aqui!</h1>
        <p>
          Neste site é possível encontrar informações de todos os pokémons! para
          começar a sua pesquisa clique a baixo.
        </p>
      </b-col>
    </b-row>
    <b-row id="main">
      <b-col md class="p-5 text-center bg-pokeballs">
        <b-img-lazy id="poke-ball" src="../assets/PokeBall.png" width="100%" alt="" ></b-img-lazy>
        <h2>Evoluções</h2>
        <p>Veja as evoluções dos pokémons!</p>
      </b-col>
      <b-col md class="p-5 text-center bg-pokeballs">
        <b-img-lazy id="ultra-ball" src="../assets/Ultra-Ball.png" width="100%" alt="" ></b-img-lazy>
        <h2>Ataques</h2>
        <p>Descubra como obter certos ataques para seu pokémon!</p>
      </b-col>
      <b-col md class="p-5 text-center bg-pokeballs">
        <b-img-lazy id="master-ball" src="../assets/Master-Ball.png" width="100%" alt="" ></b-img-lazy>
        <h2>Raros e Shiny</h2>
        <p>Consulte a versão shiny dos seus Pokémons favoritos!</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md class="p-5">
        <Lista />
      </b-col>
    </b-row>
    <b-row>
      <b-col md class="p-5">
        <h2>Olá!</h2>
        <p>
          Precisamos estar sempre melhorando, esta é sua vez! envie-nos
          sugestões e dicas através deste formulário!
        </p>
        <p>Ou entre em contato pela nossas redes sociais:</p>
      </b-col>
      <b-col md class="p-5">
        <h2>Preencha este formulário.</h2>
        <Form />
      </b-col>
    </b-row>
    <b-row>
      <Footer />
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Lista from "@/components/Lista.vue";
import Footer from "@/components/Footer.vue";
import Form from "@/components/Form.vue"

export default {
  name: "Home",
  components: {
    Lista,
    Footer,
    Form,
  },
};
</script>
