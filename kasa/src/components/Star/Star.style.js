import styled from "@magister_zito/vue3-styled-components"

const StarContainer = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 10px;

    @media screen and (max-width: 635px) {
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 22.5px;
        height: 22.5px;
        margin-right: 5px;
    }
`
StarContainer.name = 'StarContainer'

const StarImg = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;

    @media screen and (max-width: 900px) {
        width: 15px;
        height: 15px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 22.5px;
        height: 22.5px;
        margin-right: 5px;
    }
`
StarImg.name = 'StarImg'

export { StarContainer, StarImg }