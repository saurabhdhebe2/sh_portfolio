import Link from 'next/link';
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

  const navbarPadding = scrollY > 0 ? 'py-4' : 'py-10';

  return (
    <nav
      className={`px-60 navbar fixed top-0 left-0 w-full bg-primary-transparent px-20 flex items-center justify-between z-10 ${navbarPadding}`}
    >
      <div>
        <Link href="/" className="text-white text-3xl font-semibold ">
          SHUBHAM
          {/* <span className="font-extrabold  text-3xl text-blue-700">DHEBE</span> */}
        </Link>
      </div>
      {/* Links on the right */}
      <div className="flex items-center tracking-widest space-x-16">
        <Link href="/work">SERVICES</Link>
        {/* <Link href="/#about">ABOUT ME</Link> */}
        <Link href="/contact">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
