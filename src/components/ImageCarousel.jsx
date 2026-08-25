//Image Carousel
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  //Auto-rotate every 6 seconds
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  //Handle manual navigation
  const goToPrevious = () => {
    setAutoPlay(false); //stop auto-play when user clicks
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setAutoPlay(false); //stop auto-play when user clicks
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  //Go to specific slide
  const goToSlide = (index) => {
    setAutoPlay(false);
    setCurrentIndex(index);
  };

  //Resume auto-play after 5 seconds of inactivity
  useEffect(() => {
    if (!autoPlay) {
      const timer = setTimeout(() => {
        setAutoPlay(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Image container */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle background shape */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full transition duration-300 shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full transition duration-300 shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 w-3 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Image Counter (optional) */}
      <div className="absolute top-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
