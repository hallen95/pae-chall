<template>
  <v-card>
    <v-toolbar
      flat
      color="pink darken-2"
      dark
    >
      <v-toolbar-title>Submit a post</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        filled
        label="Title"
        value="My new post"
      ></v-text-field>

      <v-textarea
        filled
        label="Text"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
      ></v-textarea>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="pink darken-2"
        depressed
      >
        Post
      </v-btn>
    </v-card-actions>
  </v-card>
</template>