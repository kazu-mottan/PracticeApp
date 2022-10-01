<template>
    <v-app>
        <MainTitle/>
        <v-main>
        <v-container class="lime lighten-5" fluid>
        <v-row align-content="center">
            <v-col align-self="center">
                <v-card>
                <v-card-text>
                <v-form>
                    <VideoDisplay/>
                </v-form>
                </v-card-text>
                </v-card>
            </v-col>
            <v-col align-self="center">
                <v-card>
                <v-card-text>
                <v-form>
                    <VideoComment/>
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
import VideoDisplay from '../parts/VideoDisplay.vue'
import VideoComment from '../parts/VideoComment.vue'

export default {
name: 'Video',

components: {
    VideoDisplay,
    VideoComment
},

data: () => ({
    //
}),
}
</script>
