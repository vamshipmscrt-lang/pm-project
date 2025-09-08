import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";

export function About() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Construction Sites", icon: Shield },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const features = [
    "Licensed and insured security professionals",
    "State-of-the-art surveillance technology",
    "Customized solutions for every property type",
    "Competitive pricing with transparent costs",
    "Local Hyderabad-based team with quick response",
    "Comprehensive after-sales support and maintenance"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#2c6e49]/10 text-[#2c6e49] px-4 py-2 rounded-full">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">About PM Security</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Hyderabad's Leading <span className="text-[#2c6e49]">CCTV Security</span> Provider
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              PM Security Solutions has been protecting homes, businesses, and construction sites across Hyderabad with cutting-edge CCTV surveillance systems. Our expert team specializes in designing and installing customized security solutions that provide peace of mind and complete protection.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#2c6e49] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#2c6e49] hover:bg-[#245a3d] text-white">
                Contact Us Today
              </Button>
              <Button variant="outline" className="border-[#2c6e49] text-[#2c6e49] hover:bg-[#2c6e49] hover:text-white">
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="inline-flex p-3 bg-[#2c6e49]/10 rounded-lg mb-3">
                      <stat.icon className="h-6 w-6 text-[#2c6e49]" />
                    </div>
                    <div className="text-2xl font-bold text-[#2c6e49] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Us */}
            <Card className="p-6 bg-[#2c6e49]/5 border-[#2c6e49]/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose PM Security?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-[#2c6e49]" />
                    <span className="text-gray-700">Expert installation and configuration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-[#2c6e49]" />
                    <span className="text-gray-700">High-quality cameras and equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-[#2c6e49]" />
                    <span className="text-gray-700">Competitive pricing and packages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-[#2c6e49]" />
                    <span className="text-gray-700">24/7 technical support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications & Partnerships</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-gray-50 rounded">
                    <Users className="h-6 w-6 text-[#2c6e49] mx-auto mb-2" />
                    <div className="text-xs text-gray-600">Certified Installers</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <Shield className="h-6 w-6 text-[#2c6e49] mx-auto mb-2" />
                    <div className="text-xs text-gray-600">Licensed Security</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <Award className="h-6 w-6 text-[#2c6e49] mx-auto mb-2" />
                    <div className="text-xs text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}