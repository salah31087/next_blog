"use client";

import Link from "next/link";
import { Instagram, Facebook, Pinterest, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "RECIPES",
      links: [
        { name: "Quick & Easy", href: "/recipes/quick-easy" },
        { name: "Dinner", href: "/recipes/dinner" },
        { name: "Vegetarian", href: "/recipes/vegetarian" },
        { name: "Healthy", href: "/recipes/healthy" },
        { name: "Instant Pot", href: "/recipes/instant-pot" },
      ],
    },
    {
      title: "ABOUT",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Start Here", href: "/start-here" },
        { name: "Meal Plans", href: "/meal-plans" },
        { name: "Kitchen Essentials", href: "/kitchen-essentials" },
        { name: "Food Photography", href: "/food-photography" },
        { name: "Recipe Index", href: "/recipe-index" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Pinterest", icon: Pinterest, href: "https://pinterest.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Newsletter Signup */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-serif font-medium mb-2">
            Join Our Newsletter
          </h3>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Get our latest recipes and cooking tips sent straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2 rounded-md transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-gray-800 mb-4 tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-amber-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-amber-500 transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                {/* <social.icon className="w-5 h-5" /> */}
              </a>
            ))}
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>© {currentYear} Your Blog Name. All rights reserved.</p>
            <p className="mt-1">
              <span className="font-serif italic text-gray-400">
                simple recipes made for real life
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
