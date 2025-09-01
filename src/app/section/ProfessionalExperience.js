// // components/ProfessionalExperience.js
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Image from "next/image";

// const ProfessionalExperience = () => {
//   return (
//     <section id="experience" className="flex flex-col w-full gap-8 px-40 text-white">
//       <div className="text-7xl text-center font-poppins font-bold"> {/* TITLE */}
//         <p>Professional</p>
//         <p>Experience</p>
//       </div>
//       <div className="flex flex-col gap-6"> {/* ITEM */}
//         <div className="flex flex-col gap-4"> {/* WEB DEVELOPER POLTEK */}
//           <div className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg">
//             <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
//               <p>Web Developer @ UPA TIK Polytechnic State of Malang</p>
//               <p>2023 - 2024</p>
//             </div>
//             <RiArrowDropDownLine size={32} />
//           </div>
//           <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center">
//             <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
//               <div className="flex flex-row justify-between">
//                 <p>Malang, East Java</p>
//                 <p className="font-poppins font-bold text-base">polinema.ac.id</p>
//               </div>
//               <p>Developed the official website for the State Polytechnic of Malang and its 11 departments using WordPress and Laravel.</p>
//               <div className="flex flex-row gap-x-6">
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Javascript</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Laravel</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">WordPress</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">HTML</p>
//               </div>
//             </div>
//             <div className="relative col-span-2 content-center">
//               <Image
//                 src={"/custom/Logopoltek.png"}
//                 alt="My Image"
//                 width={"160"}
//                 height={"160"}
//                 // fill
//                 style={{ objectFit: "contain" }}
//                 className="justify-self-center"
//               />
//             </div>

//           </div>
//         </div>
//         <div className="flex flex-col gap-4"> {/* GAMARISTA STUDIO */}
//           <div className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg">
//             <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
//               <p>Member @ Gamarista Studio</p>
//               <p>2023-Present</p>
//             </div>
//             <RiArrowDropDownLine size={32} />
//           </div>
//           <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center">
//             <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
//               <div className="flex flex-row justify-between">
//                 <p>Malang, East Java</p>
//                 <p className="font-poppins font-bold text-base">gamaristastudio.com</p>
//               </div>
//               <p>Developed strategy and platformer puzzle games and the official website for Gamarista Studio using Laravel, Godot4 and Unity.</p>
//               <div className="flex flex-row gap-x-6">
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Javascript</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Laravel</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Bootstrap4</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Unity3D</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Godot4</p>
//               </div>
//             </div>
//             <div className="relative col-span-2 content-center">
//               <Image
//                 src={"/custom/GamaristaLogo.png"}
//                 alt="My Image"
//                 width={"160"}
//                 height={"160"}
//                 // fill
//                 style={{ objectFit: "contain" }}
//                 className="justify-self-center"
//               />
//             </div>

//           </div>
//         </div>
//         <div className="flex flex-col gap-4"> {/* STUDENT AT POLTEK */}
//           <div className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg">
//             <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
//               <p>Student @ Polytechnic State of Malang</p>
//               <p>2019-2023</p>
//             </div>
//             <RiArrowDropDownLine size={32} />
//           </div>
//           <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center">
//             <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
//               <div className="flex flex-row justify-between">
//                 <p>Malang, East Java</p>
//                 <p className="font-poppins font-bold text-base">polinema.ac.id</p>
//               </div>
//               <div className="flex flex-col font-roboto_mono text-base gap-4">
//                 <p className="italic">Bachelor of Applied Informatics Engineering - GPA: 3.78</p>
//                 <p>Thesis Title: Automatic Java Code Generation System from Flowchart for Basic Programming Learning</p>
//                 <p>Developed an application that translates flowcharts into Java code to assist beginners in understanding programming concepts. This tool bridges the gap between visual logic representation and coding, making it easier to learn basic programming skills.</p>
//               </div>
//               <div className="flex flex-row gap-x-6">
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Javascript</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Laravel</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Bootstrap4</p>
//               </div>
//             </div>
//             <div className="relative col-span-2 content-center">
//               <Image
//                 src={"/custom/Logopoltek.png"}
//                 alt="My Image"
//                 width={"160"}
//                 height={"160"}
//                 // fill
//                 style={{ objectFit: "contain" }}
//                 className="justify-self-center"
//               />
//             </div>

