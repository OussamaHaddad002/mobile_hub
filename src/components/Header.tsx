import { Link } from "react-router-dom";
import { ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            MobileHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-secondary hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/admin/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/cart"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
              <Link
                to="/profile"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/login"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/admin/dashboard"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}