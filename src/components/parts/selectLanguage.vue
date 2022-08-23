<template>
    <v-select
        :items="items"
        label="Select your language"
    ></v-select>
</template>

<script>
export default {
    name: 'selectLanguage',
    data: () => ({
        items: ['Japanese', 'English', 'Chinese', 'Arabic'],
    }),
}
</script>