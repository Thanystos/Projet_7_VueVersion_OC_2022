import styled from "@magister_zito/vue3-styled-components"
import colors from "../../utils/colors"

const dropDownProp = { renting: Boolean, isOpen: Boolean }

export const DropDownContainer = styled("div", dropDownProp)`
    max-width: ${props => props.renting ? '700px' : '1023px'};
    width: 100%;
    border-radius: ${props => props.renting ? '10px' : '5px'};
    font-size: ${props => props.renting ? '18px' : '24px'};
    margin-bottom: ${props => props.renting ? '0px' : '31px'};
    
    @media screen and (max-width: 900px) {
        margin-bottom: ${props => props.renting ? '20.07px' : '19px'};
        font-size: 12px;
    }

    @media screen and (min-width: 635px) and (max-width: 900px) {
        font-size: 18px;
    }

    @media screen and (min-width: 900px) {
        width: ${props => props.renting ? 'calc(50% - 38px)' : '100%'}; ;
    }
`

export const DropDownHeader = styled("div", dropDownProp)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #${colors.primary};
    border-radius: ${props => props.renting ? '10px' : '5px'};
    height: ${props => props.renting ? '52px' : '47px'};
    line-height: ${props => props.renting ? '52px' : '47px'};

    @media screen and (max-width: 635px) {
        height: 30px;
        line-height: 30px;
    }
`

export const DropDownTitle = styled.h3`
    color: white;
    padding-left: 20px;
`

export const DropDownArrowContainer = styled.div`
    display: flex;
    align-items: center;
    width: 15.56px;
    height: 26.4px;
    padding-right: 20px;
`

export const DropDownArrow = styled.img`
    width: 15.56px;
    height: 26.4px;
    object-fit: contain;
`

export const DropDownDescription = styled("div", dropDownProp)`
    border-radius: ${props => props.renting ? '10px' : '5px'};
    position: relative;
        top: -10px;
    background-color: #${colors.secondary};
    color: #${colors.primary};
    padding: 40px 12px 53px 20px;
    z-index: -1;
    display: ${props => props.isOpen ? 'block' : 'none'};

    @media screen and (max-width: 635px) {
        padding: 23.02px 6.91px 1.3px 11.51px;
    }
`

export const DropDownEquipments = styled.ul`
    list-style: none;
`

export const DropDownEquipment = styled.li`
    
`
