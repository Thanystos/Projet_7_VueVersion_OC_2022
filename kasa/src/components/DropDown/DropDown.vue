<template>
    <DropDownContainer :renting=renting @click="isOpen=!isOpen">
        <DropDownHeader :renting=renting>
            <DropDownTitle>
                {{ title }}
            </DropDownTitle>
            <DropDownArrowContainer>
                <DropDownArrow :src="isOpen ? arrowUp : arrowDown" />
            </DropDownArrowContainer> 
        </DropDownHeader>
        <DropDownDescription :renting=renting :isOpen=isOpen>
            <DropDownEquipments v-if="equipments.length !==0">
                
            </DropDownEquipments>
            <span v-else>{{ props.description }}</span>
        </DropDownDescription>
    </DropDownContainer>
</template>

<script setup>
    import { ref } from 'vue';
    import { DropDownContainer, DropDownHeader, DropDownTitle, DropDownArrowContainer, DropDownArrow, DropDownDescription, DropDownEquipment, DropDownEquipments } from './DropDown.style';
    import arrowDown from "../../assets/images/arrowDown.png"
    import arrowUp from "../../assets/images/arrowUp.png"

    const isOpen = ref(false)
    const equipments = []

    if(typeof(description)  == 'object') {
        equipments = [...props.description]
    }

    const props = defineProps({
        title: {
            type: String,
            default: 'Non spécifié'
        },
        description: {
            type: String,
            default: 'Non spécifié'
        },
        renting: {
            type: Boolean,
            default: true
        }
    })
</script>