import styled from "styled-components"
import photo from './../../../assets/images/3.jpg'
import { FlexWrapper } from "../../../components/menu/FlexWrapper"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <H2_name>I am Svetlana</H2_name>
                    <H1_title>A Web Developer. </H1_title>
                </div>

                <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #8cb9f1;
`

const Photo = styled.img`
    width: 150px;
    height: 200px;
    object-fit: cover;
`

const H1_title = styled.h1`
    
`

const H2_name = styled.h2`
    
`