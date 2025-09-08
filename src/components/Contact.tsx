"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { CheckCircle, AlertCircle, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  propertyType: string;
  projectDetails: string;
  contactMethod: 'phone' | 'email' | 'whatsapp' | '';
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  propertyType?: string;
  projectDetails?: string;
  contactMethod?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    propertyType: '',
    projectDetails: '',
    contactMethod: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Replace with your Web3Forms access key from https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[+]?[1-9]\d{1,14}$/.test(formData.phoneNumber.replace(/[\s()-]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    if (!formData.propertyType || formData.propertyType === 'Select property type') {
      newErrors.propertyType = 'Please select a property type';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide more details (at least 10 characters)';
    }

    if (!formData.contactMethod) {
      newErrors.contactMethod = 'Please select a preferred contact method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (): Promise<boolean> => {
    try {
      const emailData = new FormData();
      emailData.append('access_key', "2344bdf9-e5b8-4a30-add2-e4c340a2de86");
      emailData.append('subject', 'New Security Solution Quote Request');
      emailData.append('from_name', formData.fullName);
      emailData.append('email', formData.emailAddress);
      emailData.append('message', `
Security Solution Quote Request

Client Information:
- Name: ${formData.fullName}
- Phone: ${formData.phoneNumber}
- Email: ${formData.emailAddress}
- Property Type: ${formData.propertyType}
- Preferred Contact: ${formData.contactMethod}

Project Details:
${formData.projectDetails}

This request was submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `);

      // Send to both your business emails
      emailData.append('to', 'vamshipmscrt@gmail.com');
      emailData.append('cc', 'pmsecuritysolutionpvtltd@gmail.com');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: emailData
      });

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  };

  const sendWhatsApp = () => {
    const whatsappNumber = '918019602255'; // Your primary WhatsApp business number
    
    const message = `Hello PM Security Solutions!

I would like to request a quote for security solutions:

📋 Client Details:
• Name: ${formData.fullName}
• Phone: ${formData.phoneNumber}
• Email: ${formData.emailAddress}
• Property Type: ${formData.propertyType}

📝 Project Requirements:
${formData.projectDetails}

I prefer to be contacted via: ${formData.contactMethod}

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please correct the errors above and try again.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const emailSent = await sendEmail();

      if (emailSent) {
        setSubmitStatus({
          type: 'success',
          message: 'Your quote request has been submitted successfully! We\'ll get back to you within 24 hours.'
        });

        // If WhatsApp is preferred, offer WhatsApp option
        if (formData.contactMethod === 'whatsapp') {
          setTimeout(() => {
            const confirmWhatsApp = window.confirm(
              '✅ Email sent successfully!\n\n📱 Would you like to also send this request via WhatsApp for even faster response?\n\nThis will open WhatsApp with your message pre-filled.'
            );
            if (confirmWhatsApp) {
              sendWhatsApp();
            }
          }, 1500);
        }

        // Reset form after successful submission
        setFormData({
          fullName: '',
          phoneNumber: '',
          emailAddress: '',
          propertyType: '',
          projectDetails: '',
          contactMethod: ''
        });
        setErrors({});
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your request. Please try again or contact us directly at +91 97014 04095.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote. Our team is ready to design the perfect security solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Call for Immediate Assistance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#2c6e49]" />
                  Call for immediate assistance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <a 
                    href="tel:+919701404095" 
                    className="text-[#2c6e49] hover:underline font-medium"
                  >
                    +91 97014 04095
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <a 
                    href="tel:04045155914" 
                    className="text-[#2c6e49] hover:underline font-medium"
                  >
                    040 45155914
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-green-50 p-2 rounded-md">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700 font-medium">24/7 Emergency Support</span>
                </div>
              </CardContent>
            </Card>

            {/* Send Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#2c6e49]" />
                  Send us your requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a 
                    href="mailto:Info@pmsecuritysolutionpvtltd.in" 
                    className="text-[#2c6e49] hover:underline text-sm"
                  >
                    Info@pmsecuritysolutionpvtltd.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a 
                    href="mailto:pmsecuritysolutionpvtltd@gmail.com" 
                    className="text-[#2c6e49] hover:underline text-sm"
                  >
                    pmsecuritysolutionpvtltd@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-md">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700 font-medium">We respond within 2 hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Visit Office */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2c6e49]" />
                  Visit our office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>Office No. #101, First Floor, Madhu Residency</strong><br />
                      Street Number 4, Opposite Medicover Hospitals Road<br />
                      Patrika Nagar, Madhapur<br />
                      Hyderabad, Telangana 500081
                    </p>
                    <button 
                      onClick={() => window.open('https://maps.google.com/?q=Office+No.+101+First+Floor+Madhu+Residency+Street+Number+4+Opposite+Medicover+Hospitals+Road+Patrika+Nagar+Madhapur+Hyderabad+Telangana+500081', '_blank')}
                      className="mt-2 text-[#2c6e49] hover:underline text-sm font-medium"
                    >
                      📍 Get Directions
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Free Quote</CardTitle>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours with a custom quote.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name {errors.fullName && <span className="text-red-500">*</span>}
                      </label>
                      <Input 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className={errors.fullName ? 'border-red-500' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number {errors.phoneNumber && <span className="text-red-500">*</span>}
                      </label>
                      <Input 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className={errors.phoneNumber ? 'border-red-500' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address {errors.emailAddress && <span className="text-red-500">*</span>}
                    </label>
                    <Input 
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={errors.emailAddress ? 'border-red-500' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.emailAddress && (
                      <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type {errors.propertyType && <span className="text-red-500">*</span>}
                    </label>
                    <select 
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c6e49] ${
                        errors.propertyType ? 'border-red-500' : 'border-gray-300'
                      }`}
                      disabled={isSubmitting}
                    >
                      <option value="">Select property type</option>
                      <option value="Residential Home">Residential Home</option>
                      <option value="Apartment Complex">Apartment Complex</option>
                      <option value="Office Building">Office Building</option>
                      <option value="Retail Store">Retail Store</option>
                      <option value="Construction Site">Construction Site</option>
                      <option value="Industrial Facility">Industrial Facility</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.propertyType && (
                      <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details {errors.projectDetails && <span className="text-red-500">*</span>}
                    </label>
                    <Textarea 
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Please describe your security requirements, property size, number of cameras needed, special features, etc."
                      rows={4}
                      className={errors.projectDetails ? 'border-red-500' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.projectDetails && (
                      <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method {errors.contactMethod && <span className="text-red-500">*</span>}
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="contactMethod" 
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleInputChange}
                          className="text-[#2c6e49]"
                          disabled={isSubmitting}
                        />
                        <span>Phone Call</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="contactMethod" 
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleInputChange}
                          className="text-[#2c6e49]"
                          disabled={isSubmitting}
                        />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="contactMethod" 
                          value="whatsapp"
                          checked={formData.contactMethod === 'whatsapp'}
                          onChange={handleInputChange}
                          className="text-[#2c6e49]"
                          disabled={isSubmitting}
                        />
                        <span>WhatsApp</span>
                      </label>
                    </div>
                    {errors.contactMethod && (
                      <p className="text-red-500 text-sm mt-1">{errors.contactMethod}</p>
                    )}
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div className={`p-4 rounded-md flex items-center gap-2 ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span>{submitStatus.message}</span>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    className="w-full bg-[#2c6e49] hover:bg-[#245a3d] text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      'Request Free Quote'
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We&apos;ll only use your information to provide you with a quote and follow up on your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
