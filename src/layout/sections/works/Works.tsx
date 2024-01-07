import styled from "styled-components";
import { SectionTitle } from "../../../components/menu/SectionTitle";
import { Menu } from "../../../components/menu/menu";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";

import { Work } from "./work/Work";


import socialImg from '../../../assets/images/2.webp'
import timerImg from '../../../assets/images/1.webp'


const worksItems = ['All', 'LNDING PAGE', 'REACT', 'SPA']


export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work   title={'Social Network'} 
                        src={socialImg}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <Work   title={'Social Network'}
                        src={timerImg}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    background-color: #9ee98f;
    min-height: 100vh;
`