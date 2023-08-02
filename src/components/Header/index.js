import Logo from '../Logo';
import Icons from './Icons';
import Options from './Options';
import './style.css'

export default function Header(){
    return(
    <header className='App-header'>
        <Logo />
        <Options />
        <Icons />
    </header>
    )
}