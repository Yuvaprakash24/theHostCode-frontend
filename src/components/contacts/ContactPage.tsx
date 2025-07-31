'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  category: string;
  phone: string;
  message: string;
  agreeToPrivacy: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    category: '',
    phone: '',
    message: '',
    agreeToPrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        category: '',
        phone: '',
        message: '',
        agreeToPrivacy: false,
      });
      
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-fit bg-gray-50 py-4 px-4 sm:px-10 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="px-6 py-8 sm:px-8 sm:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Let's Talk
                </h1>
                <p className="text-gray-600 mb-8">
                  lets request a quote or want to meet up for coffee.
                  <br />
                  contact us directly or fill out this form and we will
                  <br />
                  get back to you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50"
                    />
                  </div>

                  {/* Category Field */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 appearance-none"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        91+
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-gray-50 resize-vertical"
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeToPrivacy"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agreeToPrivacy" className="ml-2 text-sm text-gray-600">
                      I hereby agree to our Privacy Policy terms.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToPrivacy}
                    className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
               {/* Right Column - Map */}
              <div className="lg:col-span-1">
                <div className="sticky top-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us Here</h2>
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6293740482537!2d78.45658687503068!3d17.426036383429577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90daf70b5e19%3A0x7b5c2c3e8a8b9c7d!2sBrigade%20Road%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-96"
                      title="Office Location Map"
                    ></iframe>
                  </div>
                  </div>
                 
              {/* Right Column - Contact Info */}
              <div className=" flex flex-col justify-end lg:pl-8">
                <div className="space-y-6 mt-8 ">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <img 
                            src="/contact/li_map-pin.png" 
                            alt="Location" 
                            className="w-6 h-6 object-contain filter"
                          />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">
                        No. 216, 5th avenue, brigade road,
                        <br />
                        blr-01, Brigade Road,
                        <br />
                        Hyderabad, Telangana, 560001
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <img 
                            src="/contact/li_mail.png" 
                            alt="Email" 
                            className="w-6 h-6 object-contain filter"
                          />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">info@onified.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <img 
                            src="/contact/li_phone.png" 
                            alt="Phone" 
                            className="w-6 h-6 object-contain filter"
                          />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">1800 1800 985</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
         </div>
      </div>
    </div>
  );
}