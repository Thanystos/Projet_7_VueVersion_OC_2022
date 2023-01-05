<template>
    <TagContainer>
        <TagTitle>
            {{ title }}
        </TagTitle>
    </TagContainer>
</template>

<script setup lang="ts">
    import { TagContainer, TagTitle } from './Tag.style';

    withDefaults(defineProps<{
        title?: string
    }>(), {
        title: 'Non spécifié',
    })
</script>