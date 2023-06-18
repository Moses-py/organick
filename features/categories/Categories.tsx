import { food_produces } from "@/abc";
import Button from "@/components/button/Button";
import ThumbCard from "@/components/thumbcard/ThumbCard";

const Categories = () => {
  const produces = food_produces.slice(0, 8);
  return (
    <>
      <section className="w-full">
        <div className="container w-full h-full">
          <div className="lg:container text-center  my-[10rem]">
            <h4 className="text-h5 font-serif text-subtitle">Categories</h4>
            <h2 className="text-h5 md:text-h4 w-full font-bold font-sans text-primary">
              Our Products
            </h2>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[1rem] justify-items-center">
            {produces.map((food, index) => {
              return (
                <ThumbCard
                  key={index}
                  url={food.url}
                  category={food.category}
                  price={"19.79"}
                  discount={"25.99"}
                  name={food.name}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-centerd my-[36px]">
            <Button variant={"primary"}>View all</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
