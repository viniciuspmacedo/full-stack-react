import perfil from '../../../images/perfil.svg';
import sacola from '../../../images/sacola.svg';
import styled from 'styled-components';

const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
`
const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;git
`

const icons = [ perfil, sacola ]

export default function Icons(){
    return (
        <IconsContainer>
            { icons.map( (icon) => {
                return (
                <Icon>
                    <img src={icon} alt=''></img>
                </Icon>
                )}
            )}
        </IconsContainer>
    )
}