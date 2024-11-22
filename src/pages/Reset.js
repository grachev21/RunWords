import "../styles/Reset.css";
import Input from "../components/componentsMain/Inputs/Input";
import ButtonInput from "../components/componentsMain/ButtonInput/ButtonInput";

export default function Reset() {
  return (
    <div className="Reset">
      <form>
        <Input title="---:---" label="Напишите 'yes' для сброса" />
        <ButtonInput title="НАЧАТЬ ЗАНОВО" />
      </form>
    </div>
  );
}
