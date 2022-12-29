import styled from "@magister_zito/vue3-styled-components"
import colors from "../../utils/colors"

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #${colors.primary};
`

export const NotFoundCode = styled.h1`
    height: 263px;
    line-height: 263px;
    font-size: 288px;
    font-weight: 700;
    margin-top: 111.97px;
    margin-bottom: 66px;

    @media screen and (max-width: 635px) {
        height: 99px;
        line-height: 99px;
        font-size: 96px;
        margin-top: 135.71;
        margin-bottom: 11px;
    }
`

export const NotFoundMessage = styled.h2`
    height: 51px;
    line-height: 25.67px;
    font-size: 36px;
    margin-bottom: 182px;
    text-align: center;

    @media screen and (max-width: 635px) {
        width: 260px;
        font-size: 18px;
        margin-bottom: 133px;
    }
`

export const StyledLinkContainer = styled.div`
    font-size: 18px;

    @media screen and (max-width: 635px) {
        font-size: 14px;
    }
`