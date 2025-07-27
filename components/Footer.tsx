import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                  <div className="absolute inset-1 bg-orange-400 rounded-sm"></div>
                </div>
              </div> */}
              <div className="flex flex-col">
                <img src="/Screenshot_25-6-2025_95248_-removebg-preview.png" alt="Astitva Agro Logo" className="w-24 h-auto" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading agriculture trading and import-export company connecting global markets with premium quality
              agricultural products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#global" className="text-gray-300 hover:text-green-400 transition-colors">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Grains & Cereals</span>
              </li>
              <li>
                <span className="text-gray-300">Pulses & Legumes</span>
              </li>
              <li>
                <span className="text-gray-300">Spices & Herbs</span>
              </li>
              <li>
                <span className="text-gray-300">Fresh Produce</span>
              </li>
              <li>
                <span className="text-gray-300">Oil Seeds</span>
              </li>
              <li>
                <span className="text-gray-300">Processed Foods</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-green-400 mt-1" size={16} />
                <div className="text-gray-300 text-sm">
                  Ground Floor, S. No 69/22,
                  <br />
                  Gunjalwadi, Sangamner, MIDC, Ahmednagar - 422605,
                  <br />
                  Maharashtra, India
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-green-400 mt-1" size={16} />
                <div className="text-gray-300 text-sm">
                 Factory - Survey No 32/6 Junegaon,
                  <br />
                  Talegaon Dighe
                  <br />
                  Sangamner, Ahilyanagar - 422611
                  <br />
                  Maharashtra, India
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-400" size={16} />
                <div className="text-gray-300 text-sm">+91 9960 637698</div>
                <div className="text-gray-300 text-sm">+91 9049 583972</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-400" size={16} />
                <div className="text-gray-300 text-sm">info@astitvaagrofpcl.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2025 Astitva Agro. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-services" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
