<template>
    <v-text-field label="UserName" v-model="username" :counter="10" required/>
</template>


<script>
export default {
  username: 'UserTextField',
  props:{
    name: { type: String, required: true },
  }
}
</script>