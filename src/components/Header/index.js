import Logo from '../Logo';
import Icons from './Icons';
import Options from './Options';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
`

export default function Header(){
    return(
    <HeaderContainer>
        <Logo />
        <Options />
        <Icons />
    </HeaderContainer>
    )
}