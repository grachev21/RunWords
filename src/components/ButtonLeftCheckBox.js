const ButtonLeftCheckBox = ({ colorButton, colorDot, content, indexButton, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value = indexButton); // callback-функция
  };
  console.log(colorButton)
  return (
    <button
      className={`
            relative 
            px-4
            text-color_ten
            // ${colorDot} 
            before:content-[''] 
            before:w-2 
            before:h-2 
            before:rounded-full 
            before:absolute
            before:left-0 
            before:top-1/2 
            before:-translate-y-1/2 
            `}
      onClick={handleChange}>
      {content}
    </button>
  );
};

export default ButtonLeftCheckBox;
