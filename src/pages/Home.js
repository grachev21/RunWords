import { NavLink } from 'react-router-dom';
import ButtonMenu from '../components/button_menu/ButtonMenu';
import { menu_list } from '../helpers/ButtonMenuLIst';
import '../styles/Home.css';


export default function Home() {
    return (
        <div className="Home">

            {menu_list.map((menu_list, index) => {
                return (
                    <NavLink
                        key={index}
                        to={menu_list.link}
                        className="link-menu">
                        <ButtonMenu
                            key={index}
                            title={menu_list.title}
                            img={menu_list.img}
                        />
                    </NavLink>
                );
            })}

        </div>



    );
}