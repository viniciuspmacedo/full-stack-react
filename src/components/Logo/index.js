import logo from '../../images/logo.svg'
import './style.css'
export default function Logo(){
    return(
        <div className='logo'>
          <img src={logo} alt='Logo da Alura Books'/>
          <p><strong>Alura</strong> Books</p>
        </div>
    )
}