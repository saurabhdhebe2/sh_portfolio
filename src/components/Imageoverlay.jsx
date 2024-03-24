import Image from 'next/image';

// components/ImageOverlay.js
const ImageOverlay = ({ imageUrl, hovered, children }) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="Work Image"
        width={600}
        height={400}
        className="object-cover w-full h-full"
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white transition-opacity ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ImageOverlay;
