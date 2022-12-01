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
            <center>
              <v-card-title>Registration Form</v-card-title>
            </center>
            <center>
            <div>
              <v-chip
                label
                link
                outlined
              >Already have an DeeTube account?</v-chip>
            </div>
          </center>
            <br>
              <v-form ref="form" v-model="valid" lazy-validation>
                <UserTextField :rules="nameRules" />
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
                <SubmitButton class="mx-auto" :disabled="!valid" @click="submitEvent" />
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
import SelectCountry from "../parts/selectCountry.vue";
import SelectLanguage from "../parts/SelectLanguage.vue";
import SubmitButton from "../parts/SubmitButton.vue";
import * as api from "../../db-utils/index.js"
import LoginPageAction from "../views/LoginPage.vue";

export default {
  name: "App",
  components: {
    UserTextField,
    UserPassField,
    SubmitButton,
    SelectMovie,
    SelectCountry,
    SelectLanguage,
    LoginPageAction
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
    loginActionflg:false
  }),
  methods: {
    validate() {
      this.$refs.form.submitEvent();
    },
    submitEvent: function () {
      this.$router.push("/video");
      //registerUser()の引数のuserIDを削除
      api.registerUser().then((score) => {
              console.log(score);
      });
    },
  },
};
</script>
