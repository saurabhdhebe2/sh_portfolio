// components/PartnersSection.js
import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    { name: 'Youtube', logo: '/assets/images/youtube-logo.png' }, // Example partner with its logo path
    { name: 'Indian Super League', logo: '/assets/images/isl-logo.png' },
    { name: 'Pro Kabaddi', logo: '/assets/images/kabaddi.jpg' },
    { name: 'Star Channel', logo: '/assets/images/SS_logo.jpeg' }, // Example partner with its logo path
    { name: 'Indian Super League', logo: '/assets/images/isl-logo.png' },
    { name: 'Pro Kabaddi', logo: '/assets/images/kabaddi.jpg' },
    // Add more partners as needed
  ];

  return (
    <div id="partner" className="container  py-12">
      <div className="flex flex-wrap justify-center items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="m-4 mr-20">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
