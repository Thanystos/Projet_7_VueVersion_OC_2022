<template>
    <TagContainer>
        <TagTitle>
            {{ title }}
        </TagTitle>
    </TagContainer>
</template>

<script setup>
    import { TagContainer, TagTitle } from './Tag.style';

    const props = defineProps({
        title: {
            type: String,
            default: 'Non spécifié'
        }
    })
</script>