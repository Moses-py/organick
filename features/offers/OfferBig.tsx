import { food_produces } from "@/abc";
import Button from "@/components/button/Button";
import ThumbCard from "@/components/thumbcard/ThumbCard";

const OfferBig = () => {
  const produces = food_produces.slice(6, 10);
  return (
    <>
      <section className="w-full grid place-items-center bg-primary py-[5rem] px-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex flex-col my-[72px]">
              <h4 className="text-h5 font-serif text-subtitle">Offer</h4>
              <h2 className="text-h5 md:text-h4 w-full font-bold font-sans text-white">
                We offer organic to you
              </h2>
            </div>
            <div>
              <Button variant="yellow" classname="font-bold text-xs">
                View all product
              </Button>
            </div>
          </div>
          {/* Grid */}
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-[2rem]">
            {produces.map((food, index) => {
              return (
                <ThumbCard
                  classname="bg-white"
                  key={index}
                  url={food.url}
                  category={food.category}
                  price={"19.99"}
                  discount={"39.99"}
                  name={food.name}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferBig;
