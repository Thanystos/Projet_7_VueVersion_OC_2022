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

<script setup>
    import { HomeWrapper, HomeContainer, SloganContainer, SloganImg, Slogan, CardsContainer } from './Home.style';
    import sloganImg from '../../assets/images/sloganImg.png'
    import Card from '../../components/Card/Card.vue';
    import rentingJson from '../../assets/logements.json'
    //import { isLight } from '../../functions/onImages.js'

    let rentingsList = rentingJson;

    /*let isLightTab = [];
    let i=0;

    //for(let renting of rentingsList) {
        //console.log(isLightTab[0] = isLight(renting.cover));
        //i++;
    //}
   //console.log(isLight(rentingsList[0].cover));*/
</script>