import styled from "styled-components";

export const Block = () => {
    return (
        <StyleBlock>
            <Box>
                <Span>
                    IT INCUBATOR
                </Span>
            </Box>
        </StyleBlock>
    )
}

const StyleBlock = styled.div`
   
    text-align: center;

   
    height: 100vh;
    background-color: #6778d9;
    border: 2px solid #000;
    padding: 20px;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`

   height: 200px;
   width: 400px;
   border: 2px solid #000;
   padding: 20px;
   
  
`

const Span = styled.span`
   line-height: 200px;
`


