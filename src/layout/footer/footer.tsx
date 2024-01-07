import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/menu/FlexWrapper";


const socialIcons = ['instagram', 'telegram', 'vk', 'in']

export const Footer = ( ) => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
            <Name>Name</Name>
            <SocialIconsList>
                <SocialIconsListItem>
                    <SocialIconLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                    </SocialIconLink>
                </SocialIconsListItem>
                <SocialIconsListItem>
                    <SocialIconLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                    </SocialIconLink>
                </SocialIconsListItem>
                <SocialIconsListItem>
                    <SocialIconLink>
                        <Icon  height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'}iconId={'vk'}/>
                    </SocialIconLink>
                </SocialIconsListItem>
                <SocialIconsListItem>
                    <SocialIconLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'in'}/>
                    </SocialIconLink>
                </SocialIconsListItem>
            </SocialIconsList>  

            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #84e8d2;
    min-height: 30vh;
`
const Name = styled.span`
    
`

const SocialIconsList = styled.ul`
    display: flex;
    gap: 20px;
`

const SocialIconsListItem = styled.li`
    
`
const SocialIconLink = styled.a`
    
`

const Copyright = styled.small`
    
`