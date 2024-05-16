import '../styles/CreateDict.css'
import Input from '../components/inputs/Input'

export default function CreateDict() {
    return (
        <div className="createDict">
            <form>
                <Input />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}