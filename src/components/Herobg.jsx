import nature from '../assets/video/nature.mp4';

const HeroBg = () => {

  return (
    <div className="absolute md:h-[630px] h-[400px] w-full overflow-hidden max-md:bg-black">
      <div className="relative flex items-center justify-center md:h-[630px] h-[400px] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full scale-125 hidden md:block"
        >
          <source src={nature} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute z-10 text-white text-center md:max-w-[55%] w-[70%]">
          <h1 className="md:text-5xl font-semibold mb-6 text-center text-2xl">
            Discover
          </h1>
          <h1 className='text-center md:text-5xl font-semibold -mt-5 md:leading-snug text-2xl leading-relaxed'>
            A new era of e-commerce powered by blockchain technology
          </h1>
          <button className="px-6 md:py-3 py-2 bg-gradient-to-b from-[#1b1873] to-[#2D3CD9] text-white !rounded-full font-semibold mt-11 text-xl">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
