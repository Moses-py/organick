/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button/Button";
import Image from "next/image";
const About = () => {
  return (
    <>
      <section className="w-full my-[72px]">
        <div className="container font-sans">
          <div className="grid md:grid-cols-2 content-center justify-items-center items-center">
            {/* Image */}
            <div>
              <img
                src="/square/orange.jpg"
                alt="orange image"
                className="w-auto h-auto"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col gap-6 px-[1.5rem]">
              <h4 className="text-h5 font-serif text-subtitle">About us</h4>
              <h2 className="text-h5 md:text-h4 w-full lg:w-3/4 font-bold font-sans text-primary">
                We Believe in Working, Accredited Farmers
              </h2>
              <p className="text-xs text-based">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="flex flex-col gap-4 leading-global">
                <div className="flex flex-col md:flex-row gap-2 md:items-center w-full">
                  <Image
                    src="/icons/organic_foods_only.png"
                    alt="organic_foods_only"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h5 className="md:text-quote text-p text-primary font-sans font-bold">
                      Organic foods only
                    </h5>
                    <p className="text-xs text-based my-1">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex flex-col md:flex-row gap-4 md:items-center w-full">
                  <Image
                    src="/icons/quality_standard.png"
                    alt="organic_foods_only"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h5 className="md:text-quote text-p text-primary font-sans font-bold">
                      Quality Standards
                    </h5>
                    <p className="text-xs text-based">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <Button variant={"primary"}>Shop Now</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
