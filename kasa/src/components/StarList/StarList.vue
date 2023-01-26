<template>
    <StarList v-for="index in 5">
        <Star :index=index :rating=props.rating :color=props.color />
    </StarList>
</template>

<script setup lang="ts">
import { StarList } from './StarList.style'
import Star from '../Star/Star.vue'

const props = withDefaults(defineProps<{
    rating: string
    color?: string
}>(), {
    color: "orange"
})
</script>