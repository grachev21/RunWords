import '../styles/Repeat.css';
import Input from '../components/inputs/Input';


export default function Repeat() {
    return (
        <div className="Repeat">

            <div className="ru-word">
                hello world
            </div>
            <div className="word-options">
                <span>words</span>
                <span>words</span>
                <span>words</span>
                <span>words</span>
            </div>
            <div className="input-answer">
                <Input />

            </div>

        </div>
    )
}