<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <VuetifyLogo :src="mew.id" />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          #{{ mew.id }} {{ mew.name }}
        </v-card-title>
        <v-card-text>
          <p>
            {{ filtered_quotes[randomQuote].flavor_text }}
          </p>
        </v-card-text>
        <!--  NEW CARD SEPARATION -->
        <v-card class="mx-auto">
          <v-toolbar color="pink darken-2" dark>
            <v-toolbar-title>Sobre mí</v-toolbar-title>
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
      id: response.data.id,
      flavor_text: response_species.data.flavor_text_entries,
      habitat: response_species.data.habitat,
      ability: response.data.abilities
        .map((ability) => ability.ability.name)
        .join(","),
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
    habitat() {},
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
          items: [{ title: this.mew.ability }],
          title: "Ability",
        },
      ];
    },
  },
  data() {
    return {
      data: null,
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
</lang>
