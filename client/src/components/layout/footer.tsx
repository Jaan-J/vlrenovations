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
                <a href="mailto:vincentliu4129@gmail.com" className="hover:text-deep-orange transition-colors">
                  vincentliu4129@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <div className="mb-2 md:mb-0">
              © 2025 VL Renovation. All rights reserved.
            </div>
            <div>
              Made by <a href="https://yoururls.ca" target="_blank" rel="noopener noreferrer" className="hover:text-deep-orange transition-colors">YourURLs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
