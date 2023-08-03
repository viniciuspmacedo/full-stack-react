import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  gap: 10px;
`

const LogoImage = styled.img`
  margin-left: 10px;
`


export default function Logo(){
    return(
        <LogoContainer>
          <LogoImage src={logo} alt='Logo da Alura Books' className='logo-img'/>
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}