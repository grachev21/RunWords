import './styles.css';


export default function ButtonInput({title}) {
    return (
        <div className="ButtonInput">
            <input type="submit" value={title} />
        </div>
    )
}