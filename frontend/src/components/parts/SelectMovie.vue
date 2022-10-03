<template>  
    <v-select
        v-model="select"
        :items="items"
        label="Standard"
        required
    ></v-select>
</template>


<script>
export default {
  name: 'SelectMovie',
  data: () => ({
    select: null,
    items: ['Travel', 'Game', 'Legal', 'FooBuzz'],
  }),
}
</script>