import Footer from './Footer';
import Navbar from './Navbar';

export default function RootLayout({ children }) {
  return (
    <div className="font-poppins bg-primary px-52 text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
