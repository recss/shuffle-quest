<template>
  <main class="main">
    <h1 v-for="title in prismicQueryTrim['text-title']" :key="title.text">{{ title.text }}</h1>

    <section id="triage">
      <section class="pad" id="kit">
        <h4>DOWNLOADS</h4>
        <p v-html="prismicAudioEmbed"></p>

        <div class="press-kit">
          <div class="press-kit-gallery">
            <img
              v-for="pic in prismicImageGallery"
              :key="pic['image-thumbnail']['url']"
              :src="pic['image-thumbnail']['url']"
              :alt="pic['image-thumbnail']['alt']"
            >
          </div>

          <div class="press-download">
            <a :href="prismicMediaZIP" class="button">
              <span id="download-full">Download Full Press Kit</span>
              <span id="download-small">Download Press Kit</span>
            </a>
            <ul>
              <li>Promo Trailer</li>
              <li>Logo</li>
              <li>Banner</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="pad" style="min-height: 75vh;">
        <p v-html="prismicRichText"></p>
      </section>
    </section>
  </main>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

export default {
  name: 'socialPress',
  props: ['prismicApiEndpoint'],
  data () {
    return {
      prismicType: 'social-press',
      prismicQuery: [],
      prismicQueryTrim: {},
      prismicRichText: '',
      prismicAudioEmbed: '',
      prismicMediaZIP: '',
      prismicImageGallery: ''
    }
  },
  methods: {
    linkResolver(doc) {
      console.log(doc);

      // Define the url depending on the document type
      if (doc.type === this.prismicType) {
        return '/socialPress/';
      }
      
      // Default to homepage
      return '/';
    }
  },
  mounted () {
    let vm = this;

    Prismic.getApi(vm.prismicApiEndpoint).then(function (api) {
      return api.query(
        Prismic.Predicates.at('document.type', 'social-press')
      );
    
    }).then(function (response) {
      vm.prismicQuery = response.results;
      vm.prismicQueryTrim = vm.prismicQuery[0].data;
        console.log("Prismic, socialPress: ", vm.prismicQueryTrim);
      
      vm.prismicRichText = PrismicDOM.RichText.asHtml(vm.prismicQueryTrim['text-content'], vm.linkResolver);
        // console.log("vm.prismicRichText: ", vm.prismicRichText);
      vm.prismicAudioEmbed = vm.prismicQueryTrim['text-trailer-link'][0]['text'];
        // console.log("vm.prismicAudioEmbed: ", vm.prismicAudioEmbed);
      vm.prismicMediaZIP = vm.prismicQueryTrim['media-press-kit']['url'];
        // console.log("vm.prismicMediaZIP: ", vm.prismicMediaZIP);
      vm.prismicImageGallery = vm.prismicQueryTrim['image-gallery'];
        // console.log("vm.prismicImageGallery: ", vm.prismicImageGallery);
    
    }, function (err) {
      console.log("Something went wrong: ", err);
    });
  }
}
</script>

<style scoped>
#triage {
  width: 1200px;
  margin: 0 auto;
  display: flex;
    justify-content: center;
}

#kit {
  flex: 1 0 400px;
  margin-left: 2em;
  order: 1;
}

#download-small {
  display: inline;
}

#download-full {
  display: none;
}

.press-download {
  margin-left: 1em;
  padding-top: 0.5em;
  flex: 1 0 60%;
}

.press-kit {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
    justify-content: space-between;
}

.press-kit-gallery {
  display: flex;
    flex-flow: column nowrap;
}

.press-kit-gallery img {
  margin-bottom: 0.25em;
  border: 2px solid #333;
  box-shadow: 3px 3px 0 #999;
}

.button {
  padding: 0.5em;
  color: #fff;
  text-decoration: none;
  background-color: rgba(0,0,0,0.80);
  box-shadow: 5px 5px 0 rgba(0,0,0,0.5);
  transition: 1s;
}

.button:focus,
.button:hover {
  background-color: rgba(0,0,0,1);
  box-shadow: 3px 3px 1px rgba(0,0,0,0.5);
}

@media (min-width: 450px) {
  #download-small {
    display: none;
  }

  #download-full {
    display: inline;
  }
}

@media (max-width: 1250px) {
  #triage {
    width: auto;
    flex-flow: column nowrap;
  }

  #kit {
    margin: 0 2em;
    order: 0;
  }
}
</style>
