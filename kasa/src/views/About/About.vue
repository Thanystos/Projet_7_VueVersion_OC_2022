<template>
    <AboutWrapper>
        <AboutContainer>
            <AboutImgContainer>
                <AboutImg :src=aboutImg />
            </AboutImgContainer>
            <DropDownContainer>
                <DropDown 
                    title='Fiabilité'
                    :description=aboutDescription[0]
                    :renting=renting
                />
                <DropDown 
                    title='Respect'
                    :description=aboutDescription[1]
                    :renting=renting
                />
                <DropDown 
                    title='Service'
                    :description=aboutDescription[2]
                    :renting=renting
                />
                <DropDown 
                    title='Sécurité'
                    :description=aboutDescription[3]
                    :renting=renting
                />
            </DropDownContainer>
        </AboutContainer>
    </AboutWrapper>
</template>

<script setup>
    import { ref } from 'vue';
    import { AboutWrapper, AboutContainer, AboutImgContainer, AboutImg, DropDownContainer } from './About.style.js';
    import DropDown from '../../components/DropDown/DropDown.vue'
    import aboutImg from '../../assets/images/aboutImg.png'

    const aboutDescription = ref([
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    ])
    const renting = ref(false)
</script>