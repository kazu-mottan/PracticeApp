<template>
  <div>
    <MainTitle />
    <v-container class="grey lighten-5">
      <v-row class="mb-6" no-gutters>
        <v-col style="padding: 1rem;">
          <v-card>
            <!-- v-imgはコンポーネント化する -->
            <v-img
              :aspect-ratio="aspectRatio"
              :width="width"
              src="../../src/assets/landing.jpeg"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <UserTextField :counter="10" :rules="nameRules" />
                <UserPassField />
                <v-layout wrap>
                  <SelectLanguage style="width: 45%"/>
                  <SelectCountry style="width: 45%; margin-left: 10%;"/>
                </v-layout>
                <SelectMovie />
                <v-checkbox
                  v-model="checkbox"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                ></v-checkbox>
                <SubmitButton :disabled="!valid" @click="submitEvent" />
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SelectMovie from "../parts/SelectMovie.vue";
import UserPassField from "../parts/UserPassField.vue";
import UserTextField from "../parts/UserTextField.vue";
import SelectCountry from "../parts/SelectCountry.vue";
import SelectLanguage from "../parts/SelectLanguage.vue";
import SubmitButton from "../parts/SubmitButton.vue";
import * as api from "../../db-util/index"
export default {
  name: "App",
  components: {
    UserTextField,
    UserPassField,
    SubmitButton,
    SelectMovie,
    SelectCountry,
    SelectLanguage,
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    submitEvent: function () {
      this.$refs.form.validate();
      this.$router.push("/videoPage");
      api.registerUser(userId).then((score) => {
              console.log(score);
      });
    },
  },
};
</script>
