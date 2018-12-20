<template>
  <header>
    <nav>
      <a href="https://shufflequest.libsyn.com/" target="_blank">Episodes <i class="fas fa-external-link-alt"></i></a>
      <router-link to="/cast">Cast</router-link>
      <router-link to="/">
				<img class="logo" src="static/logo.jpg" alt="Shuffle Quest logo">
			</router-link>
			<router-link to="/lore">Lore</router-link>
			<router-link to="/socialPress">Social &amp; Press</router-link>
		</nav>
	</header>
</template>

<script>
export default {
  name: 'sqNavigation',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
/* h1, h2 {
  font-weight: normal;
} */
</style>
