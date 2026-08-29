// src/pages/PoliticalJourneyPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { politicalCareer } from "../config/content";

export default function PoliticalJourneyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  // Slide from left
  const slideFromLeftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Slide from right
  const slideFromRightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <SEO
        title="Political Journey of AA Zaura"
        description="Explore AA Zaura's political career: candidacies, campaigns, and vision for Nigeria's future."
        canonical="/political-journey"
      />

      {/* Page Header */}
      <section className="political-section bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Political Journey & Public Service
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              A vision for youth empowerment, quality education, healthcare, and
              national development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="political-section py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
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
              After establishing himself as a successful businessman and
              philanthropist, Abdussalam Abdulkarim Zaura entered the political
              arena with a clear vision: to translate his business acumen and
              community commitment into public service. His political journey
              reflects his belief that real change requires engagement at the
              highest levels of governance.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              Zaura's political platform centers on four core pillars: youth
              empowerment, quality education, healthcare improvement, and
              infrastructure development—issues that directly impact Nigeria's
              future and align with his philanthropic mission.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Political Timeline */}
      <section className="political-section py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-10 sm:mb-12"
            >
              Political Timeline
            </motion.h2>

            <div className="political-timeline space-y-7 sm:space-y-8">
              {politicalCareer.map((event, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="political-timeline-item border-l-4 border-amber-700 pl-5 sm:pl-6 py-5 sm:py-6 hover:bg-gray-50 transition rounded-r-lg pr-5 sm:pr-6"
                >
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-gray-900">
                        {event.event}
                      </h3>
                      {event.party && (
                        <p className="text-amber-700 font-semibold text-sm mt-1">
                          {event.party}
                        </p>
                      )}
                      {event.position && (
                        <p className="text-gray-600 text-sm mt-1">
                          {event.position}
                        </p>
                      )}
                      <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    <span className="timeline-year text-xs font-semibold text-white bg-amber-700 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {event.year}
                    </span>
                  </div>

                  {/* Platform */}
                  {event.platform && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="font-semibold text-gray-900 text-sm mb-3">
                        Campaign Platform:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.platform.map((item, pidx) => (
                          <div
                            key={pidx}
                            className="flex items-center gap-2 text-gray-700 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-amber-700 rounded-full"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  {event.outcome && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">Outcome:</span>{" "}
                        {event.outcome}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Political Vision & Values */}
      <section className="political-section py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-10 sm:mb-12"
            >
              Political Vision & Core Values
            </motion.h2>

            <div className="political-cards grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Youth Empowerment */}
              <motion.div
                variants={itemVariants}
                className="political-card p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-amber-700"
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
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Youth Empowerment
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Believes young Nigerians are the key to the nation's future.
                  Advocates for skills development, job creation, and
                  entrepreneurship opportunities.
                </p>
              </motion.div>

              {/* Quality Education */}
              <motion.div
                variants={itemVariants}
                className="political-card p-6 sm:p-7 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.338c0 5.306 4.582 9.603 10 9.603s10-4.297 10-9.603c0-6.34-4.5-11.085-10-11.085z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Quality Education
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Committed to improving educational infrastructure and access.
                  Education is the foundation for breaking cycles of poverty and
                  building informed citizens.
                </p>
              </motion.div>

              {/* Healthcare Improvement */}
              <motion.div
                variants={itemVariants}
                className="political-card p-6 sm:p-7 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Healthcare Improvement
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Advocates for accessible, quality healthcare for all
                  Nigerians. Believes healthcare is a fundamental right, not a
                  privilege.
                </p>
              </motion.div>

              {/* Infrastructure Development */}
              <motion.div
                variants={itemVariants}
                className="political-card p-6 sm:p-7 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                  Infrastructure Development
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Committed to developing critical infrastructure: roads,
                  electricity, water systems, and communication networks that
                  enable economic growth.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ruling Party Member Section */}
      <section className="py-28 sm:py-40 bg-white">
        <div className="political-card max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-2l font-bold text-gray-900 mb-16"
            >
              Political Engagement & Party Leadership
            </motion.h2>

            {/* Main Text */}
            <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
              <p className="text-lg sm:text-m text-gray-700 leading-relaxed">
                A A Zaura is a bonafide ruling party member who garnered
                millions of votes for President Bola Ahmed Tinubu's historic
                victory in his constituency. His commitment to the All
                Progressives Congress (APC) and grassroots mobilization has
                demonstrated his ability to connect with voters and drive
                electoral success while maintaining his vision for development
                and democratic governance.
              </p>
            </motion.div>

            {/* Two Column Image Grid */}
            <div className=" image-card grid grid-cols-1 md:grid-cols-2 gap-11">
              {/* Image 1 - Slide from Left */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                className="rounded-lg overflow-hidden shadow-xl bg-gray-200 h-80 sm:h-96"
              >
                <img
                  src="/images/pres-tinubu2.jpeg"
                  alt="AA Zaura receiving recognition certificate"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image 2 - Slide from Right */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                className="rounded-lg overflow-hidden shadow-xl bg-gray-200 h-80 sm:h-96 "
              >
                <img
                  src="/images/pres-tinubu.jpeg"
                  alt="AA Zaura engaging with political leaders and constituents"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Supporting Text */}
            <motion.div
              variants={itemVariants}
              className="mt-16 p-12 bg-gray-50 border border-gray-200 rounded-lg"
            >
              {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Electoral Success & Grassroots Impact
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Through strategic mobilization and genuine engagement with
                communities, AA Zaura has proven his ability to translate
                political vision into electoral victories. His support for
                President Tinubu's agenda demonstrates his commitment to
                progressive governance and national development.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                His work at the grassroots level strengthens the APC's
                foundation in his constituency while advancing policies that
                prioritize education, economic opportunity, healthcare, and
                infrastructure development—core pillars of his political
                philosophy.
              </p> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Political Approach Section */}
      <section className="political-section py-20 sm:py-24 bg-gray-50">
        <div className="political-approach max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10"
            >
              Approach to Governance
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
            >
              Zaura's political philosophy is rooted in his business success:
              strategic thinking, accountability, and results-oriented
              execution. He believes governance should operate like a
              well-managed enterprise—transparent, efficient, and focused on
              measurable outcomes.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
            >
              He advocates for reducing corruption, improving institutional
              efficiency, and creating an enabling environment for both public
              and private sector growth. His experience managing multi-sector
              businesses gives him unique insight into economic development and
              resource optimization.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              Above all, Zaura is committed to public service—using his
              influence and resources to drive national development and improve
              the quality of life for ordinary Nigerians.
            </motion.p>

            <motion.div variants={itemVariants} className="political-read-more">
              <div>
                <h3>Why He Joined Politics</h3>
                <p>
                  In an interview with Leadership, A.A. Zaura explained that his
                  desire to touch more lives and serve more people inspired his
                  move into politics. He described public service as an
                  extension of his philanthropic work through health, education,
                  women, and youth empowerment initiatives.
                </p>
              </div>
              <a
                href="https://leadership.ng/i-joined-politics-to-touch-more-lives-a-a-zaura/"
                target="_blank"
                rel="noopener noreferrer"
                className="political-read-more-link"
              >
                Read Full Article
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="political-approach-image"
          >
            <img
              src="/images/political-img.jpeg"
              alt="Abdussalam Abdulkarim Zaura in public service"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="political-section political-cta py-24 sm:py-28 bg-gray-900 text-white">
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
              Learn More About AA Zaura
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 mb-10 max-w-xl mx-auto"
            >
              Explore his complete biography, business achievements, and
              philanthropic work.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="political-actions flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/biography"
                className="political-button bg-amber-700 hover:bg-amber-600 text-white px-9 py-3.5 rounded-xl font-semibold transition text-sm sm:text-[0.95rem]"
              >
                Full Biography
              </Link>
              <Link
                to="/career"
                className="political-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-9 py-3.5 rounded-xl font-semibold transition text-sm sm:text-[0.95rem]"
              >
                Business Journey
              </Link>
              <Link
                to="/philanthropy"
                className="political-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-9 py-3.5 rounded-xl font-semibold transition text-sm sm:text-[0.95rem]"
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
