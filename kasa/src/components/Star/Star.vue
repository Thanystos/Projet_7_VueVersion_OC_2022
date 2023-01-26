<template>
    <StarImg v-if="props.index<=ratingNb" :src=switchColor() />
    <StarImg v-else :src=emptiedStar />
</template>

<script setup lang="ts">
import { StarImg } from './Star.style';
import emptiedStar from '../../assets/images/emptiedStar.png'
import filledStar from '../../assets/images/filledStar.png'
import black from '../../assets/images/black.png'

const props = withDefaults(defineProps<{
    index: number
    rating: string
    color?: string
}>(), {
    color: "orange"
})

const ratingNb = parseInt(props.rating);

function switchColor () {
    switch (props.color) {
        case "orange":
            return filledStar
        case "black":
            return black
    }
}
</script>