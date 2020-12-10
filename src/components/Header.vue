<template>
  <b-navbar
    id="nav"
    variant="faded"
    :class="{ bg_scroll_color: scrollPos > 100 }"
    type="light"
  >
    <b-navbar-brand href="#"> PokeAPI </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item>
        <router-link to="/"><i class="fas fa-home"></i
      > Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/favoritos"><i class="fas fa-star"></i
      > Favoritos</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/about"><i class="fas fa-info"></i
      > Sobre</router-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrollPos: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPos = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style>
.bg_scroll_color {
  transition: 0.4s backgroundColor;
}
</style>