//Biography page
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { biography } from "../config/content";

export default function BiographyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <>
      <SEO
        title="Biography of Abdussalam Abdulkarim Zaura"
        description="Complete biography of AA Zaura: early life, education, career journey, and major milestones."
        canonical="/biography"
      />

      {/* Page Header */}
      <section className="biography-section bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              The Story of AA Zaura
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A journey of vision, determination, and commitment to building a
              better Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="biography-section py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 leading-relaxed mb-12"
            >
              {biography.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Early Life Section */}
      <section className="biography-section py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-10"
            >
              Early Life & Origins
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-8"
            >
              {biography.earlyLife}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              His roots in Zaura Babba connect him deeply to Kano's rich
              cultural heritage and entrepreneurial spirit, values that continue
              to shape his business philosophy and commitment to community
              development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="biography-section py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-16"
            >
              Education & Academic Development
            </motion.h2>

            {/* Education Timeline */}
            <div className="biography-timeline space-y-8">
              {biography.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="biography-timeline-item border-l-4 border-amber-700 pl-8 py-6 hover:bg-gray-50 transition duration-300 rounded-r-lg pr-8"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-gray-900">
                        {edu.level}
                      </h3>
                      <p className="text-amber-700 font-semibold mt-2">
                        {edu.school}
                      </p>
                    </div>
                    <span className="timeline-year text-sm font-semibold text-gray-600 bg-gray-200 px-4 py-2 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-base">{edu.location}</p>
                </motion.div>
              ))}
            </div>

            {/* Education Impact */}
            <motion.div
              variants={itemVariants}
              className="biography-note mt-16 p-10 bg-amber-50 border border-amber-200 rounded-xl"
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Academic Foundation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {biography.professionalGrowth}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="biography-section py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
            >
              Key Pillars of His Journey
            </motion.h2>

            <div className="biography-highlights grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Business Acumen */}
              <motion.div
                variants={itemVariants}
                className="biography-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
              >
                <div className="w-14 h-14 bg-amber-700 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Business Leadership
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Over 20 years of executive experience building successful
                  enterprises across oil & gas, renewable energy, real estate,
                  and financial sectors.
                </p>
              </motion.div>

              {/* Philanthropy */}
              <motion.div
                variants={itemVariants}
                className="biography-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
              >
                <div className="w-14 h-14 bg-amber-700 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Philanthropy & Impact
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Founder of the A. A. Zaura Foundation, providing education,
                  healthcare, water, and empowerment to thousands across
                  Nigeria.
                </p>
              </motion.div>

              {/* Public Service */}
              <motion.div
                variants={itemVariants}
                className="biography-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
              >
                <div className="w-14 h-14 bg-amber-700 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Public Service
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Active in politics with a vision for youth empowerment,
                  quality education, healthcare improvement, and infrastructure
                  development.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="biography-section py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-10"
            >
              Vision & Values
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-8"
            >
              Abdussalam Abdulkarim Zaura's journey is driven by a clear vision:
              to create lasting positive change in Nigeria through business
              innovation, philanthropic impact, and responsible public service.
              He believes that success in business must be coupled with a
              commitment to lifting others and building stronger communities.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              His values of integrity, vision, and service guide every
              decision—from business investments to foundation initiatives to
              political aspirations. This holistic approach to success has
              earned him recognition across Nigeria's business, philanthropic,
              and political spheres.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="biography-section biography-cta py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl font-bold mb-8"
            >
              Explore More
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Learn more about his career achievements, philanthropic
              initiatives, and vision for Nigeria's future.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="biography-actions flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                to="/career"
                className="biography-button bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold transition duration-300 text-base"
              >
                Career Journey
              </Link>
              <Link
                to="/philanthropy"
                className="biography-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition duration-300 text-base"
              >
                Philanthropy & Impact
              </Link>
              <Link
                to="/political-journey"
                className="biography-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition duration-300 text-base"
              >
                Political Vision
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
