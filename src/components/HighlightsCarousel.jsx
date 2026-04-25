import { useRef, useState, useEffect } from 'react';

const highlights = [
  {
    id: 1,
    image: '/promo1.png',
    alt: 'Upgrade your account to get 2.75% daily return',
  },
  {
    id: 2,
    image: '/promo2.png',
    alt: 'Contactless Duit Raya? Transfer je!',
  },
  {
    id: 3,
    image: '/promo3.png',
    alt: 'Win RM10,000 cash prizes weekly',
  },
];

const HighlightsCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.firstChild?.offsetWidth || 280;
      const gap = 12;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mt-4">
      {/* Yellow Header */}
      <div className="bg-accent-yellow rounded-t-3xl px-5 pt-5 pb-4">
        <h2 className="text-lg font-bold text-text-primary">Highlights</h2>
      </div>

      {/* Carousel */}
      <div className="bg-accent-yellow px-4 pb-6">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {highlights.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[75%] sm:w-[60%] md:w-[45%] snap-start cursor-pointer group"
            >
              <div className="rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2">
          {highlights.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-6 bg-text-primary'
                  : 'w-1.5 bg-text-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightsCarousel;
