import { NavLink } from 'react-router-dom';
import logo from '../../img/icons/ravencoin.png';
import menu from '../../img/icons/menu_header.png'
import ButtonTheme from '../button_theme/ButtonTheme';
import './styles.css'


export default function Nav() {
    return (
        <header>
            <div className='block_menu_header'>
                <img className='menu_header' src={menu} />
                <NavLink to='/'>
                    <div className="logo">
                        <img src={logo} />
                        <div className='logotext'>WorSa</div>
                    </div>
                </NavLink>


            </div>
                <ButtonTheme />
        </header >
    )
}