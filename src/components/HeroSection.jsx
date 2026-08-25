// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { personData } from "../config/content";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-section min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-24 items-center">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {personData.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-amber-700 font-semibold mb-8"
          >
            {personData.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
          >
            {personData.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 mb-12 max-w-lg leading-relaxed text-base"
          >
            A visionary leader with over 20 years of experience in business,
            philanthropy, and public service. Dedicated to empowering
            communities and building a better Nigeria.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-actions flex flex-col sm:flex-row gap-6"
          >
            <Link
              to="/biography"
              className="hero-button bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition duration-300 text-center text-base"
            >
              Read Biography
            </Link>
            <Link
              to="/philanthropy"
              className="hero-button border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition duration-300 text-center text-base"
            >
              Learn About Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:mt-4"
        >
          <div className="relative">
            {/* Subtle background shape */}
            <div className="absolute inset-0 bg-amber-700 rounded-2xl -z-10 blur-3xl opacity-10"></div>

            {/* Image */}
            <img
              src="/images/aa-zaura-profile.jpeg"
              alt="Abdussalam Abdulkarim Zaura"
              className="w-full max-w-sm rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// // src/components/HeroSection.jsx
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { personData } from "../config/content";

// export default function HeroSection() {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 1, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center">
//       <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left: Text Content */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Title */}
//           <motion.h1
//             variants={itemVariants}
//             className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
//           >
//             {personData.name}
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             variants={itemVariants}
//             className="text-xl md:text-2xl text-amber-700 font-semibold mb-4"
//           >
//             {personData.title}
//           </motion.p>

//           {/* Tagline */}
//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
//           >
//             {personData.tagline}
//           </motion.p>

//           {/* Description */}
//           <motion.p
//             variants={itemVariants}
//             className="text-gray-700 mb-10 max-w-lg leading-relaxed"
//           >
//             A visionary leader with over 20 years of experience in business,
//             philanthropy, and public service. Dedicated to empowering
//             communities and building a better Nigeria.
//           </motion.p>

//           {/* Call-to-Action Buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <Link
//               to="/biography"
//               className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition duration-300 text-center"
//             >
//               Read Biography
//             </Link>
//             <Link
//               to="/philanthropy"
//               className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition duration-300 text-center"
//             >
//               Learn About Work
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Right: Image */}
//         <motion.div
//           variants={imageVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex justify-center"
//         >
//           <div className="relative">
//             {/* Subtle background shape */}
//             <div className="absolute inset-0 bg-amber-700 rounded-2xl -z-10 blur-3xl opacity-10"></div>

//             {/* Image */}
//             <img
//               src="/images/aa-zaura-profile.jpg"
//               alt="Abdussalam Abdulkarim Zaura"
//               className="w-full max-w-sm rounded-2xl shadow-2xl object-cover"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
