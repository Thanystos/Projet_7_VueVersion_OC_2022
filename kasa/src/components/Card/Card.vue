<template>
    <CardWrapper :cover=cover :boxShadow=boxShadow>
        <CardTitle>{{ title }}</CardTitle>
    </CardWrapper>
</template>

<script setup lang="ts">
    import { CardWrapper, CardTitle } from './Card.style';

    /* SANS TYPESCRIPT
    const props = defineProps({
        title: {
            type: String,
            default: 'Non spécifié'
        },
        cover: {
            type: String
        }
    })*/

    withDefaults(defineProps<{
        title?: string
        cover: string
        boxShadow?: boolean
    }>(), {
        title: 'Non spécifié',
        boxShadow: true
    })
</script>