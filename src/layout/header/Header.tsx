import React from "react";
import styled from 'styled-components'


import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/menu";


const worksItems = ['Home', 'Skills', 'Works', 'Tetimony', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={worksItems}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #93ecf8;
`