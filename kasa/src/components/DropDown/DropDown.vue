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
                <DropDownEquipment v-for="equipment in equipments">
                    {{ equipment }}
                </DropDownEquipment>
            </DropDownEquipments>
            <span v-else>
                {{ props.description }}
            </span>
        </DropDownDescription>
    </DropDownContainer>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { DropDownContainer, DropDownHeader, DropDownTitle, DropDownArrowContainer, DropDownArrow, DropDownDescription, DropDownEquipment, DropDownEquipments } from './DropDown.style';
    import arrowDown from "../../assets/images/arrowDown.png"
    import arrowUp from "../../assets/images/arrowUp.png"

    const props = withDefaults(defineProps<{
        title?: string
        description?: string | Array<string>
        renting?: boolean
    }>(), {
        title: 'Non spécifié',
        description: 'Non spécifié',
        renting: true
    })
    const isOpen = props.renting? ref(true) : ref(false)
    let equipments: Array<string> = []

    if(typeof(props.description)  == 'object') {
        equipments = [...props.description]
    }
</script>