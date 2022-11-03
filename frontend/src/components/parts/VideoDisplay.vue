<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ viewCount }}views・{{ date }}</p>
    <p>{{ likeCount }}likes</p>
    <iframe width="100%" height="300" :src="resultUrl"></iframe>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VideoDisplay",
  data() {
    return {
      result: [],
      resultUrl: "",
      title: "",
      date: "",
      viewCount: "",
      likeCount: "",
    };
  },
  mounted() {
    const KEY = "AIzaSyA7NKWOKZ8Stvt0Zf9cAh5VP1GPHdg4y94";
    const youtube = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
    });
    youtube
      .get("/videos", {
        params: {
          part: "snippet",
          id: "I4ehUn3582o",
          key: KEY,
        },
      })
      .then((res) => {
        console.log(res);
        this.result = res.data.items[0].id;
        // 関連動画は非表示かつ自動再生、ループ再生にする
        this.resultUrl = `https://www.youtube.com/embed/${this.result}?rel=0&autoplay=1&mute=1&playsinline=1&&loop=1&playlist=${this.result}`;
        this.title = res.data.items[0].snippet.title;
        const publishedDate = res.data.items[0].snippet.publishedAt;
        this.fixDate(publishedDate);
      })
      .catch((err) => {
        console.log(err);
      }),
      youtube
        .get("/videos", {
          params: {
            part: "statistics",
            id: "I4ehUn3582o",
            key: KEY,
          },
        })
        .then((res) => {
          console.log(res);
          this.viewCount = res.data.items[0].statistics.viewCount;
          this.likeCount = res.data.items[0].statistics.likeCount;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  methods: {
    fixDate(publishedDate) {
      // publishedAt: "2022-09-03T23:00:05Z"がデフォルトで表示されるため、正規表現で2022/09/03に整形している
      this.date = publishedDate.slice(0, 10).replace(/-/g, "/");
    },
  },
};
</script>
