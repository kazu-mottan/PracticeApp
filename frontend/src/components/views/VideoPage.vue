<template>
    <v-app>
      <MainTitle />
      <v-main>
        <v-container class="lime lighten-5" fluid fill-height>
          <v-row>
            <v-col>
              <v-card>
                <v-card-text>
                  <VideoDisplay />
                  <VideoCommentSubmit />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-card-text>
                  <v-form>
                    <VideoComment />
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import VideoDisplay from "../parts/VideoDisplay.vue";
  import VideoComment from "../parts/VideoComment.vue";
  import VideoCommentSubmit from "../parts/VideoCommentSubmit.vue";
  
  export default {
    components: {
      VideoDisplay,
      VideoComment,
      VideoCommentSubmit,
    },
  
    data: () => ({
      //
    }),
  };
  </script>
  