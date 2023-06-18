const Offer = () => {
  return (
    <>
      <section className="w-full relative my-[100px]">
        <div className="container md:grid grid-cols-2 gap-[1rem] px-[1.5rem]">
          {/* Offer one */}
          <div className="flex flex-col gap-3 items justify-center bg-offer1 bg-cover bg-center bg-no-repeat w-full px-[2rem] py-[4rem] rounded-3xl text-white my-[1rem]">
            <h5 className="font-serif md:text-h5 text-h6">Natural!!</h5>
            <h2 className="font-sans md:text-h4 text-quote font-bold w-5/6 lg:w-1/2">
              Get Garden fresh fruits
            </h2>
          </div>
          {/* Offer 2 */}
          <div className="flex flex-col gap-3 items justify-center bg-offer2 bg-cover bg-center bg-no-repeat w-full px-[2rem] py-[4rem] rounded-3xl text-primary my-[1rem]">
            <h5 className="font-serif md:text-h5 text-h6">Offer!!</h5>
            <h2 className="font-sans md:text-h4 text-quote font-bold w-5/6 lg:w-1/2">
              Get 10% off on vegetables
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
