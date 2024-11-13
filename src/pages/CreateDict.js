import '../styles/CreateDict.css';
import Input from '../components/Inputs/Input';
import ButtonInput from '../components/ButtonInput';



export default function CreateDict() {
    return (
        <div className="createDict">

            <form>
                <Input title='ТЕКСТ' label='Вставте текст' />
                <ButtonInput title='СОЗДАТЬ СЛОВАРЬ'/>
            </form>
        </div>
    )
}