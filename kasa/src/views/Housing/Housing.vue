<template>
    <RentingWrapper>
        <RentingContainer>
            <Slideshow 
                
            />
            <RentingCommonInfos>
                <RentingLocationInfos>
                    <RentingLocationTitle>
                        {{ value.title }}
                    </RentingLocationTitle>
                    <RentingLocationSubtitle>
                        {{ value.location }}
                    </RentingLocationSubtitle>
                    <RentingLocationTags>
                       
                    </RentingLocationTags>
                </RentingLocationInfos>
            </RentingCommonInfos>
        </RentingContainer>
    </RentingWrapper>
</template>

<script setup>
    import { RentingWrapper, RentingContainer, RentingCommonInfos, RentingLocationInfos, 
        RentingLocationTitle, RentingLocationSubtitle, RentingLocationTags, RentingLocationOwner, 
        RentingLocationOwnerInfos, RentingLocationOwnerName, RentingLocationOwnerPictureContainer, 
        RentingLocationOwnerPicture, RentingLocationOwnerRating, 
        RentingLocationOwnerRatingImgContainer, RentingLocationOwnerRatingImg, DropDownContainer } from './Housing.style'
    import PageNotFound from '../PageNotFound/PageNotFound.vue'
    import Slideshow from '../../components/Slideshow/Slideshow.vue'
    import Tag from '../../components/Tag/Tag.vue'
    import DropDown from '../../components/DropDown/DropDown.vue'
    import colors from '../../utils/colors'
    import emptiedStar from '../../assets/images/emptiedStar.png'
    import filledStar from '../../assets/images/filledStar.png'
    import rentingJson from '../../assets/logements.json'
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute()
    const router = useRouter()

    const {id: rentingId } = route.params.id
    const rentingsList = rentingJson
    const stars = []

        // trouver le bon index ainsi que le tableau d'étoiles ici et non dans le template 
</script>