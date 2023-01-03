import styled from "@magister_zito/vue3-styled-components";
import colors from "../../utils/colors";

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 263px;
`
HomeWrapper.name = 'HomeWrapper'

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 200px);

    @media screen and (max-width: 635px) {
        width: 335px;
    }
`
HomeContainer.name = 'HomeContainer'

const SloganContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 43px;
    min-width: 335px;

    @media screen and (max-width: 635px) {
        height: 111px;
        margin-bottom: 22px;
    }
`
SloganContainer.name = 'SloganContainer'

const SloganImg = styled.img`
    filter: brightness(60%);
    object-fit: cover;
    border-radius: 25px;
    width: 100%;
    min-height: 111px;
    
    @media screen and (max-width: 635px) {
        height: 111px;
    }
`
SloganImg.name = 'SloganImg'

const Slogan = styled.h1`
    position: absolute;
    color: white;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 635px) {
        width: 217px;
        text-align: left;
        left: 16px;
        font-size: 24px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 32px;
    }
`
Slogan.name = 'Slogan'

const CardsContainer = styled.div.attrs({className: 'test'})`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 100px);
    min-width: 235px;
    border-radius: 25px;
    padding: 56px 50px;
    background-color: #${colors.secondary};

    @media screen and (max-width: 635px) {
        background-color: white;
        padding: 0px;
        width: 100%;
    }

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
CardsContainer.name = 'CardContainer'

export { HomeWrapper, HomeContainer, SloganContainer, SloganImg, Slogan, CardsContainer }