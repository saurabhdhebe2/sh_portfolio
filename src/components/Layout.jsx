import Footer from './Footer';
import Navbar from './Navbar';

export default function RootLayout({ children, isNav }) {
  return (
    <div className="font-poppins bg-primary sm:px-2 md:px-2 lg:px-52 text-white">
      {isNav ? <Navbar /> : null}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
