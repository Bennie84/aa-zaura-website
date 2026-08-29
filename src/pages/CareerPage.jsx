// CareerPage
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { businessCareer } from "../config/content";

export default function CareerPage() {
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
        title="Career & Business Journey of AA Zaura"
        description="Explore the professional career of Abdussalam Abdulkarim Zaura: business achievements, companies, and leadership across multiple sectors."
        canonical="/career"
      />

      {/* Page Header */}
      <section className="career-section bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Career & Business Leadership
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Over 20 years of strategic business development and executive
              excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="career-section py-28 bg-white">
        <div className="career-intro max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="career-intro-copy"
          >
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              Abdussalam Abdulkarim Zaura's business career spans over two
              decades of strategic growth, innovation, and sector
              diversification. From initial ventures in the 1990s to
              establishing a multi-billion naira business empire, his journey
              reflects vision, determination, and an ability to identify and
              capitalize on emerging opportunities.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 leading-relaxed"
            >
              His expertise spans oil and gas, renewable energy, real estate
              development, commodities trading, aviation, and financial
              management—positioning him as a versatile leader capable of
              managing complex, multi-sector enterprises.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="career-feature-image mx-auto max-w-sm"
          >
            <img
              src="/images/political-img2.jpeg"
              alt="Abdussalam Abdulkarim Zaura - Career and Business Leadership"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Career Milestones Timeline */}
      <section className="career-section py-28 bg-white">
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
              Career Milestones
            </motion.h2>

            {/* Timeline */}
            <div className="career-timeline space-y-10">
              {businessCareer.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="career-timeline-item border-l-4 border-amber-700 pl-8 py-8 hover:bg-gray-50 transition duration-300 rounded-r-lg pr-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-gray-900">
                        {milestone.position}
                      </h3>
                      {milestone.company && (
                        <p className="text-amber-700 font-semibold mt-2">
                          {milestone.company}
                        </p>
                      )}
                    </div>
                    <span className="timeline-year text-sm font-semibold text-white bg-amber-700 px-4 py-2 rounded-full ml-4">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Sectors List */}
                  {milestone.sectors && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="font-semibold text-gray-900 mb-4">
                        Business Sectors:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {milestone.sectors.map((sector, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                            <span>{sector}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Companies List */}
                  {milestone.companies && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="font-semibold text-gray-900 mb-4">
                        Companies & Roles:
                      </p>
                      <div className="space-y-3">
                        {milestone.companies.map((company, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-amber-700 rounded-full mt-2"></div>
                            <span>{company}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Sectors Section */}
      <section className="career-section py-28 bg-gray-50">
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
              Business Sectors & Expertise
            </motion.h2>

            <div className="career-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Oil & Gas */}
              <motion.div
                variants={itemVariants}
                className="career-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
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
                  Oil & Gas
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Founder and CEO of Zaura Energy Limited. Over 15 years of
                  experience in petroleum sector operations, management, and
                  strategic partnerships across West Africa.
                </p>
              </motion.div>

              {/* Renewable Energy */}
              <motion.div
                variants={itemVariants}
                className="career-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
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
                      d="M12 3v1m0 16v1m9-9h-1m-16 0H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Renewable Energy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Strategic investments in sustainable energy projects.
                  Committed to Nigeria's energy transition and clean power
                  development initiatives.
                </p>
              </motion.div>

              {/* Real Estate */}
              <motion.div
                variants={itemVariants}
                className="career-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
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
                      d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l-4-4m0 0l-4 4m4-4v4m8-10l4 4m0 0l4-4m-4 4v4"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Real Estate & Property
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Major investments in commercial and residential property
                  development across Kano and other strategic locations in
                  Nigeria.
                </p>
              </motion.div>

              {/* Commodities */}
              <motion.div
                variants={itemVariants}
                className="career-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
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
                  Commodities Trading
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Strategic commodities trading operations with international
                  partnerships and expertise in market analysis and supply chain
                  management.
                </p>
              </motion.div>

              {/* Aviation & Transport */}
              <motion.div
                variants={itemVariants}
                className="career-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
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
                  Aviation & Transport
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Sals Core Limited manages car sales and rental operations.
                  Interests in logistics and aviation sector development
                  initiatives.
                </p>
              </motion.div>

              {/* Financial Management */}
              <motion.div
                variants={itemVariants}
                className="career-card p-10 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition duration-300"
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Financial Management & Investments
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Strategic investments and financial management with expertise
                  in portfolio diversification and long-term wealth creation
                  strategies.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="career-section py-28 bg-white">
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
              Professional Achievements
            </motion.h2>

            <div className="career-achievements space-y-8">
              <motion.div
                variants={itemVariants}
                className="career-achievement flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-amber-700 text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                    20+ Years of Executive Experience
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Proven track record of building and managing successful
                    enterprises across multiple sectors with international
                    standards.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="career-achievement flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-amber-700 text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                    Multi-Sector Leadership
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Successfully navigated and led operations across six major
                    business sectors, demonstrating versatility and strategic
                    acumen.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="career-achievement flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-amber-700 text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                    International Business Operations
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Managed companies with international headquarters and
                    partnerships, demonstrating global business competence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="career-achievement flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-amber-700 text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                    Strategic Growth & Expansion
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Consistent track record of identifying growth opportunities
                    and scaling businesses sustainably and profitably.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="career-section career-cta py-28 bg-gray-900 text-white">
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
              Learn more about his philanthropic impact, political vision, and
              complete timeline of achievements.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="career-actions flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                to="/philanthropy"
                className="career-button bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold transition duration-300 text-base"
              >
                Philanthropy & Impact
              </Link>
              <Link
                to="/timeline"
                className="career-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition duration-300 text-base"
              >
                Complete Timeline
              </Link>
              <Link
                to="/political-journey"
                className="career-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-semibold transition duration-300 text-base"
              >
                Political Leadership
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
