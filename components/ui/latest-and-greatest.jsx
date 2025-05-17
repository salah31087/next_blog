"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LatestAndGreatest() {
  const featuredPosts = [
    {
      id: 'burger-bowls',
      date: 'MAY 13, 2025',
      title: 'Burger Bowls with House Sauce and Ranch Fries',
      excerpt: 'A burger in a bowl! Ranch-seasoned fries topped with a burger patty and all the fixings, with a drizzle of house sauce to take it over the top!',
      image: '/images/img1.jpg',
      slug: '/recipes/burger-bowls-house-sauce-ranch-fries'
    },
    {
      id: 'red-pepper-pasta',
      date: 'MAY 6, 2025',
      title: 'Roasted Red Pepper Pasta',
      excerpt: 'Restaurant-level pasta, easy enough to be SOS! Caramelized shallots folded into a silky red pepper sauce, and tossed with noodles. Heaven!',
      image: '/images/img2.jpg',
      slug: '/recipes/roasted-red-pepper-pasta'
    },
    {
      id: 'apricot-chicken',
      date: 'APRIL 29, 2025',
      title: 'Apricot Chicken with Charred Scallions',
      excerpt: 'This apricot chicken, made on a sheet pan, is so easy and SO GOOD! Just a few simple ingredients, minimal cleanup, and a major flavor boost from the roasty charred scallions on top.',
      image: '/images/img3.jpg',
      slug: '/recipes/apricot-chicken-charred-scallions'
    }
  ];

  const recipeCollections = [
    { id: 'instant-pot', title: 'Instant Pot Recipes', count: 37, icon: '🍲' },
    { id: 'vegan', title: 'Vegan Recipes', count: 199, icon: '🌱' },
    { id: 'meal-prep', title: 'Meal Prep Recipes', count: 36, icon: '🍱' },
    { id: 'quick-easy', title: 'Quick and Easy Recipes', count: 483, icon: '⏱️' },
    { id: 'pasta', title: 'Pasta Recipes', count: 173, icon: '🍝' },
    { id: 'soup', title: 'Soup Recipes', count: 70, icon: '🥣' },
    { id: 'popular', title: 'Most Popular Recipes', count: 89, icon: '⭐' }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-0 py-12" aria-labelledby="latest-greatest-heading">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Featured Posts */}
        <div className="lg:col-span-2">
          <h2 id="latest-greatest-heading" className="text-burgundy-800 font-bold text-lg mb-8 font-serif">THE LATEST &amp; GREATEST</h2>
          
          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className={`pt-8 ${post.id === 'burger-bowls' ? '' : 'pt-8'}`}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/3">
                    <Link href={post.slug} className="block relative h-48 sm:h-40 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-gray-500 text-xs mb-1">{post.date}</p>
                    <h3 className="text-2xl font-medium mb-2">
                      <Link href={post.slug} className="hover:text-amber-600 transition-colors font-serif ">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-2 line-clamp-2 sm:line-clamp-2">{post.excerpt}</p>
                    <Link 
                      href={post.slug}
                      className="text-amber-500 text-xs font-medium hover:text-amber-600 transition-colors"
                    >
                      CONTINUE READING
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              className="bg-burgundy-700 hover:bg-burgundy-800 font-medium tracking-wide"
              asChild
            >
              <Link href="/blog">VIEW MORE RECENT POSTS</Link>
            </Button>
          </div>
        </div>
        
        {/* Right Column - Recipe Collections and Banner */}
        <div className="lg:col-span-1">
          <div className="mb-8">
            <Link href="/meal-plans/freezer-meals" className="block relative overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/banners/freezer-meals.jpg"
                  alt="20 Healthy Freezer Meals"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-white text-3xl font-script mb-2">20 healthy</p>
                  <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">FREEZER MEALS</p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="border border-gray-200 overflow-hidden">
            <h3 className="bg-gray-100 py-3 px-4 text-burgundy-800 font-bold">RECIPE COLLECTIONS</h3>
            <ul>
              {recipeCollections.map((collection, index) => (
                <li key={collection.id} className={index !== recipeCollections.length - 1 ? "border-b border-gray-200" : ""}>
                  <Link 
                    href={`/recipes/${collection.id}`}
                    className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-6">{collection.icon}</span>
                      <span className="text-gray-700">{collection.title}</span>
                    </span>
                    <span className="text-gray-400 text-sm">{collection.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}