import Counter from "../../components/Counter";
import { useState } from "react";
import useInterval from "use-interval";
const listInformation = [
  { title: "Выучить слова", value: 436 },
  { title: "Заучено сегодня", value: 1336 },
  { title: "Повтор сегодня", value: 288 },
  { title: "Повтор сегодня", value: 288 }
];

const BlockInformation = () => {
  const [isDeg, setDeg] = useState(0);

  useInterval(() => {
    if (isDeg >= 360) {
      setDeg(0);
    } else {
      setDeg(isDeg + 1);
    }
  }, 100);
  const gradientAnimation = {
    backgroundImage: `conic-gradient(from ${isDeg}deg, red, blue, green, red)`
  };
  return (
    <main className="flex flex-col sm:flex-row sm:flex-wrap sm:px-16 justify-between sm:w-full">
      {listInformation.map((listInformation, index) => {
        return (
          <section
            key={index}
            className="relative my-8 mx-2 md:mx-4 sm:w-60 sm:h-72 md:w-72 flex items-center justify-center bg-color_four">
            <div className="absolute rounded-lg w-full h-80 left-0 top-0 p-2" style={gradientAnimation}></div>
            {/* <div className="absolute flex items-center flex-col rounded-2xl h-full m-full  text-color_ten border border-slate-600 bg-color_three">
              <h1 className="flex items-center flex-col mb-20 mt-10 mr-5 ml-5 text-center font-bold text-3xl">
                {listInformation.title}
              </h1>
              <Counter number={listInformation.value} />
            </div> */}
          </section>
        );
      })}
    </main>
  );
};

export default BlockInformation;
