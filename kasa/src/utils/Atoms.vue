<script>
    import { RouterLink } from 'vue-router';
    import styled from '@magister_zito/vue3-styled-components';
    import colors from './colors'

    const StyledLink = styled(RouterLink)`
        text-decoration: none;
        color: #${colors.primary};
            &:hover {
                text-decoration: underline;
            }
    `
    StyledLink.name = 'StyledLink'

    export { StyledLink }
</script>