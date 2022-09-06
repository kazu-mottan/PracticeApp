<template>
    <v-select
        :items="items"
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
        items: ['Japanese', 'English', 'Chinese', 'Arabic'],
    }),
}
</script>