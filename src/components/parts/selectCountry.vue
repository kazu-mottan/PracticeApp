<template>  
    <v-select
        :items="items"
        label="Select your country"
    ></v-select>
</template>

<script>
export default {
    name: 'selectCountry',
    data: () => ({
        items: ['Japan', 'United States', 'United Kingdom', 'China', 'Taiwan', 'Spain', 'Germany', 'Canada'],
    }),
}
</script>