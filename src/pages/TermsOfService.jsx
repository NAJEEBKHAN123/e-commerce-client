import React, { useEffect } from 'react';
import { FaUtensils, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TermsOfService = () => {

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
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-red-100">Last updated: September 20, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 prose prose-lg max-w-none">
          <p className="lead">Welcome to FoodieBuzz! These terms and conditions outline the rules and regulations for the use of our website and services.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Reservations</h2>
          <p>When making a reservation through our website:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Please arrive on time for your reservation</li>
            <li>We hold reservations for 15 minutes past the reserved time</li>
            <li>Large party reservations may require a credit card guarantee</li>
            <li>Cancellations should be made at least 2 hours in advance</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Online Orders</h2>
          <p>For online food orders:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>All prices are listed in local currency</li>
            <li>Orders must be placed during business hours</li>
            <li>We strive to provide accurate preparation time estimates</li>
            <li>Customization requests are subject to ingredient availability</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Payment</h2>
          <p>We accept various payment methods including credit cards and digital wallets. All payments are processed securely through our payment partners.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Cancellation Policy</h2>
          <p>Reservations may be cancelled free of charge up to 2 hours before the reserved time. For large parties or special events, different cancellation policies may apply as specified during booking.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of FoodieBuzz and is protected by intellectual property laws.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Limitation of Liability</h2>
          <p>FoodieBuzz shall not be liable for any damages resulting from the use or inability to use our website or services, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of the state where FoodieBuzz is located, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-red-700">Contact Information</h2>
          <p>For any questions about these Terms of Service, please contact us at:</p>
          <p className="mt-2">
            Email: legal@foodiebuzz.com<br />
            Phone: (555) 123-4567<br />
            Address: 123 Flavor Street, Taste City, TC 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;