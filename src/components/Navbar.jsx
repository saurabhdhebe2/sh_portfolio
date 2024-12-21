import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarPadding = scrollY > 0 ? 'py-0' : 'py-0';

  return (
    <nav
      className={`font-bebas px-6 md:px-20 navbar fixed top-0 left-0 w-full bg-primary-transparent flex items-center justify-between z-10 ${navbarPadding}`}
    >
      <div className="flex items-center">
        <Link
          className="text-white  text-2xl md:text-3xl font-semibold"
          href="/"
        >
          {/* SHUBHAM */}
          <Image
            src="/assets/images/shubham_logo.png"
            width={120}
            height={20}
            alt="shubham_logo"
          />
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        {/* Mobile menu icon */}
        {/* <button className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button> */}
        <div className=" tracking-widest space-x-8">
          <Link className="font-bebas-neue font-thin text-3xl" href="/work">
            WORK
          </Link>
        </div>
      </div>
      {/* Links on the right */}
      <div className="hidden font-bebas-neue md:flex items-center tracking-widest space-x-8">
        <Link href="/work">WORK</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
