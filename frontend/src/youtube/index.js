import axios from 'axios'

const KEY = 'AIzaSyA7NKWOKZ8Stvt0Zf9cAh5VP1GPHdg4y94'
const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

export async function video() {
    return await youtube.get('/videos', {
        params: {
            part: 'snippet',
            id: 'I4ehUn3582o',
            key: KEY
            }
    })
    .then((res) => {
        console.log(res);
        return res
    })
    .catch((err) => {
        console.log(err);
    })
}

export async function videoInfo() {
    return await youtube.get('/videos', {
        params: {
            part: 'statistics',
            id: 'I4ehUn3582o',
            key: KEY
            }
    })
    .then((res) => {
        console.log(res);
        return res
    })
    .catch((err) => {
        console.log(err);
    })
}

export async function commentThreads(count) {
    return await youtube.get('/commentThreads', {
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
        return res
    })
    .catch((err) => {
        console.log(err);
    })
}

export async function comments(id) {
    return await youtube.get('/comments', {
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
        return res
    })
    .catch((err) => {
        console.log(err);
    })
}
