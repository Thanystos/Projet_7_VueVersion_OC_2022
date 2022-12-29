import styled from "@magister_zito/vue3-styled-components";

const cardProps = { imgUrl: String }

export const CardWrapper = styled("div", cardProps)`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    margin-bottom: 50px;
    background-size: cover;
    background-image: 
        linear-gradient(
            rgba(255, 255, 255, 0), 
            rgba(0, 0, 0, 0.5)
        ),
        url(${props => props.imgUrl ? 'https://cdn.pixabay.com/photo/2022/01/06/22/30/new-year-6920394_1280.jpg' : props.imgUrl});

        @media screen and (max-width: 635px) {
            width: 335px;
            height: 255px;
            margin-bottom: 20px;
        }
`

export const CardTitle = styled.h2`
    width: 300px;
    height: 52px;
    color: white;
    position: absolute;
    margin: 0px;
    padding: 0px 20px 20px 20px;
    font-size: 18px;
`