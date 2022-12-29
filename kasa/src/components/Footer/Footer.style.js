import styled from "@magister_zito/vue3-styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0px auto;
    padding: 66px 0px 29px 0px;
    background-color: black;
    width: 100%;
    max-width: 1440px;
    position: absolute;
        bottom: 0;

    @media screen and (max-width: 635px) {
        padding: 62px 0px 62px 0px;
        min-width: 375px;
    }
`

export const FooterLogo = styled.img`
    width: 122px;
    height: 39px;
`

export const FooterRights = styled.div`
    height: 46px;
    line-height: 46px;
    font-size: 24px;
    color: white;

    @media screen and (max-width: 635px) {
            font-size: 12px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 18px;
    }
`