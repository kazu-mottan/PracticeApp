<template>
    <div>
        <!-- メインコメントの表示、またサブコメントは表示・非表示にすることを踏まえ、commentとthreadの2つに分けています。 -->
        <div v-for="comment in comments" :key="comment">
            <p v-html="htmlText(comment)"></p>
        </div>
        <div v-for="thread in threads" :key="thread">
            <p v-html="htmlText(thread)"></p>
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
            comments: [],
            threads: []
        }
    },
    mounted() {
        youtube.get('/commentThreads', {
            params: {
                part: 'snippet, replies',
                videoId: 'I4ehUn3582o',
                maxResults: count,
                textFormat: 'html',
                order: 'relevance',
                key: KEY
            }
        })
        .then((res) => {
            console.log(res);
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
                if(result.data.items[i].replies == null) continue;

                // コメントに返信がついている場合の取得処理
                if(result.data.items[i].replies.comments.length == result.data.items[i].snippet.totalReplyCount) {
                    for(let j = 0; j < result.data.items[i].replies.comments.length; j++) {
                        this.threads.push(result.data.items[i].replies.comments[j].snippet.textDisplay + '\n' + '\n')
                    }
                // コメントに対する返信が省略されている場合の処理
                }else {
                    this.getReplies(result.data.items[i].snippet.topLevelComment.id)
                }
            }
        },
        getReplies(id) {
            youtube.get('/comments', {
                params: {
                    part: 'id, snippet',
                    parentId: id,
                    maxResults: 50,
                    textFormat: 'html',
                    key: KEY
                }
            })
            .then((res) => {
                console.log(res)
                for(let k = 0; k < res.data.items.length; k++) {
                    this.threads.push(res.data.items[k].snippet.textDisplay + '\n' + '\n')
                }
            })
            .catch((err) => {
                console.log(err);
            })
        },
        htmlText(msg){
        if(msg){
            return msg.replace(/\r?\n/g, '<br>')
            }
        }
    }
}
</script>
