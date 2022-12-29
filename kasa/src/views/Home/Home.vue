<template>
    <HomeWrapper>
        <HomeContainer>
            <SloganContainer>
                <SloganImg :src=sloganImg />
                <Slogan>
                    Chez vous, partout et ailleurs
                </Slogan>
            </SloganContainer>
            <CardsContainer>

            </CardsContainer>
        </HomeContainer>
    </HomeWrapper>
</template>

<script setup>
    import { HomeWrapper, HomeContainer, SloganContainer, SloganImg, Slogan, CardsContainer } from './Home.style';
    import sloganImg from '../../assets/images/sloganImg.png'
    import Card from '../../components/Card/Card.vue';
</script>