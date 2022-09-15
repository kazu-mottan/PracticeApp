<template>
    <div>
        <iframe
            width="1000" 
            height="500"
            :src="resultUrl"
        ></iframe>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'VideoDisplay',
    data() {
        return {
            result: [],
            resultUrl:""
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
                this.result = res.data.items[0].id
                this.resultUrl = `https://www.youtube.com/embed/${this.result}`
            })
            .catch((err) => {
                console.log(err);
            })
        }
}
</script>
