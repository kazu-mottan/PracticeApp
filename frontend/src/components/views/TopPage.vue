<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row class="mb-6" no-gutters>
        <v-col style="padding: 1rem;">
          <v-card>
            <!-- v-imgはコンポーネント化する -->
            <v-img
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
                <UserTextField :rules="nameRules" v-model="name"/>
                <UserPassField v-model="password"/>
                <v-layout wrap>
                  <SelectLanguage style="width: 45%" v-model="lang" 
                  :items="[
                    {state:'Japanese', abbr:'FL'}, 
                    {state:'English', abbr:'EN'}, 
                    {state:'Chinese', abbr:'CH'}, 
                    {state:'Arabic', abbr:'AE'}, 
                    ]"
                  item-title="state"
                  item-value="abbr"
                  />
                  <v-select 
                    v-model="countryone"
                    style="width: 45%; margin-left: 10%;" 
                    label="Select your country"
                    :rules="[v => !!v || 'Item is required']"
                    required
                    item-title="state" 
                    persistent-hint
                    return-object
                    :items="country" 
                  ></v-select>
                </v-layout>
                <SelectMovie v-model="movie" />
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
import SelectLanguage from "../parts/SelectLanguage.vue";
import SubmitButton from "../parts/SubmitButton.vue";
import * as api from "../../db-utils/index.js"

export default {
  name: "App",
  components: {
    UserTextField,
    UserPassField,
    SubmitButton,
    SelectMovie,
    SelectLanguage,
  },
  data: () => ({
    valid: true,
    name: "",
    password:"",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    lang:null,
    countryone:null,
    movie:null,
    checkbox: false,
    loginActionflg:false,
    country:[
        {state:'Japan'}, 
        {state:'United States'}, 
        {state:'United Kingdom'}, 
        {state:'China'}, 
        {state:'Taiwan'}, 
        {state:'Spain'}, 
        {state:'Germany'}, 
        {state:'Canada'}, 
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.submitEvent();
    },
    submitEvent: async function () {
      // this.$router.push("/video");
      //registerUser()の引数のuserIDを削除
      let forminfo = {
          'name':this.name,
          'password':this.password,
          'country':this.countryone,
          'checkbox':this.checkbox,
          'movie':this.movie,
          'lang':this.lang
      } 
      console
      await api.registerUser(forminfo).then((res) => {
        if (res?.status === 200) {
            console.log(res);
            alert("ユーザー登録しました。");
            this.$router.push("/video");
          } else {
            console.log('error');
            alert("ユーザー登録できませんでした。");
          }
      });
    },
  },
};
</script>
