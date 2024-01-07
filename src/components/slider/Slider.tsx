import styled from "styled-components"
import { FlexWrapper } from "../menu/FlexWrapper"

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper direction={'column'}>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium architecto excepturi eveniet repellat similique dolore et molestias voluptatem distinctio eum, soluta a vero amet quo molestiae itaque dolorum omnis possimus.
                    Voluptatibus vitae iure nulla, pariatur velit nesciunt nam itaque quos excepturi? Soluta excepturi itaque iure blanditiis libero quis cupiditate tempora quam, vero qui? Ipsum ad, doloremque iste quia ducimus ea.</Text>
                    <Name>Klavdiy</Name>
            </Slide>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
            </FlexWrapper>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    max-width: 500px;
    border: 1px solid red;
`

const Slide = styled.div`
    text-align: center;
`
const Text = styled.p`
    
`
const Name = styled.span`
    
`

const Pagination = styled.div`
    text-align: center;
    span{
        display: inline-block;
        background-color: #59ecd4;
        width: 20px;
        height: 20px;
        margin: 5px;
    }
`