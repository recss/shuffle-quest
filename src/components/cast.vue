<template>
  <main class="main">
    <h1>The Cast</h1>
    <section class="pad">
      <section id="gwynn" class="cast-member">
        <div class="cast-member-img">
          <div class="real" style="background-image: url('static/gwynn-fulcher.jpg'); background-position: center; background-size: cover;">
            <!-- <img src="static/logo.jpg'" style="border-radius: 75px; object-fit: cover;"> -->
          </div>
          <div class="illustrated" style="background-image: url('static/omie-heck.png'); background-position: center; background-size: cover;">
            <!-- <img src="static/logo.jpg'" style="border-radius: 75px; object-fit: cover;"> -->
          </div>
        </div>
        <p><b>Gwynn Fulcher</b> (Omie Heck) is a writer, performer, and actor. She is a staff writer for the award-winning serial fiction podcast PleasureTown and all-star of the Chicago live lit scene. She is as friendly and delightful as her Shuffle Quest character.</p>
      </section>

      <section id="allie" class="cast-member">
        <div class="cast-member-img">
          <div class="real" style="background-image: url('static/allie-reid.jpg'); background-position: center; background-size: cover;"></div>
          <div class="illustrated" style="background-image: url('static/phia.png'); background-position: center; background-size: cover;"></div>
        </div>
        <p><b>Allie Reid</b> (Phia) is a performer, writer and clown. She spends the majority of her time managing her boyfriend’s vine career #vine2020. She recently started making puppets though, so soon she won’t need anybody!</p>
      </section>

      <section id="joe" class="cast-member">
        <div class="cast-member-img">
          <div class="real" style="background-image: url('static/joe-anderson.jpg'); background-position: center; background-size: cover;">
            <!-- <img src="static/joe-anderson.jpg'" style="border-radius: 75px; object-fit: cover;"> -->
          </div>
          <div class="illustrated" style="background-image: url('static/ruddy-daton.png'); background-position: center; background-size: cover;">
            <!-- <img src="static/ruddy-daton.png'" style="border-radius: 75px; object-fit: cover;"> -->
          </div>
        </div>
        <p><b>Joe Anderson</b> (Ruddy Dayton) is a huge ape who is trapped by his hellish medium smartness, where you're smart enough to realize  things are bad, but not smart enough to fix them. He salves himself by being a gamer and sending Tom videos of himself wetly eating eggs.</p>
      </section>

      <section id="cody" class="cast-member">
        <div class="cast-member-img">
          <div class="real" style="background-image: url('static/cody-melcher.jpg'); background-position: center; background-size: cover;"></div>
          <div class="illustrated" style="background-image: url('static/terok-nor.png'); background-position: center; background-size: cover;"></div>
        </div>
        <p><b>Cody Melcher</b> (Terok Nor) is the producer and host of the critically-acclaimed podcast Tomefoolery and new podcast So, I've Done Some Googling. He has performed at SF Sketchfest, The Comedy Exposition, Arch City Comedy Festival, PrideFest Milwaukee, and more. He has participated in panels and events at comics/fandom conventions <span title="Chicago Comic &amp; Entertainment Expo">C2E2</span>, Space City Comic Con, and HavenCon and was a Finalist in The Advocate’s National Queer Comedy Search and the 2016 Laughing Devil Comedy Festival.</p>
      </section>

      <section id="tom" class="cast-member">
        <div class="cast-member-img">
          <div class="real" style="background-image: url('static/tom-harrison.jpg'); background-position: center; background-size: cover;"></div>
          <div class="illustrated" style="background-image: url('static/olmec.jpg'); background-position: center; background-size: cover;"></div>
        </div>
        <p><b>Tom Harrison</b> (GM, Olmec, Goblin Joe, et al) is the host and producer of live monthly news revue The Skewer. He is dumb as hell!!!</p>
      </section>
    </section>
  </main>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

export default {
  name: 'cast',
  data () {
    return {
      prismicType: 'cast',
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
        Prismic.Predicates.at('document.type', 'cast')
      );
    
    }).then(function (response) {
      vm.prismicQuery = response.results;
      vm.prismicQueryTrim = vm.prismicQuery[0].data;
        console.log("Prismic, cast: ", vm.prismicQueryTrim);
      
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
