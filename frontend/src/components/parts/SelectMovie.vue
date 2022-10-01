<template>  
    <v-select
        :items="items"
        label="Standard"
    ></v-select>
</template>


<script>
export default {
  name: 'SelectMovie',
  data: () => ({
    items: ['Travel', 'Game', 'Legal', 'FooBuzz'],
  }),
}
</script>