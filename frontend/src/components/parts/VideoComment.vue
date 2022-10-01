<template>
    <div>
        <div v-for="comment in comments" :key="comment">
            <p v-html="htmlText(comment)"></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const KEY = 'AIzaSyA7NKWOKZ8Stvt0Zf9cAh5VP1GPHdg4y94'
const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})
let count = 7

export default {
    name: 'VideoComment',
    data() {
        return {
            comments: []
        }
    },
    mounted() {
        youtube.get('/commentThreads', {
            params: {
                part: 'snippet',
                videoId: 'I4ehUn3582o',
                maxResults: count,
                textFormat: 'html',
                order: 'relevance',
                key: KEY
            }
        })
        .then((res) => {
            console.log(res);
                // this.comments = res;
                const result = res
                this.commentList(result)
        })
        .catch((err) => {
            console.log(err);
        })
    },
    methods:  {
        commentList(result) {
            for(let i = 0; i < count; i++){
                this.comments.push(result.data.items[i].snippet.topLevelComment.snippet.textDisplay + '\n' + '\n')
            }
        },
        htmlText(msg){
        if(msg){
            return msg.replace(/\r?\n/g, '<br>')
            }
        }
    }
}
</script>
