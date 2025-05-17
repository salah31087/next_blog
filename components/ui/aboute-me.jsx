"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutMe() {
  return (
    <section className="w-full" aria-labelledby="about-me-heading">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {/* Left Column - About Me Text */}
        <div className="bg-gray-50 p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <h2 id="about-me-heading" className="font-bold text-gray-900 text-xl md:text-2xl mb-2">
            HI! I'M LINDSAY.
          </h2>
          <p className="font-signature text-gray-400 text-2xl md:text-5xl italic -mt-6 mb-6">
            nice to meet you!
          </p>
          
          <p className="text-gray-700 mb-8 max-w-md">
            I'm a former 4th grade teacher, now full time blogger. My husband Bjork and I live in Minnesota. Favorite things include my camera, lake days, and dark chocolate.
          </p>
          
          <Button 
            variant="outline" 
            className="bg-gray-700 hover:bg-gray-800 rounded-none font-bold text-white border-none uppercase tracking-wider px-8"
            asChild
          >
            <Link href="/about">LEARN MORE</Link>
          </Button>
        </div>
        
        {/* Middle Column - Cooking Image */}
        <div className="relative min-h-[380px] md:min-h-full">
          <Image
            src="/images/profile1.jpg"
            alt="Lindsay cooking in her kitchen"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        
        {/* Right Column - Pouring Ingredients Image */}
        <div className="relative min-h-[450] md:min-h-full">
          <Image
            src="/images/profile2.jpg"
            alt="Pouring olive oil with fresh citrus ingredients"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}