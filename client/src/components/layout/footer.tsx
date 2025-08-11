import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              VL <span className="text-deep-orange">Renovation</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Mississauga's trusted renovation professionals. Transforming homes with quality craftsmanship and exceptional service since 2014.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-deep-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-deep-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-deep-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-deep-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-google text-white"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-deep-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-deep-orange transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-deep-orange transition-colors">Our Projects</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-deep-orange transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-deep-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <a href="tel:+19055550123" className="hover:text-deep-orange transition-colors">
                  (647) 891-8810
                </a>
              </div>
              <div>
                <a href="mailto:747988758@qq.com" className="hover:text-deep-orange transition-colors">
                  747988758@qq.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 VL Renovation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-deep-orange transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-deep-orange transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-deep-orange transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
