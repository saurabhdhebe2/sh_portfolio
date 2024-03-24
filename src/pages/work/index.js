import RootLayout from '@/components/Layout';
import VideoPage from '@/components/VideoPage';
import Link from 'next/link';

const Work = () => {
  return (
    <RootLayout className="bg-gray-100 ">
      <div className="py-36 mx-20">
        <div className="flex">
          <Link href="/" className="text-white font-semibold text-lg">
            HOME
          </Link>
          <div className="w-12 mx-4 mt-4 h-px opacity-40 bg-white"></div>
          <h2 className="text-cyan-300 font-semibold text-lg">WORK</h2>
        </div>
        <h2 className="text-4xl font-bold mb-4 mt-20">
          Projects by Shubham dhebe
        </h2>
        <p>
          A collection of some of Shubham&apos;s best work including drone reel
          compilations, creative storytelling, travel vlogs & client work.
        </p>
        <div className="mt-12">
          <VideoPage />
        </div>
      </div>
    </RootLayout>
  );
};

export default Work;
