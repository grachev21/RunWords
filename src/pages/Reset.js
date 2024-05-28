import '../styles/Reset.css';
import Input from '../components/inputs/Input';
import ButtonInput from '../components/button_input/ButtonInput';


export default function Reset() {
    return (
        <div className="Reset">

            <form>
                <Input title='---:---' label="Напишите 'yes' для сброса"/>
                <ButtonInput title='НАЧАТЬ ЗАНОВО'/>
            </form>
        </div>
    )
}