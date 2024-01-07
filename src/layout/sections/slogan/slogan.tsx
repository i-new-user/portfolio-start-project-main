import styled from "styled-components"
import { SectionTitle } from "../../../components/menu/SectionTitle"
import { Button } from "../../../components/button/button"


export const Slogan = () => {
    return(
        <StyledSlogan>
            <SectionTitle>I Am Availavle For Freelance</SectionTitle>
            <Button>Hire my</Button>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    background-color: #8a9ff2;
    min-height: 30vh;
`