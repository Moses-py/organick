import Button from "../button/Button";

const NewsCard = ({ author, title, image, content, classname }: NewsCard) => {
  return (
    <>
      <div
        className={`${image} w-full px-[2rem] py-[5rem] rounded-3xl bg-no-repeat bg-cover bg-center font-sans text-primary ${classname} relative`}
      >
        {/* Content */}
        <div className="rounded-2xl bg-white p-10">
          <div className="flex flex-col gap-[0.7rem]">
            <p className="text-p">{author}</p>
            <div className="w-full">
              <h5 className="md:text-h6 text-p font-bold my-1">{title}</h5>
              <p className="md:text-p text-xs text-based my-1">{content}</p>
            </div>
            <Button variant="yellow">Read more</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
