import GetInTouchForm from '@/components/Contact';
import RootLayout from '@/components/Layout';
import Link from 'next/link';

const Contact = () => {
  return (
    <RootLayout isNav={true} className="bg-gray-100">
      <div className="py-36">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl text-cyan-300 font-bold ">CONTACT</h2>
          <div className="h-10 bg-gray-500 w-px my-4"></div>
          <Link
            href="mailto:work@shubhamdhebe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-bold mb-4 px-2"
          >
            sdhebe123@gmail.com
          </Link>
        </div>
        <div className="mt-12">
          <GetInTouchForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
