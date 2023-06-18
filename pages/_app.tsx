import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import Newsletter from "@/components/newsletter/Newsletter";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { Yellowtail } from "next/font/google";
const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const yellowTail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yellow-tail",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${opensans.variable} ${yellowTail.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </main>
  );
}
