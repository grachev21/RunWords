import './styles.css';


export default function ButtonMenu({ title, img }) {
    return (
        <div className="button-menu">
            <img src={img} />
            <p>{title}</p>
        </div>
    )
}