//           </div>
//         </div>
//         <div className="flex flex-col gap-4"> {/* INTERN AT PLN*/}
//           <div className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg">
//             <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
//               <p>Web Developer Intern @ PLN Surabaya</p>
//               <p>2022</p>
//             </div>
//             <RiArrowDropDownLine size={32} />
//           </div>
//           <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center">
//             <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
//               <div className="flex flex-row justify-between">
//                 <p>Surabaya, East Java</p>
//                 <p className="font-poppins font-bold text-base">web.pln.co.id</p>
//               </div>
//               <p>Designed and implemented a reservation, booking, and rating management system for PLN employees, improving  efficiency and convenience in internal reservation processes and a point-of-sale (POS) website for PLN clinic branches</p>
//               <div className="flex flex-row gap-x-6">
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Javascript</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Laravel</p>
//                 <p className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]">Bootstrap4</p>
//               </div>
//             </div>
//             <div className="relative col-span-2 content-center">
//               <Image
//                 src={"/custom/Logopln.png"}
//                 alt="My Image"
//                 width={"160"}
//                 height={"160"}
//                 // fill
//                 style={{ objectFit: "contain" }}
//                 className="justify-self-center"
//               />
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProfessionalExperience;

'use client';
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

const ProfessionalExperience = () => {
  // track which item is open (index or null)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const experiences = [
    {
      title: "Web Developer @ UPA TIK Polytechnic State of Malang",
      year: "2023 - 2024",
      location: "Malang, East Java",
      website: "polinema.ac.id",
      description:
        "Developed the official website for the State Polytechnic of Malang and its 11 departments using WordPress and Laravel.",
      skills: ["Javascript", "Laravel", "WordPress", "HTML"],
      logo: "/custom/Logopoltek.png",
    },
    {
      title: "Member @ Gamarista Studio",
      year: "2023 - Present",
      location: "Malang, East Java",
      website: "gamaristastudio.com",
      description:
        "Worked as part of the game development team, contributing to design, coding, and testing of indie games.",
      skills: ["Unity", "C#", "Game Design"],
      logo: "/custom/gamaristaLogo.png",
    },
    {
      title: "Student @ Polytechnic State of Malang",
      year: "2019-2023",
      location: "Malang, East Java",
      website: "polinema.ac.id",
      education: "Bachelor of Applied Informatics Engineering - GPA: 3.78",
      thesisTitle: "Automatic Java Code Generation System from Flowchart for Basic Programming Learning",
      description: "Developed an application that translates flowcharts into Java code to assist beginners in understanding programming concepts. This tool bridges the gap between visual logic representation and coding, making it easier to learn basic programming skills.",
      skills: ["Javascript", "Laravel", "Bootstrap4"],
      logo: "/custom/Logopoltek.png"
    },
    {
      title: "Web Developer Intern @ PLN Surabaya",
      year: "2022",
      location: "Surabaya, East Java",
      website: "web.pln.co.id",
      description: "Designed and implemented a reservation, booking, and rating management system for PLN employees, improving efficiency and convenience in internal reservation processes and a point-of-sale (POS) website for PLN clinic branches",
      skills: ["Javascript", "Laravel", "Bootstrap4"],
      logo: "/custom/Logopln.png"
    },


  ];

  return (
    <section id="experience" className="flex flex-col w-full gap-8 px-40 text-white">
      <div className="text-7xl text-center font-poppins font-bold">
        <p>Professional</p>
        <p>Experience</p>
      </div>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* HEADER */}
            <div
              className="flex flex-row p-6 gap-x-6 justify-items-center bg-[#430D79] rounded-lg cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div className="flex flex-row font-poppins font-bold text-base justify-between items-center grow">
                <p>{exp.title}</p>
                <p>{exp.year}</p>
              </div>
              <RiArrowDropDownLine
                size={32}
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
              />
            </div>

            {/* CONTENT */}
            {openIndex === index && (
              <div className="grid grid-cols-12 bg-[#241D41] p-10 gap-6 rounded-lg items-center animate-fadeIn">
                <div className="flex flex-col col-span-10 font-roboto_mono text-base font-bold gap-y-6">
                  <div className="flex flex-row justify-between">
                    <p>{exp.location}</p>
                    <p className="font-poppins font-bold text-base">{exp.website}</p>
                  </div>

                  {/* Extra fields if available */}
                  {exp.education && (
                    <p className="italic">{exp.education}</p>
                  )}

                  {exp.thesisTitle && (
                    <p className="font-semibold">Thesis Title: {exp.thesisTitle}</p>
                  )}

                  <p>{exp.description}</p>

                  <div className="flex flex-row flex-wrap gap-3">
                    {exp.skills.map((skill, i) => (
                      <p
                        key={i}
                        className="bg-[#2C3599] py-2 px-3 rounded-3xl text-[#9C9FBA]"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="relative col-span-2 content-center">
                  <Image
                    src={exp.logo}
                    alt="Logo"
                    width={160}
                    height={160}
                    style={{ objectFit: "contain" }}
                    className="justify-self-center"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
