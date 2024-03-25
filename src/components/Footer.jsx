import Link from 'next/link';

const Footer = () => {
  return (
    <nav className="bottom-0 left-0 w-full py-4 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between z-10">
      {/* Logo and Links on the left */}
      <div className="flex flex-col md:flex-row items-center md:mr-auto">
        <Link
          href="https://www.youtube.com/@ShubhamDhebe"
          className="text-white font-semibold text-lg md:mr-4 mb-2 md:mb-0"
        >
          YOUTUBE
        </Link>
        <div className="w-full md:w-12 md:mx-4 mt-4 md:h-px opacity-40 bg-white"></div>
        <Link
          href="https://www.instagram.com/shubham.dhebe?igsh=MWRjbjN4a3c1YzV0Yg=="
          className="text-white font-semibold text-lg md:ml-4"
        >
          INSTAGRAM
        </Link>
      </div>
      {/* Centered Logo */}
      <div className="text-center md:text-left mb-2 md:mb-0">
        <Link href="/" className="text-white font-semibold text-lg">
          SHUBHAM DHEBE
        </Link>
      </div>
      {/* Contact Link on the right */}
      <div className="text-center md:text-right mt-2 md:mt-0">
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
