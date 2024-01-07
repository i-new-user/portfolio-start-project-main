import styled from "styled-components";
import { SectionTitle } from "../../../components/menu/SectionTitle";
import { Button } from "../../../components/button/button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            
            <StyleForm>
                <Field placeholder={'name'}/>
                <Field placeholder={'subject'}/>
                <Field placeholder={'message'} as={'textarea'}/>
                <Button type={'submit'}>Send message</Button>
            </StyleForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #dd7191;
`

const StyleForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input`
    
`

