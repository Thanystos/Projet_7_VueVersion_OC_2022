<template>
    <NotFoundContainer>
        <NotFoundCode>
            404
        </NotFoundCode>
        <NotFoundMessage>
            Oups ! La page que vous demandez n'existe pas.
        </NotFoundMessage>
        <StyledLinkContainer>
            <StyledLink to="/">
                Retourner sur la page d'accueil
            </StyledLink>
        </StyledLinkContainer>
    </NotFoundContainer>
</template>

<script setup>
    import { NotFoundContainer, NotFoundCode, NotFoundMessage, StyledLinkContainer } from './PageNotFound.style';
    import { StyledLink } from '../../utils/Atoms.vue';
</script>