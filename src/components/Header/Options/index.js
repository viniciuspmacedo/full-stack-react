import './style.css'

const options = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']
export default function Options(){
    return (
        <ul className='options'>
            {options.map( (option) => {
                return (
                    <li className='option'>
                        <p>{option}</p>
                    </li>
                )
                })
            }
        </ul>
    )
}