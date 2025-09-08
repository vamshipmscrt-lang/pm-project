import { Button } from "./ui/button";
import {
  Shield,
  CheckCircle,
  Camera,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-50 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#2c6e49]/10 text-[#2c6e49] px-4 py-2 rounded-full">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">
                Trusted Security Partner
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Professional{" "}
              <span className="text-[#2c6e49]">
                CCTV Solutions
              </span>{" "}
              for Complete Security
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive CCTV installation and monitoring
              services for residential, commercial, and
              construction sites. Advanced surveillance
              technology with 24/7 support to keep your property
              secure.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#2c6e49]" />
                <span>HD Video Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#2c6e49]" />
                <span>Remote Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#2c6e49]" />
                <span>Expert Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#2c6e49]" />
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#2c6e49] hover:bg-[#245a3d] text-white"
              >
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2c6e49] text-[#2c6e49] hover:bg-[#2c6e49] hover:text-white"
              >
                View Our Work
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2c6e49]">
                  500+
                </div>
                <div className="text-sm text-gray-600">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2c6e49]">
                  50+
                </div>
                <div className="text-sm text-gray-600">
                  Construction Sites
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2c6e49]">
                  24/7
                </div>
                <div className="text-sm text-gray-600">
                  Monitoring
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669049515462-6ab71c151720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NTcyNDkxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional CCTV Installation"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <Camera className="h-8 w-8 text-[#2c6e49]" />
                <div>
                  <div className="font-semibold text-gray-900">
                    HD Cameras
                  </div>
                  <div className="text-sm text-gray-600">
                    4K Resolution
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-[#2c6e49]" />
                <div>
                  <div className="font-semibold text-gray-900">
                    Expert Team
                  </div>
                  <div className="text-sm text-gray-600">
                    Certified Installers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}