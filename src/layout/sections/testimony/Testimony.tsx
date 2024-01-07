import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { SectionTitle } from "../../../components/menu/SectionTitle";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={'quotes'}></Icon>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #7196e6;
`