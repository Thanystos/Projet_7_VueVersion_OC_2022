import styled from "@magister_zito/vue3-styled-components"

const StarList = styled.div`
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
StarList.name = 'StarList'

export { StarList }