/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

// Navbar.js
import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="inline-block">
            <Logo />
          </a>
        </Link>
        <ul className="flex gap-8">
          {["Home", "About Me", "Portfolio", "Contact Me"].map((item) => (
            <li key={item}>
              <Link 
                href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`} 
                legacyBehavior
              >
                <a className="text-text-primary hover:text-primary transition-colors duration-300 font-medium">
                  {item}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;