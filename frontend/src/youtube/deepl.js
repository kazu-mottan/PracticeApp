import axios from "axios";
const API_URL = "https://api-free.deepl.com/v2/translate"
const API_KEY = "b7187a06-56c9-ad76-ca4b-361191f2f38b:fx"

let comments = []

export async function conversion(data, lang) {
    for(let i = 0; i < 1; i++){
        let originalComment = data[Object.keys(data)[i]].topLevelComment;
        let originalThread = data[Object.keys(data)[i]].replies;

        let translatedComment = await getResult(originalComment, lang);
        let translatedThread = await getResult(originalThread, lang);
        
        comments.push({
            topLevelComment: translatedComment,
            replies: (translatedThread == "null") ? null : translatedThread
        })
    }
    return comments;
}

const getResult = async (text, lang) => {
    let params = new URLSearchParams();
    params.append("auth_key", API_KEY);
    params.append("text", text);
    params.append("target_lang", lang);
    return await axios.post(API_URL, params)
    .then((res)=>{
        return res.data["translations"][0]["text"]
    }).catch((err)=>{
        console.log(err);
    })
}
