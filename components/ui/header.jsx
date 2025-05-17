"use client";

import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const navigationItems = [
        {
            title: "HOME",
            href: "/",
        },
        {
            title: "ABOUT",
            href: "/about",
        },
        {
            title: "RECIPES",
            href: "/recipes",
        },
        {
            title: "START HERE",
            href: "/start-here",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    
    return (
        <header 
            className="w-full relative bg-white border-b border-gray-100"
        >
            <div className="max-w-6xl relative mx-auto py-5 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="inline-block">
                        <div className="relative h-12 w-48">
                            <img 
                                src="/api/placeholder/240/60"
                                alt="Logo Placeholder" 
                                className="object-contain h-full"
                            />
                        </div>
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navigationItems.map((item) => (
                        <Link 
                            key={item.title}
                            href={item.href}
                            className="text-gray-800 hover:text-[#775C58] text-md font-bold tracking-wider transition-colors duration-200"
                        >
                            {item.title}
                        </Link>
                    ))}
                    <button 
                        aria-label="Search"
                        className="text-gray-800 hover:text-[#775C58] transition-colors duration-200"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </nav>
                
                {/* Mobile menu button */}
                <div className="lg:hidden flex items-center gap-4">
                    <button 
                        aria-label="Search"
                        className="text-gray-800"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                    <button 
                        aria-label="Toggle menu"
                        className="text-gray-800"
                        onClick={() => setOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            
            {/* Mobile navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t lg:hidden overflow-hidden bg-white"
                    >
                        <div className="container py-6 px-4 flex flex-col divide-y divide-gray-100">
                            {navigationItems.map((item, index) => (
                                <motion.div 
                                    key={item.title}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="py-3"
                                >
                                    <Link 
                                        href={item.href} 
                                        className="block py-2 text-base font-medium text-gray-800"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            
        </header>
    );
}