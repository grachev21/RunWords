import './SidePanel.css';
import { NavLink } from 'react-router-dom';
import { menu_list } from '../../helpers/ButtonMenuLIst';


export default function SidePanel() {
    const activLink = 'activ-link';
    const normalLink = 'normal-link';

    return (
        <div className="SidePanel">

            {menu_list.map((menu_list, index) => {
                return (
                    <NavLink key={index} to={menu_list.link} className={({isActive}) => isActive ? activLink : normalLink}>
                        <img src={menu_list.img} />
                    </NavLink>
                );
            })}

        </div>
    )
}