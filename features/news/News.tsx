import Button from "@/components/button/Button";
import NewsCard from "@/components/news/NewsCard";

const news_previews = [
  {
    author: "Rachi Mike",
    image: "bg-[url('/square/green.jpg')]",
    title: "The Benefits of Vitamin D & How to Get It",
    content:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    author: "Rachi Mike",
    image: "bg-[url('/square/tomato.jpg')]",
    title: "Our Favourite Summertime Tomato",
    content:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];
const News = () => {
  return (
    <>
      <section className="w-full relative p-5 mb-[144px]">
        <div className="container">
          <div className="flex justify-between flex-wrap md:flex-nowrap items-center my-[72px] md:my-[36px]">
            <div className="flex flex-col my-[16px] md:my-[72px]">
              <h4 className="text-h5 font-serif text-subtitle">News</h4>
              <h2 className="text-h5 md:text-h4 lg:text-h3 xl:text-h2 w-full font-bold font-sans text-primary">
                Discover weekly content about <br className="hidden sm:block" />
                organic foods and more
              </h2>
            </div>
            <div className="">
              <Button variant="default" classname="font-bold text-xs">
                More news
              </Button>
            </div>
          </div>
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-[2rem]">
            {news_previews.map((preview, index) => {
              return (
                <NewsCard
                  key={index}
                  author={preview.author}
                  title={preview.title}
                  content={preview.content}
                  image={preview.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
