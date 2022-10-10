<template>
    <v-text-field label="UserName" v-model="name" :counter="10" required/>
</template>


<script>
export default {
  name: 'UserTextField',
  props:{
    name: { type: String, required: true },
  }
}
</script>