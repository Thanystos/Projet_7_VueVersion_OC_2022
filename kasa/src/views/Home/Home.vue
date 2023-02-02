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
                <RouterLink v-for="rentingList in rentingsList"
                    :key="`renting-${ rentingList.id }`"
                    :to="`/Fiche-Logement/${ rentingList.id }`"
                >
                    <Card
                        :key="`${ rentingList.title }-${ rentingList.id }`"
                        :title=rentingList.title
                        :cover=rentingList.cover
                        :box-shadow=rentingList.boxShadow
                    />
                </RouterLink>
            </CardsContainer>
        </HomeContainer>
    </HomeWrapper>
</template>

<script setup lang="ts">
    import { HomeWrapper, HomeContainer, SloganContainer, SloganImg, Slogan, CardsContainer } from './Home.style';
    import sloganImg from '../../assets/images/sloganImg.png'
    import Card from '../../components/Card/Card.vue';
    import rentingJson from '../../assets/logements.json'
    import { isBright } from '../../functions/onImages.js'

    let rentingsList = rentingJson;
    let i=-1;

    for(let renting of rentingsList) {
        i++;
        setTimeout(() => {
            const image = new Image();
        image.src = 'https://cors-anywhere.herokuapp.com/' + renting.cover;
        image.crossOrigin = 'anonymous';
        image.onload = function() {
            renting.isBright = isBright(image);
        }
        }, 5000 * i);
    }
</script>