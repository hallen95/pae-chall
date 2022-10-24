<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <!-- #FORM -->
      <Form />
      <!-- #COMMENTS -->
      <v-card elevation="24" class="mx-auto px-2">
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="true"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="(slide, i) in messages" :key="i">
            <v-sheet height="100%" tile>
              <v-row class="fill-height px-4" align="center" justify="center">
                <v-card
                  class="mx-auto px-12"
                  color="pink darken-2"
                  dark
                  width="100%"
                >
                  <v-card-title>
                    <v-icon large left> mdi-pokemon-go </v-icon>
                    <span class="text-h6 font-weight-light"
                      >Pokeworld says</span
                    >
                  </v-card-title>

                  <v-card-text class="text-h5 font-weight-bold">
                    {{ slide.message }}
                  </v-card-text>

                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img
                          class="elevation-6"
                          alt=""
                          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{ slide.name }}</v-list-item-title>
                      </v-list-item-content>

                      <v-row align="center" justify="end">
                        <v-icon class="mr-1"> mdi-heart </v-icon>
                        <span class="subheading mr-2">256</span>
                        <span class="mr-1">·</span>
                        <v-icon class="mr-1"> mdi-share-variant </v-icon>
                        <span class="subheading">45</span>
                      </v-row>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      cycle: true,
    };
  },
  fetch() {
    this.$api.get("/getAll");
  },
  async asyncData({ $api }) {
    let messages = [];
    const response = await $api.get("/getAll");
    messages = response.data;
    return {
      messages,
    };
  },
};
</script>
