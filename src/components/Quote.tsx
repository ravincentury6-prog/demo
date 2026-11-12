import Image from "next/image";
import Link from "next/link";

export default function Quote() {
  return (
    <section className="w-full bg-[#f8f1e7] px-5 py-12 sm:px-8 md:px-16 xl:px-16 2xl:px-20 2xl:py-16 min-[1920px]:px-28 min-[1920px]:py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center xl:max-w-[1400px] 2xl:max-w-[1500px] 2xl:gap-12 min-[1920px]:max-w-[1680px] min-[1920px]:gap-16">

        {/* Quote Text */}
        <div className="max-w-[650px] 2xl:max-w-[760px] min-[1920px]:max-w-[850px]">
          <p className="font-moulin-italic text-[16px] leading-[120%] text-[#555] 2xl:text-[18px] min-[1920px]:text-[20px]">
            “Ironically, tourists helped us Ladakhis understand our own unique traditions.”
          </p>

          <p className="mt-3 font-neptune text-sm text-[#555] 2xl:text-base min-[1920px]:text-lg">
            — Tsering Motup Siddho
          </p>
        </div>

        {/* Book Your Stay Image */}
        <Link
          href="/booking"
          aria-label="Book Your Stay"
          className="shrink-0 self-center md:self-auto"
        >
          <Image
            src="/assets/buttons/book-your-stay.png"
            alt="Book Your Stay"
            width={220}
            height={60}
            className="h-auto w-[220px] shrink-0 transform object-contain duration-200 hover:scale-110 2xl:w-[240px] min-[1920px]:w-[260px]"
          />
        </Link>

      </div>
    </section>
  );
}