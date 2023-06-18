/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button/Button";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section className="bg-hero bg-no-repeat bg-center w-full h-full py-[2rem] p-5">
        <div className="container flex flex-col md:flex-row md:gap-[2rem] justify-center items-center w-full">
          <div className="flex flex-col items-center md:items-start gap-5">
            <h4 className="font-serif text-subtitle text-center md:text-left text-h5 md:text-h4">
              100% Natural Food
            </h4>
            <h1 className="text-center md:text-left text-h3 md:text-h2 xl:text-h1 font-sans leading-global lg:w-3/4 text-primary font-bold">
              Choose the best healthier way of life.
            </h1>
            <Button variant="yellow">Explore now</Button>
          </div>
          <div className="flex justify-center items-center">
            <img src="/square/hp_foto.jpg" alt="" className="w-fit h-fit" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
