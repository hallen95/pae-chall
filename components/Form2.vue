<template>
  <v-card>
    <v-toolbar flat color="pink darken-2" dark>
      <v-toolbar-title>Talk to me!</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        filled
        color="pink darken-2"
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>

      <v-textarea
        filled
        color="pink darken-2"
        v-model="message"
        :error-messages="messageErrors"
        label="Message"
        required
        @input="$v.message.$touch()"
        @blur="$v.message.$touch()"
      ></v-textarea>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :loading="loading"
        :disabled="disabled"
        @click="sendMessage"
        color="pink darken-2"
        depressed
      >
        Post
      </v-btn>
    </v-card-actions>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          v-model="showDialog"
          transition="dialog-top-transition"
          max-width="600"
        >
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="pink darken-4" class="gradient-bg-experience"
                >Thanks for sharing with me!</v-toolbar
              >
              <v-card-text>
                <div class="text-h7 pa-12">
                  Your message will be display once you reload the page.
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    message: { required, maxLength: maxLength(140) },
  },

  data: () => ({
    name: "",
    message: "",
    loading: false,
    showDialog: false,
  }),

  computed: {
    disabled() {
      return this.name === "" || this.message === "";
    },

    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.maxLength &&
        errors.push("Maximum Number of Characters Reached...");
      !this.$v.message.required && errors.push("message is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
    },
    async sendMessage() {
      this.loading = true;
      try {
        const response = await this.$api.post("/post", {
          name: this.name,
          message: this.message,
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      } finally {
        this.loading = false;
        this.showDialog = true;
      }
    },
  },
};
</script>

<lang scoped lang="scss"></lang>
