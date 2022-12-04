<template>  
    <v-select
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
    }),
}
</script>