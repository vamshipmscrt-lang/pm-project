import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-[#2c6e49]" />
              <div>
                <h3 className="text-xl font-bold">PM Security</h3>
                <p className="text-sm text-gray-400">Solution Pvt Ltd</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional CCTV installation and monitoring services across Hyderabad. Protecting homes, businesses, and construction sites with advanced surveillance technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#2c6e49] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2c6e49] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2c6e49] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2c6e49] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#2c6e49] transition-colors">Residential CCTV</a></li>
              <li><a href="#" className="hover:text-[#2c6e49] transition-colors">Commercial Security</a></li>
              <li><a href="#" className="hover:text-[#2c6e49] transition-colors">Construction Site Monitoring</a></li>
              <li><a href="#" className="hover:text-[#2c6e49] transition-colors">Real Estate Security</a></li>
              <li><a href="#" className="hover:text-[#2c6e49] transition-colors">System Maintenance</a></li>
              <li><a href="#" className="hover:text-[#2c6e49] transition-colors">24/7 Monitoring</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-[#2c6e49] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#2c6e49] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#2c6e49] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#2c6e49] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#2c6e49] transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-[#2c6e49] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#2c6e49] mt-0.5" />
                <div>
                  <p>+91 97014 04095</p>
                  <p>040 45155914</p>
                  <p className="text-xs">24/7 Emergency Support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#2c6e49] mt-0.5" />
                <div>
                  <p>Info@pmsecuritysolutionpvtltd.in</p>
                  <p>pmsecuritysolutionpvtltd@gmail.com</p>
                  <p className="text-xs">Response within 2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#2c6e49] mt-0.5" />
                <div>
                  <p>Office No. #101, First Floor, Madhu Residency</p>
                  <p>Patrika Nagar, Madhapur, Hyderabad</p>
                  <p>Telangana 500081</p>
                  <p className="text-xs">Serving all areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025 PM Security Solution Pvt Ltd. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#2c6e49] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#2c6e49] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#2c6e49] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}