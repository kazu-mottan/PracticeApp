<template>  
    <v-select
        v-model="select"
        :items="items"
        label="Select your country"
        :rules="[v => !!v || 'Item is required']"
        required
    ></v-select>
</template>

<script>
export default {
    name: 'SelectCountry',
    data: () => ({
        select: null,
        items: ['Japan', 'United States', 'United Kingdom', 'China', 'Taiwan', 'Spain', 'Germany', 'Canada'],
    }),
}
</script>