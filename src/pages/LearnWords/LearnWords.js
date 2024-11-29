import ButtonLeftCheckBox from "../../components/ButtonLeftCheckBox";
const LearnWords = () => {
  const textSizeList = ["sm", "xl", "2xl"];

  return (
    <main className="flex  items-center justify-center w-full h-full text-color_four text-lg">
      <section className="md:w-3/4 md:h-1/2">
        <div className="w-full h-full bg-color_three border border-color_four/10 shadow-xl rounded-lg box-border">
          <section className="bg-color_two rounded-t-lg flex flex-row justify-between px-2 text-md">
            <h1>Размеры текста</h1>
            <div className="flex justify-between">
              {textSizeList.map((textSizeList, index))}
              <ButtonLeftCheckBox
                colorButton={"text-color_ten"}
                colorDot={"before:bg-color_five"}
                content={"Маленький"}
              />
              <ButtonLeftCheckBox
                colorButton={"text-color_nine"}
                colorDot={"before:bg-color_five"}
                content={"Средний"}
              />
              <ButtonLeftCheckBox
                colorButton={"text-color_seven"}
                colorDot={"before:bg-color_five"}
                content={"Большой"}
              />
              @
            </div>
          </section>

          <section className={`text-${textSizeList}`}>
            <h1 className="bg-slate-500 w-full">Выберите вариант ответа </h1>
            <ul>
              <li>hello</li>
              <li>print</li>
              <li>store</li>
              <li>project</li>
              <li>have</li>
              <li>apps</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default LearnWords;
