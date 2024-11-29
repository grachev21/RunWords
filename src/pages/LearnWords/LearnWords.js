import ButtonLeftCheckBox from "../../components/ButtonLeftCheckBox";
import { useState } from "react";

const LearnWords = () => {
  const [value, setValue] = useState(1);
  const handleChange = (value) => {
    setValue(value);
  };
  const textSizeList = [
    {
      name: "Маленький",
      size: "sm"
    },
    {
      name: "Средний",
      size: "xl"
    },
    {
      name: "Большой",
      size: "2xl"
    }
  ];

  return (
    <main className="flex  items-center justify-center w-full h-full text-color_four text-lg">
      <section className="md:w-3/4 md:h-1/2">
        <div className="w-full h-full bg-color_three border border-color_four/10 shadow-xl rounded-lg box-border">
          <section className="bg-color_two rounded-t-lg flex flex-row justify-between px-2 text-md">
            <h1>Размеры текста</h1>
            <div className="flex justify-between">
              {textSizeList.map((textSizeList, index) => {
                return (
                  <ButtonLeftCheckBox
                    key={index}
                    colorDot={index === value ? "before:bg-color_five" : "before:bg-color_four"}
                    content={textSizeList.name}
                    indexButton={index}
                    onChange={handleChange}
                  />
                );
              })}
            </div>
          </section>

          <section className={`text-${textSizeList[value].size}`}>
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
