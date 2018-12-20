<template>
  <main class="main" id="lore">
		<h1 v-for="title in prismicQueryTrim['text-title']" :key="title.text">{{ title.text }}</h1>
		
		<section class="pad">
			<p v-html="prismicRichText"></p>
		</section>
	</main>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

export default {
  name: 'lore',
	props: ['prismicApiEndpoint'],
  data () {
    return {
      prismicType: 'richtext-title',
      prismicQuery: [],
      prismicQueryTrim: {},
      prismicRichText: '',
    }
  },
	methods: {
    linkResolver(doc) {
      console.log(doc);

      // Define the url depending on the document type
      if (doc.type === this.prismicType) {
        return '/lore/';
      }
      
      // Default to homepage
      return '/';
    }
  },
  mounted () {
    let vm = this;

    Prismic.getApi(vm.prismicApiEndpoint).then(function (api) {
      return api.query(
        Prismic.Predicates.at('document.type', 'richtext-title')
      );
    
    }).then(function (response) {
      vm.prismicQuery = response.results;
      vm.prismicQueryTrim = vm.prismicQuery[0].data;
        console.log("Prismic, lore: ", vm.prismicQueryTrim);
      
      vm.prismicRichText = PrismicDOM.RichText.asHtml(vm.prismicQueryTrim['text-content'], vm.linkResolver);
        console.log("vm.prismicRichText: ", vm.prismicRichText);
    
    }, function (err) {
      console.log("Something went wrong: ", err);
    });
  }
}
</script>

<style scoped>
h3 {
	margin: 1rem auto;
  display: inline-block;
}
</style>
