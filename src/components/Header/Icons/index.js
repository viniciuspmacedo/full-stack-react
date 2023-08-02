import perfil from '../../../images/perfil.svg';
import sacola from '../../../images/sacola.svg';
import './style.css'

const icons = [ perfil, sacola ]

export default function Icons(){
    return (
        <ul className='icons'>
            { icons.map( (icon) => {
                return (
                <li className='icon'>
                    <img src={icon} alt=''></img>
                </li>
                )}
            )}
        </ul>
    )
}