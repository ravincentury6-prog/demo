"use client";

import {
  Children,
  useRef,
  useState,
} from "react";
import type { ReactNode, WheelEvent } from "react";

type CardCarouselProps = {
  children: ReactNode;
  itemClassName?: string;
};

export default function CardCarousel({
  children,
  itemClassName =
    "w-[min(68vw,268px)] shrink-0 md:w-[268px] xl:w-[268px] 2xl:w-[280px] min-[1920px]:w-[300px]",
}: CardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = Children.toArray(children);
  const totalCards = cards.length;

  // Get each card's position relative to the slider
  const getCardPosition = (item: HTMLElement) => {
    const container = scrollRef.current;
    if (!container) return 0;

    return (
      item.getBoundingClientRect().left -
      container.getBoundingClientRect().left +
      container.scrollLeft
    );
  };

  // Update active diamond while scrolling
  const updateActiveIndex = () => {
    const container = scrollRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    items.forEach((item, index) => {
      const distance = Math.abs(
        getCardPosition(item) - container.scrollLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Scroll to selected card using its actual position
  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const item = container.children[index] as HTMLElement;
    if (!item) return;

    container.scrollTo({
      left: getCardPosition(item),
      behavior: "smooth",
    });
  };

  // Arrow controls
  const scrollPrevious = () => {
    scrollToCard(Math.max(activeIndex - 1, 0));
  };

  const scrollNext = () => {
    scrollToCard(Math.min(activeIndex + 1, totalCards - 1));
  };

  // Mouse wheel horizontal scrolling
  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="relative w-full">

      {/* Horizontal Cards */}
      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        onWheel={handleWheel}
        className="flex w-full gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide xl:gap-8 2xl:gap-10 min-[1920px]:gap-12"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${itemClassName} snap-start`}
          >
            {card}
          </div>
        ))}
      </div>

      {/* Bottom Indicators and Arrows */}
      <div className="mt-6 flex items-center justify-between 2xl:mt-8 min-[1920px]:mt-10">

        {/* Diamond Indicators */}
        <div className="flex items-center gap-1">
          {cards.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to card ${index + 1}`}
              aria-current={activeIndex === index ? "step" : undefined}
              onClick={() => scrollToCard(index)}
              className="flex h-3 w-3 items-center justify-center"
            >
              <span
                className={`h-1.5 w-1.5 rotate-45 border border-[#aa391c] transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#aa391c] opacity-100"
                    : "bg-transparent opacity-50"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-3 2xl:gap-4">
          <button
            type="button"
            onClick={scrollPrevious}
            disabled={activeIndex === 0}
            aria-label="Previous cards"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#aa391c] text-[#aa391c] transition hover:bg-[#aa391c] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 2xl:h-10 2xl:w-10 min-[1920px]:h-11 min-[1920px]:w-11"
          >
            <span className="text-xl leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={scrollNext}
            disabled={activeIndex === totalCards - 1 || totalCards === 0}
            aria-label="Next cards"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#aa391c] text-[#aa391c] transition hover:bg-[#aa391c] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 2xl:h-10 2xl:w-10 min-[1920px]:h-11 min-[1920px]:w-11"
          >
            <span className="text-xl leading-none">›</span>
          </button>
        </div>

      </div>
    </div>
  );
}