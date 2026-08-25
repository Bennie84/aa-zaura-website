// src/components/IntroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function IntroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="intro-section py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 md:mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight"
          >
            Building Communities, Empowering Futures
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl"
          >
            Abdussalam Abdulkarim Zaura is a distinguished businessman,
            philanthropist, and political leader from Kano State, Nigeria. With
            over two decades of experience spanning oil and gas, renewable
            energy, real estate, and financial management, he has built a
            diversified business empire while maintaining a deep commitment to
            community development and social impact.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl"
          >
            Through the A. A. Zaura Foundation, he has empowered thousands
            through education scholarships, healthcare initiatives, water
            projects, and youth empowerment programs. His entry into politics
            reflects his vision to drive national development and create lasting
            change at the highest levels of governance.
          </motion.p>
        </motion.div>

        {/* Three Key Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="intro-cards grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
        >
          {/* Business */}
          <motion.div
            variants={itemVariants}
            className="intro-card p-10 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
          >
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Business
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founder of Zaura Energy Limited and CEO of multiple companies
              spanning oil & gas, renewable energy, real estate, and financial
              management.
            </p>
            <Link
              to="/career"
              className="text-amber-700 font-semibold hover:underline text-base"
            >
              Explore Career →
            </Link>
          </motion.div>

          {/* Philanthropy */}
          <motion.div
            variants={itemVariants}
            className="intro-card p-10 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
          >
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Philanthropy
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founder of the A. A. Zaura Foundation, dedicated to education,
              healthcare, water supply, and empowering communities across
              Nigeria.
            </p>
            <Link
              to="/philanthropy"
              className="text-amber-700 font-semibold hover:underline text-base"
            >
              Explore Impact →
            </Link>
          </motion.div>

          {/* Leadership */}
          <motion.div
            variants={itemVariants}
            className="intro-card p-10 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
          >
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Leadership
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Active in politics with a vision for youth empowerment, education,
              healthcare, and infrastructure development in Nigeria.
            </p>
            <Link
              to="/political-journey"
              className="text-amber-700 font-semibold hover:underline text-base"
            >
              Political Journey →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// // src/components/IntroSection.jsx
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function IntroSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Main Text */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="mb-16"
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
//           >
//             Building Communities, Empowering Futures
//           </motion.h2>

//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl"
//           >
//             Abdussalam Abdulkarim Zaura is a distinguished businessman,
//             philanthropist, and political leader from Kano State, Nigeria. With
//             over two decades of experience spanning oil and gas, renewable
//             energy, real estate, and financial management, he has built a
//             diversified business empire while maintaining a deep commitment to
//             community development and social impact.
//           </motion.p>

//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-gray-700 leading-relaxed max-w-3xl"
//           >
//             Through the A. A. Zaura Foundation, he has empowered thousands
//             through education scholarships, healthcare initiatives, water
//             projects, and youth empowerment programs. His entry into politics
//             reflects his vision to drive national development and create lasting
//             change at the highest levels of governance.
//           </motion.p>
//         </motion.div>

//         {/* Three Key Areas */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {/* Business */}
//           <motion.div
//             variants={itemVariants}
//             className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
//           >
//             <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
//               Business
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Founder of Zaura Energy Limited and CEO of multiple companies
//               spanning oil & gas, renewable energy, real estate, and financial
//               management.
//             </p>
//             <Link
//               to="/career"
//               className="text-amber-700 font-semibold hover:underline"
//             >
//               Explore Career →
//             </Link>
//           </motion.div>

//           {/* Philanthropy */}
//           <motion.div
//             variants={itemVariants}
//             className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
//           >
//             <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
//               Philanthropy
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Founder of the A. A. Zaura Foundation, dedicated to education,
//               healthcare, water supply, and empowering communities across
//               Nigeria.
//             </p>
//             <Link
//               to="/philanthropy"
//               className="text-amber-700 font-semibold hover:underline"
//             >
//               Explore Impact →
//             </Link>
//           </motion.div>

//           {/* Leadership */}
//           <motion.div
//             variants={itemVariants}
//             className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
//           >
//             <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
//               Leadership
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Active in politics with a vision for youth empowerment, education,
//               healthcare, and infrastructure development in Nigeria.
//             </p>
//             <Link
//               to="/political-journey"
//               className="text-amber-700 font-semibold hover:underline"
//             >
//               Political Journey →
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
