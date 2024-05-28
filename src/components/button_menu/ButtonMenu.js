import { useRef } from 'react';

import './styles.css';
import cub from './box_4933961.png';


export default function ButtonMenu({ title, img }) {


    function enter() {
        console.log('enter');
        btn.current.classList.add('enter')
    }
    
    function lave() {
        console.log('enter');
        btn.current.classList.remove('enter')
    }

    const btn = useRef(null)

    return (
        <div ref={btn} className="button-menu" onMouseEnter={enter} onMouseLeave={lave}>
            <div className='cub'></div>
            <div className='line'></div>
            <p>{title}</p>
        </div>
    )
}