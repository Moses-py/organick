import Image from "next/image";

type Props = {
  name: string;
  content: string;
  image: string;
};

const TestimonialCard = ({ name, content, image }: Props) => {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-primary font-sans">
        <div>
          <Image
            src={`/people/${image}.jpg`}
            height={100}
            width={100}
            alt={name}
            className="rounded-full"
          />
        </div>
        <div className="text-p my-5">
          <p>{content}</p>
        </div>
        <div className="text-center my-[1rem]">
          <p className="font-bold">{name}</p>
          <p>Consumer</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
