"use client"
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const recipeCategories = [
    { id: 1, name: 'Quick and Easy', image: '/images/img-1.jpg' },
    { id: 2, name: 'Dinner', image: '/images/img-2.jpg' },
    { id: 3, name: 'Vegetarian', image: '/images/img-3.jpg' },
    { id: 4, name: 'Healthy', image: '/images/img-4.jpg' },
    { id: 5, name: 'Instant Pot', image: '/images/img-5.jpg' },
    { id: 6, name: 'Vegan', image: '/images/img-6.jpg' },
    { id: 7, name: 'Meal Prep', image: '/images/img-7.jpg' },
    { id: 8, name: 'Soups', image: '/images/img-8.jpg' },
    { id: 9, name: 'Salads', image: '/images/img-9.jpg' },
  ];

  const featuredRecipes = [
    { 
      id: 'dinner-recipe', 
      title: 'Dinner', 
      image: '/images/1.jpg',
      alt: 'Herb-crusted salmon with roasted potatoes'
    },
    { 
      id: 'sos-series', 
      title: 'SOS Series', 
      image: '/images/2.jpg',
      alt: 'Sweet and spicy chicken over rice with green onions'
    },
    { 
      id: 'most-popular', 
      title: 'Most Popular', 
      image: '/images/3.jpg',
      alt: 'Spiced chicken platter with dips and vegetables'
    },
    { 
      id: 'healthy', 
      title: 'Healthy', 
      image: '/images/4.jpg',
      alt: 'Fresh healthy grain bowl with vegetables and herbs'
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="recipe-section-heading">
        <div className='max-w-6xl mx-auto'>            
        <h2 id="recipe-section-heading" className="sr-only">Recipe Categories</h2>
        
        {/* Featured Recipe Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="relative group overflow-hidden">
                <a href={`/recipes/${recipe.id}`} className="block w-full h-full">
                <div className="w-full h-96 relative">
                    <Image
                    src={recipe.image}
                    alt={recipe.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="inline-block px-3 py-1 bg-[#cd9d3b] text-white text-sm font-medium text-center uppercase tracking-wider rounded-sm">
                    {recipe.title}
                    </div>
                </div>
                </a>
            </div>
            ))}
        </div>

        {/* Recipe Categories */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
            {recipeCategories.map((category) => (
            <a 
                key={category.id} 
                href={`/recipes/category/${category.id}`}
                className="group flex flex-col items-center"
                aria-label={`Browse ${category.name} recipes`}
            >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-2 border-2 border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <img 
                    src={category.image} 
                    alt="" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                </div>
                <span className="text-xs md:text-sm font-medium text-center leading-tight">
                {category.name}
                </span>
            </a>
            ))}
        </div>

        {/* Search and View All */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
                type="search"
                placeholder="Search our recipes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border-gray-300 rounded-md w-full"
                aria-label="Search recipes"
            />
            </div>
            <span className="text-gray-400 hidden md:inline">or</span>
            <Button 
            variant="default" 
            size="lg"
            className="w-full md:w-auto bg-purple-700 hover:bg-purple-800 text-white"
            aria-label="View all recipes"
            >
            VIEW ALL RECIPES
            </Button>
        </div>
      </div>
    </section>
  );
}