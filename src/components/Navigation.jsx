// // src/components/Navigation.jsx
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showPhilanthropyDropdown, setShowPhilanthropyDropdown] =
//     useState(false);

//   const navLinks = [
//     { label: "Home", path: "/" },
//     { label: "Biography", path: "/biography" },
//     { label: "Career", path: "/career" },
//     { label: "Political Journey", path: "/political-journey" },
//     { label: "Awards", path: "/awards" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "Timeline", path: "/timeline" },
//     { label: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="sticky top-0 z-40 bg-white border-b border-border">
//       <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 py-5 flex items-center justify-between">
//         {/* Logo/Name */}
//         <Link
//           to="/"
//           className="font-bold text-2xl text-primary hover:text-secondary transition"
//         >
//           AA Zaura
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex gap-8 items-center">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className="text-text hover:text-secondary transition font-medium text-sm py-2"
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* Philanthropy Dropdown - Desktop */}
//           <div
//             className="relative"
//             onMouseEnter={() => setShowPhilanthropyDropdown(true)}
//             onMouseLeave={() => setShowPhilanthropyDropdown(false)}
//           >
//             <button className="text-text hover:text-secondary transition font-medium text-sm py-2 flex items-center gap-1">
//               Philanthropy
//               <svg
//                 className={`w-4 h-4 transition ${showPhilanthropyDropdown ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                 />
//               </svg>
//             </button>

//             {/* Dropdown Menu */}
//             {showPhilanthropyDropdown && (
//               <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-2xl z-50 py-2">
//                 <Link
//                   to="/philanthropy"
//                   className="block px-6 py-3 text-text hover:text-secondary hover:bg-background transition text-sm"
//                 >
//                   Overview
//                 </Link>
//                 <Link
//                   to="/philanthropy#drug-abuse"
//                   className="block px-6 py-3 text-text hover:text-secondary hover:bg-background transition text-sm border-t border-border"
//                 >
//                   Drug Abuse Prevention
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-text"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden border-t border-border bg-background">
//           <div className="flex flex-col gap-2 px-6 sm:px-8 lg:px-12 py-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="text-text hover:text-secondary transition font-medium py-2"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {/* Mobile Philanthropy Dropdown */}
//             <div className="border-t border-border pt-4 mt-2">
//               <p className="font-medium text-text mb-3">Philanthropy</p>
//               <Link
//                 to="/philanthropy"
//                 className="block text-text-light hover:text-secondary transition text-sm py-2 pl-4"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Overview
//               </Link>
//               <Link
//                 to="/philanthropy#drug-abuse"
//                 className="block text-text-light hover:text-secondary transition text-sm py-2 pl-4"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Drug Abuse Prevention
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// src/components/Navigation.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhilanthropyDropdown, setShowPhilanthropyDropdown] =
    useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Biography", path: "/biography" },
    { label: "Career", path: "/career" },
    {
      label: "Philanthropy",
      path: "/philanthropy",
      dropdown: [
        { label: "Overview", path: "/philanthropy" },
        { label: "Drug Abuse Prevention", path: "/philanthropy#drug-abuse" },
      ],
    },
    { label: "Political Journey", path: "/political-journey" },
    { label: "Timeline", path: "/timeline" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="site-nav sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo/Name */}
        <Link
          to="/"
          className="font-serif text-2xl font-bold text-gray-900 hover:text-amber-700 transition"
        >
          AA Zaura
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <div key={link.path} className="nav-item relative group">
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-amber-700 transition font-medium text-sm py-2"
              >
                {link.label}
                {link.dropdown && (
                  <span className="nav-chevron" aria-hidden="true">
                    ⌄
                  </span>
                )}
              </Link>

              {/* Desktop Dropdown */}
              {link.dropdown && (
                <div className="nav-dropdown absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-6 py-3 text-gray-700 hover:text-amber-700 hover:bg-gray-50 transition text-sm whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.dropdown ? (
                  <button
                    type="button"
                    className="mobile-nav-toggle text-gray-700 hover:text-amber-700 transition"
                    onClick={() =>
                      setShowPhilanthropyDropdown(!showPhilanthropyDropdown)
                    }
                    aria-expanded={showPhilanthropyDropdown}
                  >
                    {link.label}
                    <span className="nav-chevron" aria-hidden="true">
                      ⌄
                    </span>
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-700 hover:text-amber-700 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mobile Dropdown */}
                {link.dropdown && showPhilanthropyDropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-gray-600 hover:text-amber-700 hover:bg-white transition text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
