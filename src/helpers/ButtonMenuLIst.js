import create_dict from '../img/icons/create_dict.png';
import university from '../img/icons/university.png';
import login from '../img/icons/login.png';
import logout from '../img/icons/logout.png';
import reset from '../img/icons/reset.png';
import settings from '../img/icons/setting.png';
import list from '../img/icons/list.png';
import repeat from '../img/icons/repeat.png';


export const menu_list = [
    {
        title: 'СОЗДАЕТЬ СЛОВАРЬ',
        img: create_dict,
        link: 'createdict',
    },
    {
        title: 'УЧИТЬ СЛОВА',
        img: university,
        link: 'university',
    },
    {
        title: 'ПОВТОР', 
        img: repeat,
        link: 'repeat',
    },
    {
        title: 'СПИСОК СЛОВ',
        img: list,
        link: 'list',
    },
    {
        title: 'СТЕРЕТЬ ДАННЫЕ',
        img: reset,
        link: 'reset',
    },
    {
        title: 'НАСТРОЙКИ',
        img: settings,
        link: 'settings',
    },
    {
        title: 'ВОЙТИ',
        img: login,
        link: 'login',
    },
    {
        title: 'ВЫЙТИ',
        img: logout,
        link: 'logout',
    },
]