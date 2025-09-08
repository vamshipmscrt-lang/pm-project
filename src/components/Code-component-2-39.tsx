import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2c6e49]/10 text-[#2c6e49] px-4 py-2 rounded-full mb-4">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote. Our team is ready to design the perfect security solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#2c6e49]" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                <p className="font-semibold text-[#2c6e49]">+91 98765 43210</p>
                <p className="text-sm text-gray-500">24/7 Emergency Support</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#2c6e49]" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Send us your requirements</p>
                <p className="font-semibold text-[#2c6e49]">info@pmsecurity.com</p>
                <p className="text-sm text-gray-500">We respond within 2 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#2c6e49]" />
                  Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Visit our office</p>
                <p className="font-semibold">Hyderabad, Telangana</p>
                <p className="text-sm text-gray-500">By appointment only</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#2c6e49]" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Free Quote</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours with a custom quote.</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c6e49]">
                      <option>Select property type</option>
                      <option>Residential Home</option>
                      <option>Apartment Complex</option>
                      <option>Office Building</option>
                      <option>Retail Store</option>
                      <option>Construction Site</option>
                      <option>Industrial Facility</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <Textarea 
                      placeholder="Please describe your security requirements, property size, number of cameras needed, special features, etc."
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="contact" value="phone" className="text-[#2c6e49]" />
                        <span>Phone Call</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="contact" value="email" className="text-[#2c6e49]" />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="contact" value="whatsapp" className="text-[#2c6e49]" />
                        <span>WhatsApp</span>
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-[#2c6e49] hover:bg-[#245a3d] text-white">
                    Request Free Quote
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We'll only use your information to provide you with a quote and follow up on your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}