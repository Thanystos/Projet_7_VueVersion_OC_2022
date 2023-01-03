import styled from '@magister_zito/vue3-styled-components';

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 200px);
    max-width: 1240px;
    min-width: 335px;
    height: 68px;
    margin: 40px auto 63px auto;

    @media screen and (max-width: 635px) {
        width: 335px;
        height: 47px;
    }

    @media screen and (max-width: 900px) {
        margin: 20px auto 16px auto;
    }
`
NavContainer.name = 'NavContainer'

const NavLogo = styled.img`
    width: 210.32px;
    height: 68px;

    @media screen and (max-width: 635px) {
        width: 145px;
        height: 47px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        height: 57px;
        width: 176.29px;
    }
`
NavLogo.name = 'NavLogo'

const StyledLinkContainer = styled.div`
    margin-left: 70px;

    @media screen and (max-width: 635px) {
        margin-left: 10px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        margin-left: 40px;
    }
`
StyledLinkContainer.name = 'StyledLinkContainer'

const NavLink = styled.div`
    display: flex;
    justify-content: right;
    height: 34px;
    font-size: 24px;

    @media screen and (max-width: 635px) {
        height: 17px;
        font-size: 12px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 18px;
    }
`
NavLink.name = 'NavLink'

export { NavContainer, NavLogo, StyledLinkContainer, NavLink }