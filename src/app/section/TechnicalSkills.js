// components/TechnicalSkills.js
import { MdOutlineWebAsset } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaWordpressSimple } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { SiGodotengine } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { SiBlender } from "react-icons/si";


const TechnicalSkills = () => {
  return (
    <section className="px-32 py-16 text-white">
      <h2 className="text-7xl text-center font-bold font-poppins">Technical Skills</h2>
      <div className="flex flex-col sm:flex-row sm:gap-y-20 lg:gap pt-6 justify-center">
        {/* WEB DEVELOPMENT CONTENT */}
        <div className="flex flex-col font-bold w-[400px] font-poppins px-10 py-8 border border-white gap-2 place-items-center">
          <div className="flex grow flex-row text-wrap gap-6 place-self-start"> {/* title */}
            <MdOutlineWebAsset size={60} className="self-center" />
            {/* <h3 className="text-2.5xl self-center">Web Development</h3> */}
            <div className="flex flex-col self-center text-2.5xl">
              {/* Web with background */}
              <div className="relative flex">
                {/* Optional background container for 1/3 height */}
                <div className="absolute w-[63px] bottom-0 left-0 w-16 h-1/3 bg-[#4056FF]"></div>
                <div className="shrink z-40">
                  Web
                </div>
              </div>
              {/* Development */}
              <h3 className="self-center">Development</h3>
            </div>
          </div>
          <div className="flex grow flex-row font-roboto_mono gap-1 w-[340px] min-h-[180px] "> {/* desc */}
            <div className="flex flex-col text-base font-regular text-center gap-2">
              <p className=""> &lt;h3&gt;</p>
              <div className="h-[115px] bg-white w-[1px] self-center"></div>
              <p className="">&lt;/h3&gt;</p>
            </div>
            <div className="flex pt-[29px] text-wrap font-bold text-base w-[292px]">
              Experienced in building responsive websites with a focus on functionality and user experience, utilizing modern frameworks and tools.
            </div>
          </div>
          <div className="flex grow justify-center font-roboto_mono font-medium text-xl"> {/* tools title */}
            <p>// tools</p>
          </div>
          <div className="flex flex-row"> {/* tools */}
            <div className="flex grow flex-col font-roboto_mono text-base font-regular text-center gap-2">
              <p className=""> &lt;img&gt;</p>
              <div className="h-[200px] bg-white w-[1px] self-center"></div>
              <p className="">&lt;/img&gt;</p>
            </div>
            <div className="flex flex-wrap min-w-[290px] font-extrabold text-base pt-[29] gap-x-12 gap-y-6 justify-center">
              <div className="flex flex-col items-center gap-2">
                <RiNextjsFill size={50} />
                NextJS
              </div>
              <div className="flex flex-col items-center gap-2">
                <RiTailwindCssFill size={50} />
                Tailwind
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaLaravel size={50} />
                Laravel
              </div>
              <div className="flex flex-col items-center gap-2">
                <DiMysql size={50} />
                MySQL
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaWordpressSimple size={50} />
                WordPress
              </div>
            </div>
          </div>
        </div>
        {/* GAME DEVELOPMENT CONTENT */}
        <div className="flex flex-col font-bold w-[400px] font-poppins px-10 py-8 border border-white gap-2 place-items-center">
          <div className="flex flex-row text-wrap gap-6 place-self-start"> {/* title */}
            <IoGameControllerOutline size={60} className="self-center" />
            {/* <h3 className="text-2.5xl self-center">Web Development</h3> */}
            <div className="flex flex-col self-center text-2.5xl">
              {/* Web with background */}
              <div className="relative flex">
                {/* Optional background container for 1/3 height */}
                <div className="absolute w-[83px] bottom-0 left-0 w-20 h-1/3 bg-[#FA3D3D]"></div>
                <div className="shrink z-40">
                  Game
                </div>
              </div>
              {/* Development */}
              <h3 className="self-center">Development</h3>
            </div>
          </div>
          <div className="flex grow font-roboto_mono gap-1 w-[340px] min-h-[180px]"> {/* desc */}
            <div className="flex flex-col text-base font-regular text-center gap-2">
              <p className=""> &lt;h3&gt;</p>
              <div className="h-[88px] bg-white w-[1px] self-center"></div>
              <p className="">&lt;/h3&gt;</p>
            </div>
            <div className="flex pt-[29px] text-wrap font-bold text-base w-[292px]">
              Passionate about creating fun and unique narrative-driven games, with expertise in UI/UX in general
            </div>
          </div>
          <div className="flex grow justify-center font-roboto_mono font-medium text-xl"> {/* tools title */}
            <p>// tools</p>
          </div>
          <div className="flex flex-row"> {/* tools */}
            <div className="flex flex-col font-roboto_mono text-base font-regular text-center gap-2">
              <p className=""> &lt;img&gt;</p>
              <div className="h-[200px] bg-white w-[1px] self-center"></div>
              <p className="">&lt;/img&gt;</p>
            </div>
            <div className="flex flex-col min-w-[290px] font-extrabold text-base gap-x-12 gap-y-12 pt-[29px]">
              <div className="flex flex-col items-center gap-2 ">
                <SiGodotengine size={50} />
                Godot 4
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaUnity size={50} />
                Unity
              </div>
            </div>
          </div>
        </div>
        {/* CREATIVE DESIGN CONTENT */}
        <div className="flex flex-col font-bold w-[400px] font-poppins px-10 py-8 border border-white gap-2 place-items-center">
          <div className="flex flex-row text-wrap gap-6 place-self-start"> {/* title */}
            <MdOutlineDesignServices size={60} className="self-center" />
            {/* <h3 className="text-2.5xl self-center">Web Development</h3> */}
            <div className="flex flex-col self-center text-2.5xl">
              {/* Web with background */}
              <div className="relative flex">
                {/* Optional background container for 1/3 height */}
                <div className="absolute w-[119px] bottom-0 left-0 w-20 h-1/3 bg-[#FA733D]"></div>
                <div className="shrink z-40">
                  Creative
                </div>
              </div>
              {/* Development */}
              <h3>Design</h3>
            </div>
          </div>
          <div className="flex grow flex-row font-roboto_mono gap-1 w-[340px] min-h-[180px]"> {/* desc */}
            <div className="flex flex-col text-base font-regular text-center gap-2">
              <p className=""> &lt;h3&gt;</p>
              <div className="h-[88px] bg-white w-[1px] self-center"></div>
              <p className="">&lt;/h3&gt;</p>
            </div>
            <div className="flex pt-[29px] text-wrap font-bold text-base w-[292px]">
              Skilled in crafting web and logo designs using Figma and developing 3D models for various applications.
            </div>
          </div>
          <div className="flex grow justify-center font-roboto_mono font-medium text-xl"> {/* tools title */}
            <p>// tools</p>
          </div>
          <div className="flex flex-row"> {/* tools */}
            <div className="flex flex-col font-roboto_mono text-base font-regular text-center gap-2">
              <p className=""> &lt;img&gt;</p>
              <div className="h-[200px] bg-white w-[1px] self-center"></div>
              <p className="">&lt;/img&gt;</p>
            </div>
            <div className="flex flex-col min-w-[290px] grow font-extrabold text-base gap-x-12 gap-y-12 pt-[29px]">
              <div className="flex flex-col items-center gap-2 ">
                <FaFigma size={50} />
                Figma
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiBlender size={50} />
                Blender
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
