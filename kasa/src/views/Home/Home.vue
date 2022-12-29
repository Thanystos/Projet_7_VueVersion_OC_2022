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

    const rentingsList = rentingJson
</script>