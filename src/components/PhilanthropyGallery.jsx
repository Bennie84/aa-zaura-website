//PhilanthropyGallery.jsx
import { motion } from "framer-motion";

export default function PhilanthropyGallery({ images = [] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Alternate slide direction for each image
  const slideVariants = [
    // Slide from left
    {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    // Slide from right
    {
      hidden: { opacity: 0, x: 60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    // Slide from left
    {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
  ];

  if (images.length === 0) return null;

  return (
    <section className="philanthropy-section philanthropy-gallery py-24 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={slideVariants[0]}
            className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
          >
            Our Work in Action
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={slideVariants[index % slideVariants.length]}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Image Container */}
                <div className="aspect-video md:aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-sm font-semibold">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
