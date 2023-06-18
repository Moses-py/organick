import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="w-full font-sans my-[72px] lg:my-[144px]">
        <div className="container grid place-items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-1">
            {/* Contact grid */}
            <div className="lg:text-right my-[2rem] lg:my-0 px-[2rem]">
              <h5 className="text-quote font-bold  mb-4 text-primary">
                Contact Us
              </h5>
              <div className="flex flex-col gap-[1.5rem]">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-xs text-primary">Email</span>
                  <span className="text-based text-xs">
                    needhelp@organick.com
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-xs text-primary">Phone</span>
                  <span className="text-based text-xs">666 888 333</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-xs text-primary">
                    Address
                  </span>
                  <span className="text-based text-xs">
                    88 rd, brooklyn street, USA
                  </span>
                </div>
              </div>
            </div>
            {/* About grid */}
            <div className="flex-flex-col justify-center items-center gap-[1rem] my-[2rem] lg:my-0 lg:text-center px-5 lg:border-x lg:border-x-gray">
              <div className="flex flex-col justify-center lg:items-center gap-[1rem]">
                <Image
                  src={"/logo.png"}
                  alt={"logo"}
                  width={150}
                  height={150}
                />
                <p className="text-xs text-based">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  deleniti laboriosam obcaecati quam. Quas placeat, natus
                  quisquam commodi itaque molestiae.
                </p>
              </div>
              <div className="flex gap-[1rem] lg:justify-center mt-[2rem]">
                <Image src={"/icons/1.png"} alt={"1"} width={50} height={50} />
                <Image src={"/icons/2.png"} alt={"2"} width={50} height={50} />
                <Image src={"/icons/3.png"} alt={"3"} width={50} height={50} />
                <Image src={"/icons/4.png"} alt={"4"} width={50} height={50} />
              </div>
            </div>
            {/* Utitlity pages grid */}
            <div>
              <div className="text-left my-[2rem] lg:my-0 px-[2rem]">
                <h5 className="text-p font-bold text-primary mb-4">
                  Utility pages
                </h5>
                <ul className="flex flex-col gap-[1.5rem]">
                  <li className="text-xs text-based">
                    <Link href={"/"}>Go Home</Link>
                  </li>
                  <li className="text-xs text-based">
                    <Link href={"/"}>About us</Link>
                  </li>
                  <li className="text-xs text-based">
                    <Link href={"/"}>Our Shop</Link>
                  </li>
                  <li className="text-xs text-based">
                    <Link href={"/"}>Latest News</Link>
                  </li>

                  <li className="text-xs text-based">
                    <Link href={"/"}>Our Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
