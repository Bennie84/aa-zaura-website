// src/pages/PhilanthropyPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import PhilanthropyGallery from "../components/PhilanthropyGallery";
import { philanthropy } from "../config/content";

export default function PhilanthropyPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#drug-abuse") {
      requestAnimationFrame(() => {
        document.getElementById("drug-abuse")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.hash]);

  // Gallery images - update with real images when you provide them
  const galleryImages = [
    {
      src: "/images/philanthropy-img1.jpeg",
      alt: "AA Zaura Foundation scholarship program",
      caption: "Education & Scholarship Programs",
    },
    {
      src: "/images/philanthropy-img2.jpeg",
      alt: "Healthcare initiative by AA Zaura Foundation",
      caption: "Healthcare & Wellness Projects",
    },
    {
      src: "/images/philanthropy-img3.jpeg",
      alt: "Water and sanitation project",
      caption: "Water Supply & Community Infrastructure",
    },
    // {
    //   src: "/images/foundation-truck.jpeg",
    //   alt: "Water and sanitation project",
    //   caption: "Water Supply & Community Infrastructure",
    // },
  ];

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

  return (
    <>
      <SEO
        title="Philanthropy & Impact of AA Zaura"
        description="Learn about AA Zaura Foundation: education scholarships, healthcare, water projects, and community development initiatives."
        canonical="/philanthropy"
      />

      {/* Page Header */}
      <section className="philanthropy-section bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Philanthropy & Community Impact
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Building sustainable solutions for healthcare, education, and
              community empowerment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="philanthropy-section py-24 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
            >
              Beyond his thriving business enterprises, Abdussalam Abdulkarim
              Zaura is deeply committed to philanthropic endeavors that improve
              the lives of Nigeria's most vulnerable populations. The A. A.
              Zaura Foundation stands as a testament to his belief that business
              success must translate into tangible social impact.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              Through strategic initiatives in education, healthcare, water
              supply, and youth empowerment, the foundation has transformed
              countless lives across Kano State and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery with Sliding Images */}
      <PhilanthropyGallery images={galleryImages} />

      {/* Foundation Overview */}
      <section className="philanthropy-section py-24 sm:py-28 bg-gray-50">
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
              The A. A. Zaura Foundation
            </motion.h2>

            <div className="foundation-overview grid grid-cols-1 lg:grid-cols-3 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="foundation-image"
              >
                <img
                  src="/images/foundation-truck.jpeg"
                  alt="AA Zaura Foundation community initiative"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              <div className="philanthropy-cards grid grid-cols-1 sm:grid-cols-2 gap-10 lg:col-span-2">
                {/* Mission */}
                <motion.div
                  variants={itemVariants}
                  className="philanthropy-card p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                >
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                    Mission
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {philanthropy.mission}
                  </p>
                </motion.div>

                {/* Focus Areas */}
                <motion.div
                  variants={itemVariants}
                  className="philanthropy-card p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                >
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                    Focus Areas
                  </h3>
                  <ul className="space-y-2">
                    {philanthropy.focusAreas.map((area, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 text-sm"
                      >
                        <span className="text-amber-700 font-bold mt-0.5">
                          •
                        </span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Initiatives */}
      <section className="philanthropy-section py-24 sm:py-28 bg-white">
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
              Major Initiatives
            </motion.h2>

            <div className="philanthropy-initiatives space-y-8">
              {philanthropy.majorInitiatives.map((initiative, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="philanthropy-initiative border-l-4 border-amber-700 pl-6 py-5 hover:bg-gray-50 transition rounded-r-lg pr-6"
                >
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-gray-900">
                        {initiative.initiative}
                      </h3>
                      <p className="text-gray-700 text-sm mt-1">
                        {initiative.description}
                      </p>
                    </div>
                    <span className="timeline-year text-xs font-semibold text-white bg-amber-700 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {initiative.year}
                    </span>
                  </div>

                  {initiative.amount && (
                    <div className="flex gap-6 mt-4 text-sm">
                      <div>
                        <p className="text-gray-600 text-xs">Amount</p>
                        <p className="font-semibold text-gray-900">
                          {initiative.amount}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs">Beneficiaries</p>
                        <p className="font-semibold text-gray-900">
                          {initiative.beneficiaries}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas of Support */}
      <section className="philanthropy-section py-24 sm:py-28 bg-gray-50">
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
              Areas of Direct Support
            </motion.h2>

            <div className="philanthropy-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {philanthropy.otherSupport.map((support, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="philanthropy-card p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm font-medium">
                      {support}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Drug Abuse Prevention Initiative - NEW SECTION
      <section id="drug-abuse" className="py-16 sm:py-24 bg-white">
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
              Drug Abuse Prevention & Youth Empowerment
            </motion.h2> */}

      {/* Drug Abuse Prevention Initiative */}
      <section
        id="drug-abuse"
        className="philanthropy-section drug-abuse-section py-24 sm:py-28 bg-white"
      >
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
            >
              Drug Abuse Prevention & Youth Empowerment
            </motion.h2>

            {/* Image Slide In from Left */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="drug-abuse-image mx-auto mb-12 max-w-4xl rounded-lg overflow-hidden shadow-lg bg-gray-100 h-64 sm:h-80"
            >
              <img
                src="/images/foundation-img.jpeg"
                alt="AA Zaura discussing drug abuse prevention with business community"
                className="w-full h-full object-fit"
              />
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl"
            >
              Recognizing the escalating crisis of drug addiction and youth
              restlessness in Kano, AA Zaura has positioned the foundation at
              the forefront of comprehensive intervention efforts. Working with
              the business community, traditional rulers, religious leaders, and
              community stakeholders, the foundation is developing holistic
              solutions to address not just the symptoms, but the root causes of
              drug abuse and youth violence.
            </motion.p>

            {/* Key Initiatives */}
            <div className="drug-abuse-cards grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {/* The Problem */}
              <motion.div
                variants={itemVariants}
                className="drug-abuse-card p-8 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  The Challenge
                </h3>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Drug abuse among youth has become a severe threat to Kano's
                    social and economic stability. Beyond addiction itself, the
                    crisis has fueled gang violence, armed crime, and community
                    instability.
                  </p>
                  <p>
                    Youth gangs increasingly possess dangerous weapons and
                    engage in criminal activities, creating an urgent security
                    concern that demands coordinated, compassionate
                    intervention.
                  </p>
                </div>
              </motion.div>

              {/* The Solution */}
              <motion.div
                variants={itemVariants}
                className="drug-abuse-card p-8 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  From Street to Straight
                </h3>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p>
                    The AA Zaura Foundation's flagship initiative aims to break
                    the cycle through comprehensive rehabilitation and
                    reintegration:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Rehabilitation programs for affected youth</li>
                    <li>• Vocational training and skill development</li>
                    <li>• Educational support and scholarships</li>
                    <li>• Business empowerment and mentorship</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Collaborative Approach */}
            <motion.div
              variants={itemVariants}
              className="drug-abuse-card p-8 bg-amber-50 border border-amber-200 rounded-lg mb-16"
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                A Collaborative Approach
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                AA Zaura emphasizes that sustainable solutions require
                engagement beyond security forces alone. The foundation is
                mobilizing Kano's business community, recognizing them as the
                backbone of employment and youth empowerment. Through
                collaborative committees and stakeholder engagement, the
                initiative combines:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Community Partners
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Traditional rulers and community leaders</li>
                    <li>• Religious scholars (Ulama)</li>
                    <li>• Business leaders and entrepreneurs</li>
                    <li>• Law enforcement agencies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Intervention Methods
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Rehabilitation and counseling</li>
                    <li>• Job creation and mentorship</li>
                    <li>• Educational opportunities</li>
                    <li>• Dignity-centered reintegration</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="drug-abuse-card p-8 border-l-4 border-amber-700 bg-white"
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                A Personal Commitment
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                AA Zaura has made a personal commitment to this initiative,
                viewing it as a legacy project crucial to Kano's future. With
                pilot programs soon to launch, the foundation is calling on the
                entire business community, well-meaning citizens, and government
                stakeholders to join the effort to reclaim Kano's streets from
                criminal gangs and restore hope to the younger generation.
              </p>
              <p className="text-gray-700 text-sm italic">
                "This solution is mapped out. We will launch the pilot project
                in the very near future. This will come to existence. I will not
                stop it."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="philanthropy-section py-24 sm:py-28 bg-white">
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
              Measuring Impact
            </motion.h2>

            <div className="impact-cards grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="impact-card p-8 bg-amber-50 border border-amber-200 rounded-lg"
              >
                <div className="impact-value text-2xl font-bold text-amber-700 mb-2">
                  ₦200M+
                </div>
                <p className="text-gray-700 text-sm">
                  Scholarships disbursed to students across Kano State
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="impact-card p-8 bg-amber-50 border border-amber-200 rounded-lg"
              >
                <div className="impact-value text-2xl font-bold text-amber-700 mb-2">
                  10,000+
                </div>
                <p className="text-gray-700 text-sm">
                  Target beneficiaries through expanded education programs
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="impact-card p-8 bg-amber-50 border border-amber-200 rounded-lg"
              >
                <div className="impact-value text-2xl font-bold text-amber-700 mb-2">
                  Multi-Sector
                </div>
                <p className="text-gray-700 text-sm">
                  Healthcare, water, infrastructure, and community development
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="impact-card p-8 bg-amber-50 border border-amber-200 rounded-lg"
              >
                <div className="impact-value text-2xl font-bold text-amber-700 mb-2">
                  Ongoing
                </div>
                <p className="text-gray-700 text-sm">
                  Continuous commitment to sustainable development projects
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philanthropy-section py-24 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
            >
              Philanthropic Philosophy
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
            >
              Zaura believes that philanthropy must be strategic, sustainable,
              and systemic. Rather than temporary relief, his foundation focuses
              on building long-term capacity and creating structural change that
              empowers communities to thrive independently.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              Education, healthcare access, and economic opportunity form the
              foundation of his giving. By investing in human capital and
              community infrastructure, he works toward Nigeria's broader
              development goals while honoring his personal commitment to giving
              back to society.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="philanthropy-section philanthropy-cta py-24 sm:py-28 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold mb-6 mt-20"
            >
              Learn More
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 mb-10 max-w-xl mx-auto"
            >
              Explore his complete journey, business achievements, and political
              vision.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="philanthropy-actions flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/biography"
                className="philanthropy-button bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition text-sm"
              >
                Biography
              </Link>
              <Link
                to="/career"
                className="philanthropy-button border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition text-sm"
              >
                Career Journey
              </Link>
              <Link
                to="/timeline"
                className="philanthropy-button border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition text-sm"
              >
                Timeline
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
