import Input from '../components/inputs/Input'
import Label from '../components/label/Label'
import '../styles/LearnWords.css'


export default function LearnWords() {
    return (
        <div className="LearnWords">

            <div className="ru-word">
                hello world
            </div>
            <div className="word-options">
                <Label />
                <Label />
                <Label />
                <Label />
                <Label />
            </div>
            <div className="input-answer">
                <Input />

            </div>

        </div>
    )
}