import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative isolate w-full overflow-hidden text-[#f8f1e7]">

      {/* 1. Footer Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/footer/footer-background.png"
          alt="Footer background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Footer Main Content */}
      <div className="relative mx-auto min-h-[255px] w-full max-w-[1536px] xl:min-h-[255px] 2xl:min-h-[280px] 2xl:max-w-[1700px] min-[1920px]:min-h-[320px] min-[1920px]:max-w-[1800px]">

        {/* 2. Flower Image */}
        <div className="absolute bottom-0 left-[4.5%] w-[110px] max-md:left-[5%] max-md:w-[85px] 2xl:w-[125px] min-[1920px]:w-[145px]">
          <Image
            src="/assets/footer/flower.png"
            alt="Flower"
            width={200}
            height={100}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 3. Leopard Image */}
        <div className="absolute left-[11.5%] top-[2%] w-[265px] max-md:left-[25%] max-md:top-[3%] max-md:w-[65%] max-md:max-w-[250px] 2xl:w-[290px] min-[1920px]:w-[320px]">
          <Image
            src="/assets/footer/leopard.png"
            alt="Leopard"
            width={300}
            height={300}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Stay at Rumbak */}
        <div className="absolute left-[47%] top-[29%] max-md:static max-md:mt-8 max-md:px-6 2xl:top-[27%] min-[1920px]:top-[26%]">
          <h3 className="font-moulin text-[14px] text-[#f2dfc3] 2xl:text-[16px] min-[1920px]:text-[18px]">
            Stay at Rumbak
          </h3>

          <p className="mt-1 block font-neptune text-[14px] text-[#f2dfc3] 2xl:text-[15px] min-[1920px]:text-[17px]">
            chigdil.rumbak@gmail.com
          </p>

          <p className="mt-1 block font-neptune text-[14px] text-[#f2dfc3] 2xl:text-[15px] min-[1920px]:text-[17px]">
            +91 9469-451132
          </p>
        </div>

        {/* Join Our Community */}
        <div className="absolute left-[74%] top-[29%] w-[18.5%] max-md:static max-md:mt-7 max-md:w-full max-md:px-6 2xl:top-[27%] 2xl:w-[19%] min-[1920px]:top-[26%] min-[1920px]:w-[20%]">
          <h3 className="font-moulin text-[14px] text-[#f2dfc3] 2xl:text-[16px] min-[1920px]:text-[18px]">
            Join our community
          </h3>

          <form className="mt-3 flex w-full items-center border-b border-[#f2dfc3] pb-1 2xl:mt-4 min-[1920px]:mt-5">
            <input
              type="email"
              placeholder="Enter your mail"
              className="min-w-0 flex-1 bg-transparent font-neptune text-[14px] text-[#f2dfc3] outline-none placeholder:text-[#f8f1e7] opacity-70 2xl:text-[15px] min-[1920px]:text-[17px]"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="ml-2 font-neptune text-[20px] text-[#f2dfc3] 2xl:text-[22px] min-[1920px]:text-[25px]"
            >
              →
            </button>
          </form>
        </div>

        {/* 4. WhatsApp and 5. Instagram Images */}
        <div className="absolute left-[74%] top-[72%] flex items-center gap-7 max-md:static max-md:mt-8 max-md:px-6 2xl:gap-8 min-[1920px]:gap-10">

          <a
            href="https://wa.me/919469451132"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Image
              src="/assets/buttons/whatsapp.png"
              alt="WhatsApp"
              width={28}
              height={28}
              className="h-[25px] w-[25px] object-contain 2xl:h-[28px] 2xl:w-[28px] min-[1920px]:h-[32px] min-[1920px]:w-[32px]"
            />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              src="/assets/buttons/instagram.png"
              alt="Instagram"
              width={28}
              height={28}
              className="h-[25px] w-[25px] object-contain 2xl:h-[28px] 2xl:w-[28px] min-[1920px]:h-[32px] min-[1920px]:w-[32px]"
            />
          </a>

        </div>

        {/* Copyright */}
        <p className="absolute bottom-[19%] right-[7.5%] font-neptune text-[12px] text-[#f8f1e7] opacity-50 max-md:static max-md:mt-6 max-md:pb-6 max-md:pl-6 2xl:text-[13px] min-[1920px]:text-[15px]">
          @chigdil 2026
        </p>

      </div>
    </footer>
  );
}