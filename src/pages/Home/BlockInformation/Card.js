import Counter from "../../../components/Counter";
const Card = ({ title, info }) => {
  return (
    <main className="relative flex items-center flex-col rounded-2xl my-8 mx-4 sm:w-1/2 sm:h-72 text-color_ten border border-slate-600">
      <h1 className="flex items-center flex-col mb-20 mt-10 mr-5 ml-5 text-center font-bold text-3xl">{title}</h1>
      <Counter number={info} />
    </main>
  );
};
export default Card;
