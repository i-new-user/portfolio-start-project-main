import styled from 'styled-components'
import { FlexWrapper } from '../../../components/menu/FlexWrapper'
import { Skill } from './skil.tsx/Skil'
import { SectionTitle } from '../../../components/menu/SectionTitle'

export const Skils = () => {
    return (
        <StyledSkils>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-around'}>
                <Skill  iconId={'html5'} 
                        title={'HTML5'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill  iconId={'css'} 
                        title={'CSS3'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill  iconId={'react'} 
                        title={'REACT'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill  iconId={'typescript'} 
                        title={'TYPESCRIPT'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill  iconId={'styledComponent'} 
                        title={'STYLED COMPONENTS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                <Skill  iconId={'figma'} 
                        title={'WEB DESIGN'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
            </FlexWrapper>
       </StyledSkils>
    )
}

const StyledSkils = styled.section`
    background-color: #99f4ee;
    min-height: 100vh;
    border: 2px solid #338f89;
`
  