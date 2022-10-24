<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="gradient-bg-welcome logo py-4 d-flex justify-center">
        <MewLogo :src="mew.id" />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          <v-avatar size="56" class="mr-2">
            <img alt="user" src="mew.jpg" /> </v-avatar
          >#{{ mew.id }} {{ mew.name }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p class="quote">
            <span>“</span>{{ filtered_quotes[randomQuote].flavor_text
            }}<span>”</span>
          </p>
        </v-card-text>
        <!--  NEW CARD SEPARATION -->
        <v-card class="mx-auto">
          <v-toolbar color="pink darken-2" dark class="gradient-bg-experience">
            <v-toolbar-title class="title">Sobre mí</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
              color="pink lighten-4"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
          <v-card class="mx-auto">
            <v-toolbar
              color="pink darken-2"
              dark
              class="gradient-bg-experience"
            >
              <v-toolbar-title class="title"
                >Mi experiencia: participaciones</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>
            <!-- EXPERIENCES: {{ experiences }} -->
            <!-- EXPERIENCES  -->

            <v-sheet class="mx-auto" elevation="8" max-width="800">
              <v-slide-group v-model="model" class="pa-4" show-arrows>
                <v-slide-item
                  v-for="n in experiences"
                  :key="n"
                  v-slot="{ active, toggle }"
                  :value="n"
                >
                  <v-card
                    class="ma-4 eth-card"
                    height="200"
                    width="100"
                    @click="toggle"
                  >
                    <v-row
                      class="fill-height flex-column"
                      align="center"
                      justify="center"
                    >
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          size="20"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>

                      <v-card-title>Pokemon</v-card-title>
                      <!-- <v-card-subtitle>participación</v-card-subtitle> -->
                      {{ n }}
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
              <v-expand-transition>
                <v-sheet v-if="model != null" height="200" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <h3 class="text-h6 mx-auto px-12">
                      Tuve una participación estelar en "Pokemon {{ model }}"
                    </h3>
                  </v-row>
                </v-sheet>
              </v-expand-transition>
            </v-sheet>
          </v-card>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $axios }) {
    const response = await $axios.get("/pokemon/mew");
    const response_species = await $axios.get("/pokemon-species/mew");
    const mew = {
      data: response.data,
      name: response.data.name,
      stats: response.data.stats,
      experiences: response.data.game_indices,
      id: response.data.id,
      flavor_text: response_species.data.flavor_text_entries,
      habitat: response_species.data.habitat,
      ability: response.data.abilities[0].ability,
      moves: response.data.moves,
    };
    return {
      mew,
    };
  },
  computed: {
    filtered_quotes() {
      return this.mew.flavor_text.filter((item) => {
        return item.language.name === "es";
      });
    },
    randomQuote() {
      return Math.floor(this.random(0, this.filtered_quotes.length));
    },
    basicMoves() {
      let moves = [];
      this.mew.moves.slice(0, 10).forEach((move) => {
        moves.push({ title: move.move.name });
      });
      return moves;
    },
    experiences() {
      let experiences = [];
      this.mew.experiences.map((experience) => {
        experiences.push(experience.version.name);
      });
      return experiences;
    },
    basicStats() {
      let basics = [];
      this.mew.stats.forEach((stat) => {
        basics.push({ title: stat.stat.name, value: stat.base_stat });
      });
      return basics;
    },
    items() {
      return [
        {
          action: "mdi-ticket",
          items: this.basicStats.map((item) => {
            return { title: `${item.title}: ${item.value} ` };
          }),
          title: "Basic stats",
        },
        {
          action: "mdi-solar-power",
          items: this.basicMoves.map((item) => {
            return { title: `${item.title}` };
          }),
          title: "Favorite Moves",
        },
        {
          action: "mdi-account-group",
          items: [{ title: this.mew.habitat.name }],
          title: "Habitat",
        },
        {
          action: "mdi-altimeter",
          items: [{ title: this.mew.ability.name }],
          title: "Ability",
        },
      ];
    },
  },
  data() {
    return {
      data: null,
      model: null,
    };
  },

  methods: {
    random(mn, mx) {
      return Math.random() * (mx - mn) + mn;
    },
  },
};
</script>

<lang scoped lang="scss">
.headline {
  text-transform: uppercase;
}
.title {
  text-shadow: 0 0 2px #000;
}
.quote {
  font-style: italic;
  text-align: center;
  span {
    font-size: 1.8rem;
  }
}
</lang>
