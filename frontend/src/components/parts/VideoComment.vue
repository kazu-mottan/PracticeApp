<template>
  <div>
    <!--翻訳ボタン部分-->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.9.0/css/flag-icon.css"
      rel="stylesheet"
    />
    <p>selected: {{selected}}</p>
    <div class="translate-button-area">
      <v-btn-toggle
        v-model="selected"
        class="margin-right: auto"
        mandatory
      >
        <v-btn @click="translate('EN')">
          <i class="flag-icon flag-icon-us"></i>
        </v-btn>
        <v-btn @click="translate('JA')">
          <i class="flag-icon flag-icon-jp"></i>
        </v-btn>
        <v-btn @click="translate('ZH')">
          <i class="flag-icon flag-icon-cn"></i>
        </v-btn>
      </v-btn-toggle>
    </div>
    <!-- コメント表示部分 -->
    <v-list v-model = "open">
        <!-- <v-list-item title="Comments"></v-list-item> -->
        <ul v-if = "comments">
            <li v-for = "comment in comments" :key = comment >
            <v-list-group>
            <template v-slot:activator="{ props }">
                <v-list-item v-bind = "props">
                    <v-list-item-content>
                        <p v-html="htmlText(comment.topLevelComment)"/>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-list-item>
                <v-list-item-content>
                    <p v-html="htmlText(comment.replies)"/>
                </v-list-item-content>
            </v-list-item>
            </v-list-group>
            </li>
        </ul>
    </v-list>
  </div>
</template>

<script>
import * as youtube from "../../youtube/index"
import * as deepl from "../../youtube/deepl"

    const count = 5
    
    export default {
        name: 'VideoComment',
        data() {
            return {
                comments: [],
            }
        },
        async mounted() {
            const result = await youtube.commentThreads(count)
                result.data.items.forEach(item => {
                    this.comments.push({
                        topLevelComment: item.snippet.topLevelComment.snippet.textDisplay+ "\n" + "\n",
                        replies: item.replies ? item.replies.comments.map(comment => comment.snippet.textDisplay + "\n" + "\n").reverse() + "\n" : null
                    })
                });
        },
        methods:  {
            htmlText(msg){
            if(msg){
                return msg.replace(/\r?\n/g, '<br>').replace(/,/g, "")
                }
            },
            async translate(value){
              const result = await deepl.conversion(this.comments, value)
              for(let i = 0; i < result.length; i++){
                this.comments[0].topLevelComment = result[i].topLevelComment
                this.comments[0].replies = result[i].replies
              }
            }
        },
    }
</script>
<style scoped>
.comment-area {
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: whitesmoke;
  width: 100%;
  height: 70vh;
  overflow: auto;
}
.translate-button-area {
  display: flex;
  justify-content: center;
}
</style>
