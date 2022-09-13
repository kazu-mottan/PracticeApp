<!-- <template>
    <div>
        <iframe
            width="1200" 
            height="700"
            src="https://www.youtube.com/embed/I4ehUn3582o"
        ></iframe>
    </div>
</template> -->

<!-- APIからデータをJSONで取得することはできたが、画面上にうまく表示できていない -->
<template>
    <!-- <a v-bind:href="result[0].snippet.thumbnails.maxres.url">
    </a> -->
    <!-- <img v-bind:src="result.snippet.thumbnails.maxres.url"/> -->
    <!-- v-bind:href="'https://www.youtube.com/watch?v=' + result.id" -->
    <div>{{ result }}</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'VideoDisplay',
    data() {
        return {
            result: []
        }
    },
    mounted() {
        const KEY = 'AIzaSyA7NKWOKZ8Stvt0Zf9cAh5VP1GPHdg4y94'
        const youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3'
        })
        youtube.get('/videos', {
            params: {
                part: 'snippet',
                id: 'I4ehUn3582o',
                // chart: 'mostPopular',
                // regionCode: 'JP',
                key: KEY
                }
            })
            .then((res) => {
                console.log(res)
                this.result = res.data.items
            })
            .catch((err) => {
                console.log(err.response.data);
            })
        }
}
</script>
