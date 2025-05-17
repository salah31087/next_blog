"use client"

import Image from 'next/image';

export default function AsSeenIn() {
  const brandLogos = [
    {
      name: "BuzzFeed",
      logo: "/images/download1.svg",
      alt: "BuzzFeed logo",
      url: "https://www.buzzfeed.com"
    },
    {
      name: "PureWow",
      logo: "/images/download2.svg",
      alt: "PureWow logo",
      url: "https://www.purewow.com"
    },
    {
      name: "Brit+Co",
      logo: "/images/download3.svg",
      alt: "Brit+Co logo",
      url: "https://www.brit.co"
    },
    {
      name: "PopSugar",
      logo: "/images/download4.svg",
      alt: "PopSugar logo",
      url: "https://www.popsugar.com"
    },
    {
      name: "The Everygirl",
      logo: "/images/download5.svg",
      alt: "The Everygirl logo",
      url: "https://theeverygirl.com"
    }
  ];

  return (
    <section className="pt-8 md:pt-12" aria-labelledby="as-seen-in-heading">
      <div className="max-w-6xl border-b border-gray-200 pb-12 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          id="as-seen-in-heading" 
          className="text-center text-amber-500 font-medium tracking-widest uppercase text-sm mb-8"
        >
          As Seen In
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brandLogos.map((brand) => (
            <a 
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-10 w-full transition-opacity hover:opacity-80"
              aria-label={`Visit our feature on ${brand.name}`}
            >
              <div className="relative h-5 md:h-8 w-full">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  fill
                  sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 15vw"
                  className="object-contain object-center filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}