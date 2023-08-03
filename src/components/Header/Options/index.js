import styled from 'styled-components';

const OptionsContainer = styled.ul`
    display: flex;
`
const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const options = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']
export default function Options(){
    return (
        <OptionsContainer>
            {options.map( (option) => {
                return (
                    <Option>
                        <p>{option}</p>
                    </Option>
                )
                })
            }
        </OptionsContainer>
    )
}