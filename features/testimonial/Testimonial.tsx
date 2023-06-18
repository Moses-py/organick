import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./TestimonialCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Balls from "./Balls";

const datas = [
  {
    name: "Teri Tomaselli",
    image: "1",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    name: "Roderich Dhennin",
    image: "2",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    name: "Garry Trower",
    image: "3",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
];

const balls = [
  {
    number: "100%",
    text: "Organic",
  },
  {
    number: "285",
    text: "Active Products",
  },
  {
    number: "350+",
    text: "Organic Orchads",
  },
  {
    number: "25+",
    text: "Years of Farming",
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="bg-testimonial bg-center bg-cover bg-no-repeat w-full py-[6rem] px-5 mt-[10rem]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-center flex flex-col my-[72px]">
            <h4 className="text-h5 font-serif text-subtitle">Categories</h4>
            <h2 className="text-h5 md:text-h4 w-full font-bold font-sans text-primary">
              What our customers are saying
            </h2>
          </div>
          <div className="w-full sm:w-3/4 lg:w-1/2">
            <Carousel
              autoPlay
              infiniteLoop
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
            >
              {datas.map((data, index) => {
                return (
                  <>
                    <TestimonialCard
                      key={index}
                      name={data.name}
                      content={data.content}
                      image={data.image}
                    />
                  </>
                );
              })}
            </Carousel>
            <hr className="border-gray" />
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-[2rem] justify-items-center justify-center items-center my-[36px]">
              {balls.map((ball, index) => {
                return (
                  <Balls key={index} number={ball.number} text={ball.text} />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
