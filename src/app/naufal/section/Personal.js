import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

// components/Personal.js
const Personal = () => {
  return (
    <section className="flex flex-row py-10 gap-x-16 text-white w-screen px-8 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      <div className="flex flex-col basis-1/2 gap-y-16">
        <h2 className="font-poppins font-semibold sm:text-4xl lg:text-7xl">Meet The Artist</h2>
        <p className="text-gray-300 font-roboto_mono text-sm sm:text-xs lg:text-xl">
          A passionate individual at the intersection of art and technology, combining creativity and technical expertise to craft compelling experiences. Skilled in game development, 3D modeling, narrative writing, and web development, I thrive on blending artistic expression with technological innovation to bring unique ideas to life.
        </p>
        <div className="flex flex-row font-segoe_ui_bold text-xl">
          <div className="basis-1/3">
            <p>Get in touch</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="">Explore my resume</p>
            <FaExternalLinkAlt className="self-center" size={20} />
          </div>
        </div>
      </div>
      <div className="basis-1/2 bg-white relative overflow-hidden">
        <Image
          src={"/custom/ProfilePic.png"}
          alt="My Image"
          fill
          style={{ objectFit: "cover" }}
          className="justify-self-center"
        />
      </div>
    </section>
  );
};

export default Personal;
