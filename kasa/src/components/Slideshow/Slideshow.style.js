import styled from '@magister_zito/vue3-styled-components'

const slideProps = { pictures: String }

const SlideContainer = styled.div`
    width: 100%;
    min-width: 335px;
    height: 415px;
    position: relative;

    @media screen and (max-width: 635px) {
        height: 255px;
        width: 335px;
    }
`
SlideContainer.name = 'SlideContainer'

const SlideImg = styled.img`
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;

    @media screen and (max-width: 635px) {
        height: 255px;
    }
`
SlideImg.name = 'SlideImg'

const SlidePrev = styled("img", slideProps)`
    width: 46.68px;
    height: 79.2px;
    position: absolute;
    top: 167.9px;
    left: 23.36px;
    display: ${props => props.pictures.length < 2 ? 'none' : 'block'};
    

    @media screen and (max-width: 635px) {
        width: 11.67px;
        height: 19.8px;
        top: 117.6px
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 18.90px;
        height: 32.07px;
        top: 191.465px
    }
`
SlidePrev.name = 'SlidePrev'

const SlideNext = styled("img", slideProps)`
    width: 46.68px;
    height: 79.2px;
    position: absolute;
    top: 167.9px;
    right: 23.36px;
    display: ${props => props.pictures.length < 2 ? 'none' : 'block'};

    @media screen and (max-width: 635px) {
        width: 11.67px;
        height: 19.8px;
        top: 117.6px
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 18.90px;
        height: 32.07px;
        top: 191.465px
    }
`
SlideNext.name = 'SlideNext'

const SlideNumber = styled("div", slideProps)`
    width: 24px;
    height: 32.4px;
    font-size: 18px;
    text-align: center;
    position: absolute;
    bottom: 24.92px;
    right: 48%;
    color: white;
    display: ${props => props.pictures.length < 2 ? 'none' : 'block'};
`
SlideNumber.name = 'SlideNumber'

export { SlideContainer, SlideImg, SlidePrev, SlideNext, SlideNumber }