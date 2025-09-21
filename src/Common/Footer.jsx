import React from 'react';
import { FaFacebookF, FaInstagram,  FaLinkedin, FaGithub , FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUtensils, FaClock, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-red-700 pt-6 to-red-700 text-white">
      {/* Curved top section */}
      <div className="w-full h-16 rounded-t-[100%]  bg-white"></div>
      
      {/* Main footer content */}
      <div className="bg-gradient-to-t  from-red-600 to-red-700 pt-8 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FaUtensils className="mr-2" /> 𝑭𝒐𝒐𝒅𝒊𝒆𝑩𝒖𝒛𝒛
            </h3>
            <p className="mb-4 text-red-100">
              Serving delicious meals since 2010. Our passion is creating memorable dining experiences with fresh, locally-sourced ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                <FaLinkedin  className="text-lg" />
              </a>
              <a href="#" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                <FaGithub   className="text-lg" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-red-100 hover:text-white transition-colors flex items-center">Home</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors flex items-center">Menu</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors flex items-center">About Us</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors flex items-center">Reservations</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors flex items-center">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-200" />
                <span className="text-red-100">Forest Bazar Near Agriculture Uni, Peshawar, Pakistan</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="mt-1 mr-3 text-red-200" />
                <span className="text-red-100">(+92) 308 844 0190</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-red-200" />
                <span className="text-red-100">info@foodiebuzz.com</span>
              </li>
            </ul>
          </div>
          
          {/* Hours & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex justify-between text-red-100">
                <span>Monday - Thursday</span>
                <span>(11am - 10pm)</span>
              </li>
              <li className="flex justify-between text-red-100">
                <span>Friday - Saturday</span>
                <span>(11am - 11pm)</span>
              </li>
              <li className="flex justify-between text-red-100">
                <span>Sunday</span>
                <span>(11am - 9pm)</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-red-100 mb-2">Subscribe for special offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-gray-800 border border-2 border-amber-100 rounded-l focus:outline-none flex-grow"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r hover:bg-red-700 transition-colors">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="bg-white text-gray-500 py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className=" mb-2 md:mb-0">
            © {new Date().getFullYear()} <span className='font-bold'>FoodieBuzz</span>  Foods Corporation. All rights reserved.
          </p>
          <div className="flex space-x-4">
             <Link to='/PrivacyPolicy'><a href="#" className=" hover:text-gray-600  transition-colors">Privacy Policy</a></Link>
             <Link to='/TermsOfService'><a href="#" className=" hover:text-gray-600 transition-colors">Terms of Service</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 