<template>
  <main class="main">
    <img :src="prismicHero['url']" class="banner" :alt="prismicHero['alt']">

    <section class="pad starring">
      <p v-html="prismicRichText"></p>
    </section>
  </main>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

export default {
  name: 'home',
  props: ['prismicApiEndpoint'],
  data () {
    return {
      prismicType: 'homepage',
      prismicQuery: [],
      prismicQueryTrim: {},
      prismicRichText: '',
      prismicHero: ''
    }
  },
  methods: {
    linkResolver(doc) {
      console.log(doc);

      // Define the url depending on the document type
      if (doc.type === this.prismicType) {
        return '/';
      }
      
      // Default to homepage
      return '/';
    }
  },
  mounted () {
    let vm = this;

    Prismic.getApi(vm.prismicApiEndpoint).then(function (api) {
      return api.query(
        Prismic.Predicates.at('document.type', 'homepage')
      );
    
    }).then(function (response) {
      vm.prismicQuery = response.results;
      vm.prismicQueryTrim = vm.prismicQuery[0].data;
        console.log("Prismic, homepage: ", vm.prismicQueryTrim);
      
      vm.prismicRichText = PrismicDOM.RichText.asHtml(vm.prismicQueryTrim['text-content'], vm.linkResolver);
        console.log("vm.prismicRichText: ", vm.prismicRichText);
      
      vm.prismicHero = vm.prismicQueryTrim['image-hero'];
        // console.log("vm.prismicHero: ", vm.prismicHero);
    
    }, function (err) {
      console.log("Something went wrong: ", err);
    });
  }
}
</script>

<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
