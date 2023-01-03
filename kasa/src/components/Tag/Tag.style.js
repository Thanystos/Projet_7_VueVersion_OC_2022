import styled from "@magister_zito/vue3-styled-components";
import colors from "../../utils/colors";

const TagContainer = styled.div`
    width: 115px;
    height: 25px;
    border-radius: 10px;
    margin-right: 10px;
    background-color: #${colors.primary};
    color: white;
    text-align: center;
    line-height: 25px;

    @media screen and (max-width: 635px) {
        width: 84px;
        height: 18px;
        line-height: 18px;
    }
`
TagContainer.name = 'TagContainer'

const TagTitle = styled.h3`
    font-size: 14px;

    @media screen and (max-width: 635px) {
        font-size: 10px;
    }
`
TagTitle.name = 'TagTitle'

export { TagContainer, TagTitle }