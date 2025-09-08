import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Building2, HardHat, Home, Shield, Monitor, Settings, Clock, Headphones } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Real Estate CCTV Solutions",
      description: "Comprehensive security systems for residential complexes, apartments, and commercial buildings with remote monitoring capabilities.",
      features: ["High-definition cameras", "Motion detection", "Night vision", "Mobile app access"]
    },
    {
      icon: HardHat,
      title: "Construction Site Security",
      description: "Specialized CCTV solutions for construction sites to prevent theft, monitor progress, and ensure worker safety.",
      features: ["Weatherproof cameras", "Time-lapse recording", "Theft prevention", "Worker safety monitoring"]
    },
    {
      icon: Home,
      title: "Residential Security",
      description: "Complete home security systems with indoor and outdoor cameras, doorbell cameras, and smart home integration.",
      features: ["Doorbell cameras", "Indoor/outdoor coverage", "Smart home integration", "Cloud storage"]
    },
    {
      icon: Monitor,
      title: "Commercial Surveillance",
      description: "Advanced surveillance systems for offices, retail stores, warehouses, and industrial facilities.",
      features: ["Multi-camera setup", "Access control", "Business analytics", "Loss prevention"]
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "System Maintenance",
      description: "Regular maintenance and updates to ensure optimal performance"
    },
    {
      icon: Settings,
      title: "Custom Installation",
      description: "Tailored solutions based on your specific security requirements"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and immediate response services"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert technical support and troubleshooting assistance"
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
            Comprehensive CCTV Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential homes to large construction sites, we provide tailored security solutions that meet your specific needs and budget.
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
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1593630265256-d2cc162ab58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzU3MzA4NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Construction Site Security"
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Construction Site Monitoring</h3>
              <p className="text-sm opacity-90">24/7 surveillance for construction projects</p>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1558702729-f65d00e16c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHNlY3VyaXR5fGVufDF8fHx8MTc1NzIwMjQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Office Building Security"
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Commercial Security</h3>
              <p className="text-sm opacity-90">Advanced systems for business premises</p>
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