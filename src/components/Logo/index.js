import logo from '../../images/logo.svg'
import './style.css'
export default function Logo(){
    return(
        <div className='logo'>
          <img src={logo} alt='Logo da Alura Books' className='logo-img'/>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
}