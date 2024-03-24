import GetInTouchForm from '@/components/Contact';
import RootLayout from '@/components/Layout';

const Contact = () => {
  return (
    <RootLayout className="bg-gray-100">
      <div className="py-36">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl text-cyan-300 font-bold mb-4">Contact</h2>
          <div className="h-10 bg-gray-500 w-px my-4"></div>
          <h2 className="text-4xl font-bold mb-4">sdhebe123@gmail.com</h2>
        </div>
        <div className="mt-12">
          <GetInTouchForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
