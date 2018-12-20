<template>
  <div id="app">
    <sqNavigation/>
    <section id="headspace"></section>

    <router-view
      :prismicApiEndpoint="prismicApiEndpoint"
    />

    <sqFooter/>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

import sqNavigation from '@/components/sqNavigation'
import sqFooter from '@/components/sqFooter'
import home from '@/components/home'
import cast from '@/components/cast'
import lore from '@/components/lore'
import socialPress from '@/components/socialPress'

export default {
  name: 'App',
  data: function () {
    return {
      prismicApiEndpoint: 'https://shuffle-quest.prismic.io/api/v2'
    }
  },
  components: {
    sqNavigation, sqFooter, home, cast, lore, socialPress
  },
  mounted () {
    let vm = this;
    window.vm = vm;
  }
}
</script>

<style>
*,
*:before,
*:after {
	box-sizing: border-box;
}

html,
body {
	height: 100%;
	width: 100%;
	margin: 0 0 1em;
  font-family: calibri, sans-serif;
  /* background-color: rgb(234,204,203); */
  background-color: #fff;
}

h1 {
	text-align: center;
}

img {
	max-width: 100%;
	object-fit: cover;
}

img.logo {
	height: 100%;
}

img.banner {
	width: 100%;
	/* border-bottom: 3px solid rgba(30,30,30,1); */
}

#lore li {
	margin-bottom: 1em;
}

header {
	height: 15vh;
  width: 100%;
	background-color: #fff;
	position: fixed;
	z-index: 1000;
}

#headspace {
  height: 15vh;
  -ms-grid-row: 1;
    grid-row: 1;
}

nav {
	height: 100%;
	display: flex;
		flex-flow: row nowrap;
}

nav a {
	height: 100%;
	color: #333;
	border: 2px solid transparent;
	font-weight: bold;
	text-decoration: none;
	transition: 0.75s;
	display: flex;
		flex: 1 1 auto;
		justify-content: center;
		align-items: center;
}

nav a:focus,
nav a:hover {
	/*border-right: 1px solid #ddd;*/
	border: 2px solid rgba(255,80,0,0.75);
	box-shadow: 10px 10px rgba(255,80,0,0.75);
	color: rgba(255,80,0,0.75);
}

nav a:nth-child(3):focus,
nav a:nth-child(3):hover {
	/*border-right: 1px solid #ddd;*/
	/*border-left: 1px solid #ddd;*/
	box-shadow: 10px 10px 0px rgba(255,80,0,0.75), -10px 10px 0px rgba(255,80,0,0.75);
}

nav a:nth-child(4):focus,
nav a:nth-child(4):hover,
nav a:nth-child(5):focus,
nav a:nth-child(5):hover {
	/*border-right: none;*/
	/*border-left: 1px solid #ddd;*/
	box-shadow: -10px 10px rgba(255,80,0,0.75);
}

nav a i {
	margin-left: 1em;
}

#headspace,
main,
footer {
  /* -ms-grid-column: span 12; */
    grid-column: span 12;
}

main {
  min-height: 75vh;
  padding-bottom: 1em;
  grid-row: 2;
	word-wrap: break-word;
	background-color: rgb(234,204,203);
}

footer {
  height: 10vh;
  padding: 1em;
  -ms-grid-row: 3;
    grid-row: 3;
	background-color: #fff;
	display: flex;
		flex-flow: row nowrap;
}

footer p {
	display: flex;
		flex: 1 0 auto;
		align-items: center;
}

footer p:first-child {
	justify-content: flex-start;
}

footer p:last-child {
	justify-content: flex-end;
}

footer p a {
	margin: 0 0.25em;
	border: 1px solid rgba(255,80,0,0.75);
	border-radius: 5px;
	padding: 0.25em 0.5em;
	color: rgba(255,80,0,0.75);
	/*background-color: rgba(255,80,0,0.75);*/
	transition: 1s;
}

footer p a:focus,
footer p a:hover {
	color: #fff;
	background-color: rgba(255,80,0,0.75);
}

main [title] {
	border-bottom: 1px dotted #333;
}

#app {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 15vh minmax(75vh, auto) 10vh;
	grid-gap: 0;
}

.pad {
	font-size: 1.25em;
	text-align: justify;
  line-height: 1.25;
  background-color: rgb(234,204,203);
}

.pad p,
.pad ul,
.pad h2,
.pad h3,
.pad h4,
.pad h5,
.pad h6 {
  max-width: 960px;
  margin-top: 1em;
  margin-right: auto;
  margin-bottom: 1em;
  margin-left: auto;
}

.pad section {
  max-width: 960px;
  margin-top: 1em;
  margin-right: auto;
  margin-bottom: 1em;
  margin-left: auto;
}

.starring ul {
	margin: 0 0 0 1em;
	border-left: 1px solid #333;
	padding: 0.5em 1em;
	list-style-type: none;
}

.starring li {
	margin-bottom: 0;
}

.cast-member {
	margin-top: 1em;
	display: flex;
		flex-flow: row nowrap;
		flex: 1 0 auto;
}

.cast-member p {
	margin-top: 0;
}

.cast-member-img {
	flex: 1 0 310px;
}

.cast-member-img .real {
	height: 150px;
	width: 150px;
	border: 3px solid #fff;
	border-radius: 75px;
	background-color: #333;
	display: inline-block;
	position: relative;
	z-index: 100;
}

.cast-member-img .illustrated {
	height: 150px;
	width: 150px;
	border: 3px solid #333;
	border-radius: 75px;
	background-color: #fff;
	display: inline-block;
	position: relative;
	left: -1em;
	z-index: 50;
}

@media (max-width: 1000px) {
	body {
		text-align: left;
	}

	.pad {
		margin: 0 2em;
	}

	.cast-member {
		flex-flow: column nowrap;
		align-items: center;
	}

	.cast-member-img {
		flex: 1 0 auto;
	}

	.cast-member p {
		margin-top: 1em;
	}
}

@media (max-width: 800px) {
	nav {
		flex-flow: column wrap;
	}

	.pad {
		margin: 0 2em;
		text-align: left;
	}

	.starring {
		border: none;
		padding: 0 0 0 1em;
		line-height: 1.5;
		list-style-type: disc;
	}
}

@media (max-width: 600px) {
	body {
		grid-template-rows: 15vh auto 18vh;
	}

	header {
		position: absolute;
	}

	main [title] {
		border-bottom: none;
	}

	footer p:first-child {
		margin-bottom: 0;
		justify-content: center;
	}

	footer p:last-child {
		justify-content: center;
	}

	footer {
		margin-bottom: 1em;
		flex-flow: column nowrap;
		align-items: center;
	}
}
</style>
