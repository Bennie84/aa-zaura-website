// sTimelinePage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { timeline } from "../config/content";

export default function TimelinePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <SEO
        title="Timeline of AA Zaura"
        description="Complete timeline of Abdussalam Abdulkarim Zaura: education, career milestones, business achievements, and political journey."
        canonical="/timeline"
      />

      {/* Page Header */}
      <section className="timeline-section bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Life & Career Timeline
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              A chronological journey through education, business growth,
              philanthropy, and public service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="timeline-section py-24 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              This timeline traces the significant milestones in Abdussalam
              Abdulkarim Zaura's life and career—from his early education
              through his emergence as a prominent business leader,
              philanthropist, and political figure. Each milestone represents
              years of dedication, vision, and commitment to personal excellence
              and national development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section py-24 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative">
              {/* Center line (desktop only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-700 to-amber-500 transform -translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="timeline-entries space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex flex-col md:flex-row gap-8 md:gap-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 md:pr-8 md:text-right">
                      <div className="timeline-card p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition">
                        <p className="timeline-year text-sm font-semibold text-gray-700 mb-2">
                          {item.year}
                        </p>
                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                          {item.event}
                        </h3>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-amber-700 border-4 border-white"></div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 md:pl-8"></div>

                    {/* Mobile: Year badge */}
                    <div className="md:hidden">
                      <span className="timeline-year inline-block text-xs font-semibold text-white bg-amber-700 px-3 py-1.5 rounded-full">
                        {item.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Periods Section */}
      <section className="timeline-section py-24 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
            >
              Key Life Periods
            </motion.h2>

            <div className="timeline-periods grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 1977-2000: Formation */}
              <motion.div
                variants={itemVariants}
                className="timeline-period-card p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  1977–2000
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">
                  Foundation & Education
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Early life in Kano, primary and secondary education, followed
                  by technical and higher education. This period established the
                  foundation for future success.
                </p>
              </motion.div>

              {/* 2000-2010: Launch */}
              <motion.div
                variants={itemVariants}
                className="timeline-period-card p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  2000–2010
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">
                  Business Launch & Growth
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Transition from engineering to business, entry into oil and
                  gas sector, establishment of Zaura Energy Limited. First
                  decade of entrepreneurial success.
                </p>
              </motion.div>

              {/* 2010-2015: Expansion */}
              <motion.div
                variants={itemVariants}
                className="timeline-period-card p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  2010–2015
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">
                  Diversification & Philanthropy
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Multi-sector expansion into renewable energy, real estate, and
                  financial services. Establishment of A. A. Zaura Foundation
                  marking commitment to social impact.
                </p>
              </motion.div>

              {/* 2015-Present: Leadership */}
              <motion.div
                variants={itemVariants}
                className="timeline-period-card p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  2015–Present
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">
                  Public Leadership & Service
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Expansion of philanthropic reach, entry into partisan
                  politics, and emergence as thought leader on national
                  development and economic growth.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="timeline-section timeline-cta py-24 sm:py-28 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold mb-6"
            >
              Get in Touch
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 mb-10 max-w-xl mx-auto"
            >
              Have questions or want to learn more? Reach out through our
              contact page.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="timeline-actions flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="timeline-button bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition text-sm"
              >
                Contact Us
              </Link>
              <Link
                to="/"
                className="timeline-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition text-sm"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
