import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        
        {/* Footer Text */}
        <p className="text-[16px] text-center sm:text-left">
          © 2025 All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
