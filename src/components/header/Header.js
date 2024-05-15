import day from '../../img/icons/day.png';
import night from '../../img/icons/night.png';
import './styles.css'


export default function Nav() {
    return (
        <header>
            <div className='logo'>WorSa</div>
            <div className="switch_block">
                <img className='icons' src={day} />
                <img className='icons' src={night} />
            </div>
            hello header
        </header>
    )
}