// components/ProfessionalExperience.js
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

const ProfessionalExperience = () => {
  return (
    <section className="flex flex-col w-full gap-8 px-40 text-white">
      <div className="text-7xl text-center font-poppins font-bold"> {/* TITLE */}
        <p>Professional</p>
        <p>Experience</p>
      </div>
      <div className="flex flex-col gap-6"> {/* ITEM */}
        <div className="flex flex-col gap-4"> {/* WEB DEVELOPER POLTEK */}
          <div className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg">
            <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
              <p>Web Developer @ UPA TIK Polytechnic State of Malang</p>
              <p>2023 - 2024</p>
            </div>
            <RiArrowDropDownLine size={32} />
          </div>
          <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center">
            <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
              <div className="flex flex-row justify-between">
                <p>Malang, East Java</p>
                <p className="font-poppins font-bold text-base">polinema.ac.id</p>
              </div>
              <p>Developed the official website for the State Polytechnic of Malang and its 11 departments using WordPress and Laravel.</p>
              <div className="flex flex-row gap-x-6">
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Javascript</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Laravel</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">WordPress</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">HTML</p>
              </div>
            </div>
            <div className="relative col-span-2 content-center">
              <Image
                src={"/custom/Logopoltek.png"}
                alt="My Image"
                width={"160"}
                height={"160"}
                // fill
                style={{ objectFit: "contain" }}
                className="justify-self-center"
              />
            </div>

          </div>
        </div>
        <div className="flex flex-col gap-4"> {/* GAMARISTA STUDIO */}
          <div className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg">
            <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
              <p>Member @ Gamarista Studio</p>
              <p>2023-Present</p>
            </div>
            <RiArrowDropDownLine size={32} />
          </div>
          <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center">
            <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
              <div className="flex flex-row justify-between">
                <p>Malang, East Java</p>
                <p className="font-poppins font-bold text-base">gamaristastudio.com</p>
              </div>
              <p>Developed strategy and platformer puzzle games and the official website for Gamarista Studio using Laravel, Godot4 and Unity.</p>
              <div className="flex flex-row gap-x-6">
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Javascript</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Laravel</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Bootstrap4</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Unity3D</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Godot4</p>
              </div>
            </div>
            <div className="relative col-span-2 content-center">
              <Image
                src={"/custom/GamaristaLogo.png"}
                alt="My Image"
                width={"160"}
                height={"160"}
                // fill
                style={{ objectFit: "contain" }}
                className="justify-self-center"
              />
            </div>

          </div>
        </div>
        <div className="flex flex-col gap-4"> {/* STUDENT AT POLTEK */}
          <div className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg">
            <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
              <p>Student @ Polytechnic State of Malang</p>
              <p>2019-2023</p>
            </div>
            <RiArrowDropDownLine size={32} />
          </div>
          <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center">
            <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
              <div className="flex flex-row justify-between">
                <p>Malang, East Java</p>
                <p className="font-poppins font-bold text-base">polinema.ac.id</p>
              </div>
              <div className="flex flex-col font-roboto_mono text-base gap-4">
                <p className="italic">Bachelor of Applied Informatics Engineering - GPA: 3.78</p>
                <p>Thesis Title: Automatic Java Code Generation System from Flowchart for Basic Programming Learning</p>
                <p>Developed an application that translates flowcharts into Java code to assist beginners in understanding programming concepts. This tool bridges the gap between visual logic representation and coding, making it easier to learn basic programming skills.</p>
              </div>
              <div className="flex flex-row gap-x-6">
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Javascript</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Laravel</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Bootstrap4</p>
              </div>
            </div>
            <div className="relative col-span-2 content-center">
              <Image
                src={"/custom/Logopoltek.png"}
                alt="My Image"
                width={"160"}
                height={"160"}
                // fill
                style={{ objectFit: "contain" }}
                className="justify-self-center"
              />
            </div>

          </div>
        </div>
        <div className="flex flex-col gap-4"> {/* INTERN AT PLN*/}
          <div className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg">
            <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
              <p>Web Developer Intern @ PLN Surabaya</p>
              <p>2022</p>
            </div>
            <RiArrowDropDownLine size={32} />
          </div>
          <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center">
            <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
              <div className="flex flex-row justify-between">
                <p>Surabaya, East Java</p>
                <p className="font-poppins font-bold text-base">web.pln.co.id</p>
              </div>
              <p>Designed and implemented a reservation, booking, and rating management system for PLN employees, improving  efficiency and convenience in internal reservation processes and a point-of-sale (POS) website for PLN clinic branches</p>
              <div className="flex flex-row gap-x-6">
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Javascript</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Laravel</p>
                <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Bootstrap4</p>
              </div>
            </div>
            <div className="relative col-span-2 content-center">
              <Image
                src={"/custom/Logopln.png"}
                alt="My Image"
                width={"160"}
                height={"160"}
                // fill
                style={{ objectFit: "contain" }}
                className="justify-self-center"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalExperience;
