import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-extrabold mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#a78bfa' }}>
              DigiTools
            </h2>
            <p className="text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white transition-colors cursor-pointer">Features</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Templates</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white transition-colors cursor-pointer">Documentation</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Help Center</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Community</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Social Links</h4>
            <div className="flex gap-3 text-lg">
              <span className="hover:text-white transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </span>
              <span className="hover:text-white transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="hover:text-white transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faXTwitter} />
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2024 DigiTools. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <a className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
            <a className="hover:text-white transition-colors cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;