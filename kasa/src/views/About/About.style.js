import styled from "@magister_zito/vue3-styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 635px) {
        padding-bottom: 263px;
    }
`

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 200px);
    min-width: 335px;
    
    @media screen and (max-width: 635px) {
        width: 335px;
    }
`

export const AboutImgContainer = styled.div`
    height: 223px;
    border-radius: 25px;
    width: 100%;
`

export const AboutImg = styled.img`
    filter: brightness(60%);
    object-fit: cover;
    border-radius: 25px;
    width: 100%;
    height: 223px;
`

export const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 200px);
    min-width: 335px;
    margin-top: 31px;

    @media screen and (max-width: 635px) {
        width: 100%;
        margin-top: 19px;
    }
`