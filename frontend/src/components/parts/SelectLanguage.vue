<template>
    <v-select
        label="Select your language"
        :rules="[v => !!v || 'Item is required']"
        required
    ></v-select>
</template>

<script>
export default {
    name: 'SelectLanguage',
    data: () => ({
        select: null,
    }),
}
</script>