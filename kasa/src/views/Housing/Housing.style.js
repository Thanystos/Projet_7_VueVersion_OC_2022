import styled from '@magister_zito/vue3-styled-components'
import colors from '../../utils/colors'

const RentingWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 635px) and (max-width: 900px) {
        padding-bottom: 263px;
    }
`
RentingWrapper.name = 'RentingWrapper'

const RentingContainer = styled.div`
    width: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    @media screen and (max-width: 635px) {
        width: 335px;
    }
`
RentingContainer.name = 'RentingContainer'

const RentingCommonInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    color: #${colors.primary};

    @media screen and (max-width: 900px) {
        margin-top: 15px;
        flex-direction: column;
    }
`
RentingCommonInfos.name = 'RentingCommonInfos'

const RentingLocationInfos = styled.div`
    display: flex;
    flex-direction: column;
`
RentingLocationInfos.name = 'RentingLocationInfos'

const RentingLocationTitle = styled.h2`
    height: 51px;
    font-size: 36px;
    line-height: 51px;

    @media screen and (max-width: 635px) {
        font-size: 18px;
        height: 46px;
        margin-bottom: 5px;
    }

    @media screen and (min-width: 635px) and (max-width: 1350px) {
        font-size: 22px;
    }

    @media screen and (max-width: 1350px) {
        line-height: 25.67px;
    }
`
RentingLocationTitle.name = 'RentingLocationTitle'

const RentingLocationSubtitle = styled.h3`
    height: 26px;
    font-size: 18px;
    line-height: 26px;

    @media screen and (max-width: 635px) {
        height: 22px;
        font-size: 14px;
        line-height: 22px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 18px;    
    }
`
RentingLocationSubtitle.name = 'RentingLocationSubtitle'

const RentingLocationTags = styled.div`
    display: flex;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        margin-top: 10px;
    }

`
RentingLocationTags.name = 'RentingLocationTags'

const RentingLocationOwner = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        height: 32px;
        margin-top: 16.5px;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
`
RentingLocationOwner.name = 'RentingLocationOwner'

const RentingLocationOwnerInfos = styled.div`
    display: flex;
    align-items: center;
    height: 64px;

    @media screen and (max-width: 900px) {
        height: 32px;
    }    
`
RentingLocationOwnerInfos.name = 'RentingLocationOwnerInfos'

const RentingLocationOwnerName = styled.div`
    height: 52px;
    font-size: 18px;
    line-height: 52px;
    margin-right: 10px;

    @media screen and (max-width: 635px) {
        height: 33px;
        font-size: 12px;
        line-height: 33px;
        margin-right: 10.5px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 16px;
    }
`
RentingLocationOwnerName.name = 'RentingLocationOwnerName'

const RentingLocationOwnerPictureContainer = styled.div`
    width: 64px;
    height: 64px;

    @media screen and (max-width: 900px) {
        width: 32px;
        height: 32px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 48px;
        height: 48px;
    }
`
RentingLocationOwnerPictureContainer.name = 'RentingLocationOwnerPictureContainer'

const RentingLocationOwnerPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: contain;

    @media screen and (max-width: 635px) {
        width: 32px;
        height: 32px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        width: 48px;
        height: 48px;
    }
`
RentingLocationOwnerPicture.name = 'RentingLocationOwnirPicture'

const RentingLocationOwnerRating = styled.div`
    display: flex;
    width: 190px;
    margin-top: 24px;

    @media screen and (max-width: 900px) {
        width: 95px;
        margin-top: 0px;
    }
`
RentingLocationOwnerRating.name = 'RentingLocationOwnerRating'

const RentingLocationOwnerRatingImgContainer = styled.div`
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
RentingLocationOwnerRatingImgContainer.name = 'RentingLocationOwnerRatingImgContainer'

const RentingLocationOwnerRatingImg = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;

    @media screen and (max-width: 900px) {
        width: 15px;
        height: 15px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px){
        width: 22.5px;
        height: 22.5px;
        margin-right: 5px;
    }
`
RentingLocationOwnerRatingImg.name = 'RentingLocationOwnerRatingImg'

const DropDownContainer = styled.div`
    width: 100%;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        margin-top: 16.5px;
        flex-direction: column;
    }
`
DropDownContainer.name = 'DropDownContainer'

export { RentingWrapper, RentingContainer, RentingCommonInfos, RentingLocationInfos, RentingLocationTitle, RentingLocationSubtitle, 
RentingLocationTags, RentingLocationOwner, RentingLocationOwnerInfos, RentingLocationOwnerName, RentingLocationOwnerPictureContainer, 
RentingLocationOwnerPicture,RentingLocationOwnerRating, RentingLocationOwnerRatingImgContainer, RentingLocationOwnerRatingImg, 
DropDownContainer }