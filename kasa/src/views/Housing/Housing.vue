<template>
    <PageNotFound v-if="renting === undefined" />
    <RentingWrapper v-else>
        <RentingContainer>
            <Slideshow 
                :pictures=renting.pictures
                :boxShadow=renting.boxShadow
            />
            <RentingCommonInfos>
                <RentingLocationInfos>
                    <RentingLocationTitle>
                        {{renting.title}}
                    </RentingLocationTitle>
                    <RentingLocationSubtitle>
                        {{renting.location}}
                    </RentingLocationSubtitle>
                    <RentingLocationTags>
                        <Tag v-for="tag in renting.tags"
                            :key=tag
                            :title=tag
                        />
                    </RentingLocationTags>
                </RentingLocationInfos>
                <RentingLocationOwner>
                    <RentingLocationOwnerInfos>
                        <RentingLocationOwnerName>
                            {{renting.host.name}}
                        </RentingLocationOwnerName>
                        <RentingLocationOwnerPictureContainer>
                            <RentingLocationOwnerPicture :src=renting.host.picture />
                        </RentingLocationOwnerPictureContainer>
                    </RentingLocationOwnerInfos>
                    <RentingLocationOwnerRating>
                        <StarList :rating=renting.rating :color=renting.color />
                    </RentingLocationOwnerRating>
                </RentingLocationOwner>
            </RentingCommonInfos>
            <DropDownContainer>
                <DropDown
                    title = 'Description'
                    :description=renting.description
                    :renting=true
                />
                <DropDown
                    title = 'Équipements'
                    :description=renting.equipments
                    :renting=true
                />
            </DropDownContainer>
        </RentingContainer>
    </RentingWrapper>
</template>

<script setup>
    import { RentingWrapper, RentingContainer, RentingCommonInfos, RentingLocationInfos, 
        RentingLocationTitle, RentingLocationSubtitle, RentingLocationTags, RentingLocationOwner, 
        RentingLocationOwnerInfos, RentingLocationOwnerName, RentingLocationOwnerPictureContainer, 
        RentingLocationOwnerPicture, RentingLocationOwnerRating, DropDownContainer } from './Housing.style'
    import StarList from '../../components/StarList/StarList.vue'
    import PageNotFound from '../PageNotFound/PageNotFound.vue'
    import Slideshow from '../../components/Slideshow/Slideshow.vue'
    import Tag from '../../components/Tag/Tag.vue'
    import DropDown from '../../components/DropDown/DropDown.vue'
    import rentingJson from '../../assets/logements.json'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const rentingId = route.params.id
    const rentings = rentingJson
    const renting = rentings.find((renting) => renting.id === rentingId)
</script>