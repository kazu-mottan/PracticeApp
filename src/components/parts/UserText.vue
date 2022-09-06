<template>  
    <v-text-field label="UserName" v-model="name" :type="type" :name="name" :value="value"/>
</template>


<script>
export default {
  name: 'UserText',
  props:{
    name: { type: String, required: true },
  }
}
</script>