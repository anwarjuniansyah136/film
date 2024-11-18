import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Tautan Navigasi */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Navigation</h4>
          <ul className="list-none space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Informasi Kontak */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="mb-2">PadangSidempuan</p>
          <p className="mb-2">Email: anwarjuniansyah136@.com</p>
          <p>Phone: 083841299400</p>
        </div>

        {/* Media Sosial */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/anwar.j.5201" className="text-blue-500 hover:text-blue-600" target='_blank'>
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500" target='_blank'>
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/anwarjuni_/" className="text-pink-500 hover:text-pink-600" target='_blank'>
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-800" target='_blank'>
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
