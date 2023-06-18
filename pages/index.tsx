import About from "@/features/about/About";
import Categories from "@/features/categories/Categories";
import Hero from "@/features/hero/Hero";
import News from "@/features/news/News";
import Offer from "@/features/offers/Offer";
import OfferBig from "@/features/offers/OfferBig";
import Testimonial from "@/features/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <About />
      <Categories />
      <Testimonial />
      <OfferBig />
      <News />
    </>
  );
}
