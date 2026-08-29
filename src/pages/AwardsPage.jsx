// // AwardsPage.jsx
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import SEO from "../components/SEO";

// export default function AwardsPage() {
//   const awards = [
//     {
//       year: 2023,
//       title: "Kano Business Excellence Award",
//       organization: "Kano Chamber of Commerce",
//       description:
//         "Recognition for outstanding contributions to business development and economic growth in Kano State",
//     },
//     {
//       year: 2022,
//       title: "Humanitarian Leadership Award",
//       organization: "Nigerian Philanthropic Association",
//       description:
//         "Honored for exceptional humanitarian work and commitment to community development",
//     },
//     {
//       year: 2021,
//       title: "Education Advocate Award",
//       organization: "Kano Education Foundation",
//       description:
//         "Recognized for significant contributions to education accessibility and scholarship programs",
//     },
//     {
//       year: 2020,
//       title: "Energy Sector Pioneer Award",
//       organization: "Nigerian Energy Council",
//       description:
//         "Acknowledged for innovation and strategic leadership in the oil and gas sector",
//     },
//     {
//       year: 2019,
//       title: "Community Development Award",
//       organization: "Zaura Babba Development Association",
//       description:
//         "Recognized for transformative impact on local communities and infrastructure development",
//     },
//     {
//       year: 2018,
//       title: "Business Leadership Recognition",
//       organization: "Northern Nigeria Business Forum",
//       description:
//         "Honored for exemplary business practices and contributions to regional economic development",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
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

//   return (
//     <>
//       <SEO
//         title="Awards & Recognition of AA Zaura"
//         description="Explore the awards and honors received by Abdussalam Abdulkarim Zaura for his business excellence, philanthropy, and public service."
//         canonical="/awards"
//       />

//       {/* Page Header */}
//       <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 sm:py-28 lg:py-36">
//         <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-14">
//           <motion.div
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight">
//               Awards & Recognition
//             </h1>
//             <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
//               Honors and recognition for contributions to business,
//               philanthropy, and community development
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-24 sm:py-28 lg:py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-14">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <motion.p
//               variants={itemVariants}
//               className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl"
//             >
//               Throughout his career, Abdussalam Abdulkarim Zaura has received
//               numerous awards and recognitions from leading organizations,
//               associations, and institutions. These honors reflect his
//               dedication to excellence, innovation, and meaningful impact across
//               business, philanthropy, and public service.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Image Section */}
//       <section className="py-24 sm:py-28 lg:py-32 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-14">
//           <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               className="lg:pt-3"
//             >
//               <motion.div
//                 variants={{
//                   hidden: { opacity: 0, y: 40 },
//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                     transition: { duration: 0.8, ease: "easeOut" },
//                   },
//                 }}
//                 className="rounded-[1.75rem] overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.10)] bg-gray-200 h-72 sm:h-80 md:h-[22rem] lg:h-[28rem]"
//               >
//                 <img
//                   src="/images/aa-zaura-profile1.jpeg"
//                   alt="AA Zaura receiving recognition for business excellence and philanthropy"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </motion.div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               className="lg:pb-3"
//             >
//               <motion.div
//                 variants={{
//                   hidden: { opacity: 0, y: 40 },
//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                     transition: { duration: 0.8, ease: "easeOut" },
//                   },
//                 }}
//                 className="rounded-[1.75rem] overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.10)] bg-gray-200 h-72 sm:h-80 md:h-[22rem] lg:h-[28rem]"
//               >
//                 <img
//                   src="/images/aa-zaura-profile1.jpeg"
//                   alt="AA Zaura in a formal portrait"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Awards Grid */}
//       <section className="py-24 sm:py-28 lg:py-32 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-14">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-14"
//             >
//               Honors & Awards
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
//               {awards.map((award, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className="p-8 sm:p-9 bg-white border border-gray-200 rounded-[1.5rem] mx-3 sm:mx-4 lg:mx-5 hover:shadow-[0_18px_35px_rgba(15,23,42,0.08)] transition-all duration-300"
//                 >
//                   <div className="flex items-start justify-between gap-4 mb-5">
//                     <div className="pr-4">
//                       <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
//                         {award.title}
//                       </h3>
//                       <p className="text-amber-700 font-semibold text-xs sm:text-sm">
//                         {award.organization}
//                       </p>
//                     </div>
//                     <span className="text-[10px] sm:text-[11px] font-semibold text-white bg-amber-700 px-4 py-3 rounded-xl whitespace-nowrap shadow-sm min-w-[3.9rem] text-center">
//                       {award.year}
//                     </span>
//                   </div>
//                   <p className="text-gray-700 text-sm sm:text-[0.96rem] leading-relaxed">
//                     {award.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-24 sm:py-28 lg:py-32 bg-gray-900 text-white">
//         <div className="max-w-5xl mx-auto px-8 sm:px-10 lg:px-14 text-center">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
//             >
//               Learn More
//             </motion.h2>

