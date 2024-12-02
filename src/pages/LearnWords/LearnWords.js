import { useState } from "react";

import dataWords from "../../helpers/listWords";
import textSizeList from "./textSizeList";

import NavPanel from "./NavPanel";

const LearnWords = () => {
  const [isCheckInput, setCheckInput] = useState("");


  return (
    <main className="flex items-center justify-center w-full h-full text-color_four text-lg">
      <section className="md:w-[760px] md:h-[500px]">
        <div className="w-full h-full bg-color_three border border-color_four/10 shadow-xl rounded-lg">
          <NavPanel />
          <section className={`text-${textSizeList[value].size} h-full p-2`}>
            <div className="flex flex-row">
              <h1 className="text-color_nine font-bold mr-2">Выберите вариант ответа из</h1>
              <ul className="flex flex-row text-color_four opacity-30">
                {dataWords.words.map((item, index) => {
                  return (
                    <li key={index} className="">
                      {item.number + ","}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul className="">
                {textSizeList.map((item, index) => {
                  return (
                    <li key={index} className="">
                      {item.number}
                    </li>
                  );
                })}
              </ul>
            </div>

            <ul className="flex-col">
              {dataWords.words.map((value, index) => {
                return (
                  <div key={index} className="flex flex-row">
                    <li className="text-color_seven mr-2">{value.number}</li>
                    <li className="text-color_six">{value.word}</li>
                  </div>
                );
              })}
            </ul>

            <input
              value={isCheckInput}
              onChange={(e) => {
                setCheckInput(e.target.value);
              }}
              autoFocus
              type="text"
              placeholder={
                "Введите что-то из этого: " +
                dataWords.words
                  .map((item) => {
                    return item.number;
                  })
                  .join("-?,  ") +
                "-?"
              }
              className="bg-color_three w-full text-color_five border-none outline-none"
            />
          </section>
        </div>
      </section>
    </main>
  );
};
export default LearnWords;
