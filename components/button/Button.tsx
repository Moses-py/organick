const Button = ({ variant, children, classname }: Button) => {
  const buttonHelper = (variant: ButtonType) => {
    if (variant === "default")
      return "bg-white text-primary border border-primary";
    if (variant === "primary") return "bg-primary text-milk";
    if (variant === "yellow") return "bg-button-yellow text-primary";
  };
  return (
    <>
      <button
        className={`${buttonHelper(
          variant
        )} rounded-md text-base py-[12px] px-[30px] text-semibold font-sans w-fit mt-[1rem] ${classname}`}
      >
        {children} &rarr;
      </button>
    </>
  );
};
export default Button;
