// components/Navbar.js
import Link from 'next/link';

const Footer = () => {
  return (
    <nav className=" bottom-0 left-0 w-full py-4 px-20 flex items-center justify-between z-10">
      {/* Logo on the left */}
      <div className="flex">
        <Link
          href="https://www.youtube.com/@ShubhamDhebe"
          className="text-white font-semibold text-lg"
        >
          YOUTUBE
        </Link>
        <div className="w-12 mx-4 mt-4 h-px opacity-40 bg-white"></div>
        <Link
          href="https://www.instagram.com/shubham.dhebe?igsh=MWRjbjN4a3c1YzV0Yg=="
          className="text-white font-semibold text-lg"
        >
          INSTAGRAM
        </Link>
      </div>
      <div>
        <Link href="/" className="text-white font-semibold text-lg">
          SHUBHAM DHEBE
        </Link>
      </div>
      {/* Links on the right */}
      <div className=" flex items-center ">
        <Link
          className="text-white font-medium text-lg tracking-widest"
          href="/contact"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
