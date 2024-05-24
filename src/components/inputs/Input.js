import './styles.css';

export default function Input({title}) {
    return (
        <div className="input">
            <label>ВСТАВТЕ ТЕКСТ</label>
            <input placeholder={title} type="text" name="name" />
        </div>
    )

}