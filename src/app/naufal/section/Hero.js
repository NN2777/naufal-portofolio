// components/Hero.js
import { PiMouseScrollLight } from "react-icons/pi";


const Hero = () => {
  return (
    <section className="relative text-white">
      <div className="container mx-auto pt-36 md:pt-72 px-4">
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold font-poppins">
            NORCANA
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-roboto_mono font-bold tracking-wide">
            Web Developer and Game Developer.
          </p>
        </div>

        {/* Icon Section */}
        <div className="flex justify-center pt-20 md:pt-40">
          <PiMouseScrollLight className="sm:size-4 md:size-8" />
        </div>
      </div>
    </section>

  );
};

export default Hero;
