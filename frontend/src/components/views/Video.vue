<template>
<v-app>
    <MainTitle/>
    <v-main>
    <v-container class="lime lighten-5">
    <v-row>
        <v-col>
        <v-app>
            <v-card>
            <v-card-text>
            <v-form>
                <VideoDisplay/>
            </v-form>
            </v-card-text>
            </v-card>
        </v-app>
        </v-col>
    </v-row>
    </v-container>
    </v-main>
</v-app>
</template>

<script>
import VideoDisplay from '../parts/VideoDisplay.vue'

export default {
name: 'Video',

components: {
    VideoDisplay
},

data: () => ({
    //
}),
}
</script>
