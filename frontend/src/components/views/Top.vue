<template>
        <MainTitle/>
        <v-container class="grey lighten-5">
          <v-row class="mb-6" no-gutters>
          <v-col>
            <!-- v-imgはコンポーネント化する -->
            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
            </v-img>
          </v-col>
          <v-col>
            <v-app>
              <v-card>
                <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <UserTextField :counter="10" :rules="nameRules" />
                  <UserPassField/>
                  <v-layout wrap>
                      <SelectLanguage/>
                      <SelectCountry/>
                  </v-layout>
                  <SelectMovie/>
                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
                ></v-checkbox>
                  <SubmitButton :disabled="!valid" @click="SubmitButtonevent" />
                </v-form>
                </v-card-text>
              </v-card>
            </v-app>
          </v-col>
          </v-row>
        </v-container>
  </template>

<script>
    import MainTitle from '../parts/MainTitle.vue'
    import SelectMovie from '../parts/SelectMovie.vue'
    import UserPassField from '../parts/UserPassField.vue'
    import UserTextField from '../parts/UserTextField.vue'
    import SelectCountry from '../parts/SelectCountry.vue'
    import SelectLanguage from '../parts/SelectLanguage.vue'
    import SubmitButton from '../parts/SubmitButton.vue'
    
    export default {
      name: 'App',
    
      components: {
        MainTitle,
        SelectMovie,
        UserTextField,
        UserPassField,
        SelectCountry,
        SelectLanguage,
        SubmitButton
      },
    
      data: () => ({
        valid: true,
        name:'',
        nameRules:[
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email:'',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        checkbox: false,
      }),
      methods:{
        validate(){
            this.$refs.form.validate();
        },
        SubmitButtonevent:function(){
            this.$refs.form.validate();
            // this.$router.push('/video');
        }
      }

    }
    </script>
