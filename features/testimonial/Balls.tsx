import React from "react";

type Props = {
  number: string;
  text: string;
};

const Balls = ({ number, text }: Props) => {
  return (
    <div className="font-sans text-primary grid place-items-center w-[150px] h-[150px] rounded-full border-[4px] border-subtitle p-5">
      <div className="text-center">
        <h1 className="text-h4 font-bold">{number}</h1>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
};

export default Balls;
