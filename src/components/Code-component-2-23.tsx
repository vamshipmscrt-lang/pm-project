import { Button } from "./ui/button";
import { Menu, Shield, Phone, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-[#2c6e49] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@pmsecurity.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>24/7 Emergency Support Available</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-[#2c6e49]" />
          <div>
            <h1 className="text-xl font-bold text-[#2c6e49]">PM Security</h1>
            <p className="text-sm text-gray-600">Solutions</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-[#2c6e49] transition-colors">Home</a>
          <a href="#services" className="text-gray-700 hover:text-[#2c6e49] transition-colors">Services</a>
          <a href="#about" className="text-gray-700 hover:text-[#2c6e49] transition-colors">About</a>
          <a href="#contact" className="text-gray-700 hover:text-[#2c6e49] transition-colors">Contact</a>
          <Button className="bg-[#2c6e49] hover:bg-[#245a3d] text-white">
            Get Quote
          </Button>
        </div>

        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </nav>
    </header>
  );
}