//             <motion.p
//               variants={itemVariants}
//               className="text-sm sm:text-base text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed"
//             >
//               Explore his complete biography, business achievements, and
//               philanthropic work.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mt-2"
//             >
//               <Link
//                 to="/biography"
//                 className="bg-amber-700 hover:bg-amber-600 text-white px-14 py-4 rounded-xl font-semibold transition text-sm shadow-lg shadow-amber-700/20 min-w-[180px]"
//               >
//                 Full Biography
//               </Link>
//               <Link
//                 to="/career"
//                 className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-14 py-4 rounded-xl font-semibold transition text-sm min-w-[180px]"
//               >
//                 Career Journey
//               </Link>
//               <Link
//                 to="/philanthropy"
//                 className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-14 py-4 rounded-xl font-semibold transition text-sm min-w-[180px]"
//               >
//                 Philanthropy
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

// src/pages/AwardsPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function AwardsPage() {
  const awards = [
    {
      year: 2023,
      title: "Kano Business Excellence Award",
      organization: "Kano Chamber of Commerce",
      description:
        "Recognition for outstanding contributions to business development and economic growth in Kano State",
    },
    {
      year: 2022,
      title: "Humanitarian Leadership Award",
      organization: "Nigerian Philanthropic Association",
      description:
        "Honored for exceptional humanitarian work and commitment to community development",
    },
    {
      year: 2021,
      title: "Education Advocate Award",
      organization: "Kano Education Foundation",
      description:
        "Recognized for significant contributions to education accessibility and scholarship programs",
    },
    {
      year: 2020,
      title: "Energy Sector Pioneer Award",
      organization: "Nigerian Energy Council",
      description:
        "Acknowledged for innovation and strategic leadership in the oil and gas sector",
    },
    {
      year: 2019,
      title: "Community Development Award",
      organization: "Zaura Babba Development Association",
      description:
        "Recognized for transformative impact on local communities and infrastructure development",
    },
    {
      year: 2018,
      title: "Business Leadership Recognition",
      organization: "Northern Nigeria Business Forum",
      description:
        "Honored for exemplary business practices and contributions to regional economic development",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <>
      <SEO
        title="Awards & Recognition of AA Zaura"
        description="Explore the awards and honors received by Abdussalam Abdulkarim Zaura for his business excellence, philanthropy, and public service."
        canonical="/awards"
      />

      {/* Page Header */}
      <section className="award-section bg-gradient-to-b from-gray-900 to-gray-800 text-white py-32 sm:py-40">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Awards & Recognition
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Honors and recognition for contributions to business,
              philanthropy, and community development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="award-section py-28 sm:py-40 bg-white">
        <div className="award-intro max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl"
            >
              Throughout his career, Abdussalam Abdulkarim Zaura has received
              numerous awards and recognitions from leading organizations,
              associations, and institutions. These honors reflect his
              dedication to excellence, innovation, and meaningful impact across
              business, philanthropy, and public service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="award-image py-28 sm:py-40 bg-gray-50">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="rounded-lg overflow-hidden shadow-xl bg-gray-200 h-96 sm:h-[500px]"
          >
            <img
              src="/images/award-img.jpeg"
              alt="AA Zaura receiving recognition for business excellence and philanthropy"
              className="award-img w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="award-grid py-28 sm:py-40 bg-white">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16"
            >
              Honors & Awards
            </motion.h2>

            <div className="award-card grid grid-cols-1 md:grid-cols-2 gap-12">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-10 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-xl transition"
                >
                  <div className="flex items-start justify-between mb-6 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {award.title}
                      </h3>
                      <p className="text-amber-700 font-semibold text-base mb-2">
                        {award.organization}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-white bg-amber-700 px-4 py-2 rounded-lg whitespace-nowrap flex-shrink-0">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="award-action py-28 sm:py-40 bg-gray-900 text-white">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-8"
            >
              Learn More
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Explore his complete biography, business achievements, and
              philanthropic work.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                to="/biography"
                className=" award-button bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold transition text-base"
              >
                Full Biography
              </Link>
              <Link
                to="/career"
                className="award-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition text-base"
              >
                Career Journey
              </Link>
              <Link
                to="/philanthropy"
                className="award-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition text-base"
              >
                Philanthropy
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
