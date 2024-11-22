import "../styles/CreateDict.css";
import Input from "../components/componentsMain/Inputs/Input";
import ButtonInput from "../components/componentsMain/ButtonInput/ButtonInput";

export default function CreateDict() {
  return (
    <div className="createDict">
      <form>
        <Input title="ТЕКСТ" label="Вставте текст" />
        <ButtonInput title="СОЗДАТЬ СЛОВАРЬ" />
      </form>
    </div>
  );
}
