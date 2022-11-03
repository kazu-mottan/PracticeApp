<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-textarea
        label="Comment field"
        v-model="comment"
        :counter="1000"
        :rules="commentRules"
        rows="2"
        hide-details="false"
        required
      >
      </v-textarea>
      <div class="text-area-button">
        <SubmitButton :disabled="!valid" @click="submitEvent"></SubmitButton>
      </div>
    </v-form>
  </div>
</template>

<script>
import SubmitButton from "./SubmitButton.vue";
export default {
  name: "VideoCommentSubmit",
  components: {
    SubmitButton,
  },
  data: () => ({
    valid: true,
    comment: "",
    commentRules: [
      (v) => !!v || "Comment is required",
      (v) =>
        (v && v.length <= 1000) || "Name must be less than 10 00 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.submitEvent();
    },
    submitEvent: function () {
      this.$router.push("/video");
      //コメント書き込み処理をここに書く
      this.comment = "SUCCESS";
    },
    computed: {},
  },
};
</script>

<style scoped>
.text-area-button {
  margin-top: 0.5rem;
  display: flex;
  justify-content: right;
}
</style>
