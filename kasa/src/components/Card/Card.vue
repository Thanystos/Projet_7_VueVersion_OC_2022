<template>
    <CardWrapper :cover="cover">
        <CardTitle>{{ title }}</CardTitle>
    </CardWrapper>
</template>

<script setup>
    import { CardWrapper, CardTitle } from './Card.style';

    const props = defineProps({
        title: {
            type: String,
            default: 'Non spécifié'
        },
        cover: {
            type: String,
            default:''
        }
    })
</script>