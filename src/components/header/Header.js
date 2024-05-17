import day from '../../img/icons/day.png';
import night from '../../img/icons/night.png';
import logo from '../../img/icons/ravencoin.png';
import menu from '../../img/icons/menu_header.png'
import './styles.css'


export default function Nav() {
    return (
        <header>
            <div className='block_menu_header'>
                <img className='menu_header' src={menu} />
                <div className="logo">
                    <img src={logo} />
                    <div className='logotext'>WorSa</div>
                </div>
            </div>
            <div className="switch_block">
                <img className='icons' src={day} />
                <img className='icons' src={night} />
            </div>
        </header>
    )
}