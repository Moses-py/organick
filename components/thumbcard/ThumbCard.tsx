import Image from "next/image";
const ThumbCard = ({
  price,
  name,
  category,
  url,
  discount,
  classname,
}: ThumbCard) => {
  return (
    <>
      <div
        className={`card bg-transparent rounded-xl font-sans flex flex-col gap-[1rem] border border-gray p-5 my-4 shadow-sm ${classname}`}
      >
        {/* category */}
        <div className="py-1 px-4 bg-primary text-white rounded-full font-sans text-xs w-fit">
          <span>{category}</span>
        </div>
        {/* Image */}
        <Image
          src={`/thumbs/${url}.jpg`}
          alt={name}
          width={325}
          height={325}
          className="w-[325px] h-[325px] object-contain"
        />
        {/* Name */}
        <div>
          <p className="font-bold text-p text-primary">{name}</p>
        </div>
        {/* Divider */}
        <hr className="border-gray" />
        {/* Discount | Price | Star */}
        <div className="flex justify-between items=center">
          <div className="price flex gap-2">
            <span className="text-gray line-through text-xs">${discount}</span>
            <span className="text-primary font-bold text-xs">${price}</span>
          </div>
          <div className="stars">
            <p className="text-yellow-400">*****</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbCard;
