<template>
    <FooterContainer>
        <RouterLink to="/">
            <FooterLogo src="../../src/assets/images/footerLogo.png" />
        </RouterLink>
        <FooterRights>
            © 2020 Kasa All rights reserved
        </FooterRights>
    </FooterContainer>
</template>

<script setup>
    import { FooterContainer, FooterLogo, FooterRights } from './Footer.style';
</script>