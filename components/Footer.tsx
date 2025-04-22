import Link from 'next/link';
import { FiX, FiLinkedin, FiMail, FiHexagon } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FiHexagon className="w-6 h-6 stroke-[3] text-white animate-rotate-slow" />
              <h3 className="text-2xl font-bold tracking-tight">CreativeTech</h3>
            </div>
            <p className="text-gray-400 mb-4">
              We create beautiful and functional websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiX size={24} />
              </a>
              <a href="https://www.linkedin.com/in/khurramsaadat/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="mailto:khurram.saadat@yahoo.com" className="text-gray-400 hover:text-white transition-colors">
                <FiMail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Falconcity of wonders</li>
              <li>Dubailand, Dubai, UAE</li>
              <li>Email: <a href="mailto:khurram.saadat@yahoo.com" className="hover:text-white transition-colors">khurram.saadat@yahoo.com</a></li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} CreativeTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 