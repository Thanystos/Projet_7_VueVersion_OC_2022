<template>
    <SlideContainer>
        <SlidePrev :src=prev :pictures=pictures :boxShadow=boxShadow @click="goToPrevious()" />
        <SlideImg :src=pictures[index] />
        <SlideNext :src=next :pictures=pictures :boxShadow=boxShadow @click="goToNext()" />
        <SlideNumber :box-shadow=boxShadow :pictures=pictures >
            {{ index + 1 }}/{{ pictures.length }}
        </SlideNumber>
    </SlideContainer>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { SlideContainer, SlideImg, SlidePrev, SlideNext, SlideNumber } from './Slideshow.style'
    import prev from '../../assets/images/prev.png'
    import next from '../../assets/images/next.png'

    const index = ref(0)

    const props = withDefaults(defineProps<{
        pictures: Array<string>
        boxShadow?: boolean
    }>(), {
        boxShadow: true
    })

    const goToPrevious = () => {
        const isFirstPicture = index.value === 0;
        index.value = isFirstPicture ? props.pictures.length - 1 : index.value - 1;
    }

    const goToNext = () => {
        const isLastPicture = index.value === props.pictures.length - 1;
        index.value = isLastPicture ? 0 : index.value + 1;
    }
</script>