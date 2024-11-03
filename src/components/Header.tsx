import React from 'react';
import { Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm py-4">
      <div className="flex items-center justify-between gap-5 px-4 lg:px-5">
        <div className="flex items-center gap-5">
          <button 
            type="button" 
            className="block transition hover:text-primary lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">AtHearth</span>
          </a>
        </div>

        <nav className="hidden lg:block">
          <div className="flex items-center gap-8">
            <a href="/rent" className="nav-link">Rent</a>
            <a href="/buy" className="nav-link">Buy</a>
            <a href="/short-term" className="nav-link">Short-term</a>
            <a href="/sell" className="nav-link">Sell</a>
            <a href="/management" className="nav-link">Management</a>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <button className="hidden md:block text-sm text-gray-600 hover:text-primary">
            EN | JP
          </button>
          <button className="btn-primary rounded-full px-6 py-2">
            Start here
          </button>
        </div>
      </div>
    </header>
  );
}