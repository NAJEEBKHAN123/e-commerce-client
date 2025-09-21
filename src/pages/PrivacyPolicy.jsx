import React, { useEffect } from 'react';
import { FaUtensils, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    useEffect(() =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center text-white hover:text-red-200 transition-colors">
              <FaArrowLeft className="mr-2" /> Back to Home
            </Link>
            <div className="flex items-center">
              <FaUtensils className="mr-2" />
              <span className="text-xl font-bold">𝑭𝒐𝒐𝒅𝒊𝒆𝑩𝒖𝒛𝒛</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-red-100">Last updated: September 20, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 prose prose-lg max-w-none">
          <p className="lead">At FoodieBuzz, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Personal identification information (Name, email address, phone number)</li>
            <li>Reservation details and dining preferences</li>
            <li>Payment information (processed securely through our payment partners)</li>
            <li>Demographic information</li>
            <li>Usage data and analytics about how you interact with our website</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Process reservations and orders</li>
            <li>Personalize your dining experience</li>
            <li>Send promotional emails about special offers (you can opt-out at any time)</li>
            <li>Improve our services and customer experience</li>
            <li>Respond to your inquiries and feedback</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Third-Party Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except trusted third parties who assist us in operating our website, conducting our business, or serving you, so long as those parties agree to keep this information confidential.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of any inaccurate information</li>
            <li>Request deletion of your personal data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            Email: privacy@foodiebuzz.com<br />
            Phone: (555) 123-4567<br />
            Address: 123 Flavor Street, Taste City, TC 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;