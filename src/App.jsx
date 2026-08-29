// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BiographyPage from "./pages/BiographyPage";
import CareerPage from "./pages/CareerPage";
import PhilanthropyPage from "./pages/PhilanthropyPage";
import PoliticalJourneyPage from "./pages/PoliticalJourneyPage";
import TimelinePage from "./pages/TimelinePage";
import ContactPage from "./pages/ContactPage";
import AwardsPage from "./pages/AwardsPage";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// create pages next - for now, placeholder
// function HomePage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center text-center">
//       <div>
//         <h1 className="font-serif text-5xl font-bold mb-4">AA Zaura</h1>
//         <p className="text-xl text-gray-600">Coming soon...</p>
//       </div>
//     </div>
//   );
// }

// function BiographyPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h1 className="font-serif text-4xl font-bold mb-6">Biography</h1>
//       <p>Biography page coming soon...</p>
//     </div>
//   );
// }

// function CareerPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h1 className="font-serif text-4xl font-bold mb-6">Career</h1>
//       <p>Career page coming soon...</p>
//     </div>
//   );
// }

// function PhilanthropyPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h1 className="font-serif text-4xl font-bold mb-6">Philanthropy</h1>
//       <p>Philanthropy page coming soon...</p>
//     </div>
//   );
// }

// function PoliticalPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h1 className="font-serif text-4xl font-bold mb-6">Political Journey</h1>
//       <p>Political Journey page coming soon...</p>
//     </div>
//   );
// }

// function TimelinePage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h1 className="font-serif text-4xl font-bold mb-6">Timeline</h1>
//       <p>Timeline page coming soon...</p>
//     </div>
//   );
// }

// function ContactPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <h1 className="font-serif text-4xl font-bold mb-6">Contact</h1>
//       <p>Contact page coming soon...</p>
//     </div>
//   );
// }

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/biography" element={<BiographyPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/philanthropy" element={<PhilanthropyPage />} />
              <Route
                path="/political-journey"
                element={<PoliticalJourneyPage />}
              />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/awards" element={<AwardsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
