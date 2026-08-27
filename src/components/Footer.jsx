// src/components/Footer.jsx
import { personData } from "../config/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-10">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">AA Zaura</h3>
            <p className="text-gray-400 text-sm">
              Businessman, philanthropist, and political leader dedicated to
              community development and public service.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="footer-links space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="/biography"
                  className="hover:text-amber-500 transition"
                >
                  Biography
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-amber-500 transition">
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/philanthropy"
                  className="hover:text-amber-500 transition"
                >
                  Philanthropy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-2">
              Email:{" "}
              <a
                href={`mailto:${personData.email}`}
                className="text-amber-500 hover:underline"
              >
                {personData.email}
              </a>
            </p>
            <p className="text-gray-400 text-sm">Phone: {personData.phone}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-10">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Abdussalam Abdulkarim Zaura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
