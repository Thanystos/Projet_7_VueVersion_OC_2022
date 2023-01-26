import styled from "@magister_zito/vue3-styled-components";

const cardProps = { cover: String, boxShadow: Boolean }

const CardWrapper = styled("div", cardProps)`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 340px;
    border-radius: 10px;
    margin-bottom: 50px;
    background-size: cover;
    background-image: 
        linear-gradient(
            rgba(${props => props.boxShadow ? '255, 255, 255, 0' : '0, 0, 0, 0'}), 
            rgba(${props => props.boxShadow ? '0, 0, 0, 0.5' : '0, 0, 0, 0'})
        ),
        url(${ props => props.cover });

        @media screen and (max-width: 635px) {
            width: 335px;
            height: 255px;
            margin-bottom: 20px;
        }
`
CardWrapper.name = 'CardWrapper'

const CardTitle = styled.h2`
    width: 300px;
    height: 52px;
    color: white;
    position: absolute;
    margin: 0px;
    padding: 0px 20px 20px 20px;
    font-size: 18px;
`
CardTitle.name = 'CardTitle'

export { CardWrapper, CardTitle }