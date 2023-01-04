<template>
    <NavContainer>
        <RouterLink to="/">
            <NavLogo :src='navlogo'/>
        </RouterLink>
        <NavLink>
            <StyledLinkContainer>
                <StyledLink to="/">
                    Accueil
                </StyledLink>
            </StyledLinkContainer>
            <StyledLinkContainer>
                <StyledLink to="/A-Propos">
                    A Propos
                </StyledLink>
            </StyledLinkContainer>
        </NavLink>
    </NavContainer>
</template>

<script setup>
    import { NavContainer, NavLogo, StyledLinkContainer, NavLink } from './Header.style';
    import { StyledLink } from '../../utils/Atoms.vue';
    import navlogo from '../../assets/images/navLogo.png'
    
</script>