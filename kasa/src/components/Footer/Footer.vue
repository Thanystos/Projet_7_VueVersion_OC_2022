<template>
    <FooterContainer>
        <RouterLink to="/">
            <FooterLogo :src='footerLogo' />
        </RouterLink>
        <FooterRights>
            © 2020 Kasa All rights reserved
        </FooterRights>
    </FooterContainer>
</template>

<script setup>
    import { FooterContainer, FooterLogo, FooterRights } from './Footer.style';
    import footerLogo from '../../assets/images/footerLogo.png'
</script>