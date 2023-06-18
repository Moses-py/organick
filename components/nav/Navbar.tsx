import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <section className="py-[36px] px-[2rem] lg:px-0 font-sans font-regular text-primary text-[14px]">
        <nav className="container relative">
          <div className="flex gap-5 justify-between items-center">
            <Image src={"/logo.png"} alt={"logo"} width={100} height={100} />
            <div className="hidden lg:block">
              <ul className="flex gap-5 justify-evenly items-center">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/"}>About us</Link>
                </li>
                <li>
                  <Link href={"/"}>Services</Link>
                </li>
                <li>
                  <Link href={"/"}>Shop</Link>
                </li>
                <li>
                  <Link href={"/"}>Portfolio</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact</Link>
                </li>
                <li>
                  <Link href={"/"}>News</Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-2 justify-evenly items-center border border-primary rounded-full py-1 px-2">
              <Image
                src={"/cart.png"}
                alt={"cart icon"}
                width={30}
                height={30}
              />
              <p>Cart 0</p>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
