import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Building2, HardHat, Home, Shield, Monitor, Settings, Clock, Headphones, Camera, Wifi, Fingerprint, Network, Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Camera,
      title: "CCTV Solutions",
      description: "Complete CCTV setup, maintenance, and repair services for comprehensive security surveillance systems.",
      features: ["CCTV Setup & Installation", "Regular Maintenance Services", "Repair & Troubleshooting", "HD Camera Systems", "Remote Monitoring", "24/7 Recording"]
    },
    {
      icon: Network,
      title: "Networking Solutions",
      description: "Professional networking services including LAN, WAN, and WiFi network setup and management for seamless connectivity.",
      features: ["LAN Network Setup", "WAN Configuration", "WiFi Network Installation", "Network Security", "Bandwidth Management", "Network Troubleshooting"]
    },
    {
      icon: Fingerprint,
      title: "Bio-metric Devices",
      description: "Advanced biometric systems for authentication, access control, attendance tracking, and enhanced security solutions.",
      features: ["Fingerprint Authentication", "Access Control Systems", "Attendance Tracking", "Security Authentication", "Employee Management", "Real-time Monitoring"]
    },
    {
      icon: Building2,
      title: "Real Estate & Construction",
      description: "Specialized security solutions for real estate properties and construction sites with comprehensive monitoring.",
      features: ["Property Surveillance", "Construction Site Monitoring", "Multi-location Management", "Progress Tracking", "Theft Prevention", "Worker Safety"]
    }
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: "Installation & Setup",
      description: "Professional installation of CCTV, networking, and biometric systems"
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Regular maintenance and repair services for all security systems"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring services"
    },
    {
      icon: Shield,
      title: "Security Consultation",
      description: "Expert consultation for customized security solutions"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2c6e49]/10 text-[#2c6e49] px-4 py-2 rounded-full mb-4">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Security & Technology Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive CCTV systems, networking solutions, and biometric devices for authentication, access control, and security across all sectors.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#2c6e49]/10 rounded-lg group-hover:bg-[#2c6e49] group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6 text-[#2c6e49] group-hover:text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#2c6e49] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1593630265256-d2cc162ab58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzU3MzA4NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="CCTV Security Systems"
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">CCTV Systems</h3>
              <p className="text-sm opacity-90">Installation, maintenance & repair</p>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1702895742107-35bebf49ce8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzJTIwZXRoZXJuZXR8ZW58MXx8fHwxNzU3MzEwMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Network Infrastructure"
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Networking Solutions</h3>
              <p className="text-sm opacity-90">LAN, WAN & WiFi networks</p>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1689103722266-1f2f837145e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5nZXJwcmludCUyMHNjYW5uZXIlMjBiaW9tZXRyaWN8ZW58MXx8fHwxNzU3MzEwMDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Biometric Systems"
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Biometric Devices</h3>
              <p className="text-sm opacity-90">Access control & attendance</p>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex p-3 bg-[#2c6e49]/10 rounded-lg mb-4">
                <service.icon className="h-6 w-6 text-[#2c6e49]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}