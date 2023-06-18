import Button from "@/components/button/Button";

const Newsletter = () => {
  return (
    <>
      <section className="w-full mb-[72px] p-5">
        <div className="container grid place-items-center w-full">
          <div className="bg-[url('/landscape/newsletter.jpg')] w-full rounded-2xl py-[5rem] px-[1rem]">
            <div className="flex flex-col md:flex-row justify-between gap-y-[2rem] items-center px-[1rem] md:px-[2rem]">
              {/* Header */}
              <div>
                <h4 className="md:text-h3 sm:text-h4 text-h5 text-white font-sans font-bold">
                  Subscribe to <br className="hidden sm:block" /> our newsletter
                </h4>
              </div>
              {/* Input */}
              <div className="">
                <input
                  type="text"
                  className=" bg-white rounded-xl py-[1rem] px-3 w-full"
                  placeholder="Your email"
                />
                <Button variant="primary" classname="font-bold w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
