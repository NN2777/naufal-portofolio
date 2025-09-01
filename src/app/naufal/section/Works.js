// components/Works.js
import Image from "next/image";

const Works = () => {
  return (
    <section id="work" className="py-16 w-[1200px]">
      <h2 className="text-7xl text-center text-white font-poppins font-bold">My Works</h2>
      <div>
         <p className="font-roboto_mono text-white text-center">This section showcases the projects I have undertaken, highlighting my skills, creativity, and dedication.</p>
      </div>
      {/* <div>
          //filter
      </div> */}
      <div className="grid grid-cols-12 gap-9 text-white pt-8">
        {/* <!-- First Row: Full-width item --> */}
        <div className="col-span-12 bg-blue-500 h-[528px] grid grid-rows-12">
          <div className="row-span-9 relative content-center overflow-hidden group">
            <Image
              src={"/custom/GhostPhotographyWebp.webp"}
              alt="My Image"
              fill
              style={{ objectFit: "cover" }}
              className="justify-self-center cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="row-span-3 content-center bg-[#201F23]">
            <div className="flex flex-col gap-2 px-6 tracking-wider">
              <p className="font-segoe_ui_bold text-base">Ghost Photography</p>
              <p className="font-segoe_ui text-[15px] tracking-wide">Game Development</p>
            </div>
          </div>
        </div>

        {/* <!-- Second Row -->
        <!-- Left: Two equally divided items --> */}
        <div className="col-span-8 grid grid-rows-2 gap-9 h-[1092px] overflow-hidden">
          <div className="bg-green-500 h-[528px] relative grid grid-row-12">
            <div className="row-span-9 relative content-center overflow-hidden group">
              <Image
                src={"/custom/BrainCooked!.png"}
                alt="My Image"
                fill
                style={{objectFit:"cover"}}
                className="justify-self-center cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="row-span-3 content-center bg-[#201F23]">
              <div className="flex flex-col gap-2 px-6 tracking-wider">
                <p className="font-segoe_ui_bold text-base">BrainCooked</p>
                <p className="font-segoe_ui text-[15px] tracking-wide">Game Development</p>
              </div>
            </div>
          </div>
          <div className="bg-green-500 h-[528px] grid grid-row-12">
            <div className="row-span-9 relative content-center overflow-hidden group">
              <Image
                src={"/custom/Gamarista.png"}
                alt="My Image"
                fill
                style={{objectFit:"cover"}}
                className="justify-self-center cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="row-span-3 content-center bg-[#201F23]">
              <div className="flex flex-col gap-2 px-6 tracking-wider">
                <p className="font-segoe_ui_bold text-base">Gamarista Studio Official Website</p>
                <p className="font-segoe_ui text-[15px] tracking-wide">Web Development</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right: Three stacked items --> */}
        <div className="col-span-4 grid grid-rows-3 gap-9 h-[1092px] overflow-hidden">
          <div className="bg-yellow-500 h-[340px] grid grid-rows-12">
            <div className="row-span-9 relative content-center overflow-hidden group">
              <Image
                src={"/custom/GigglesandGold.png"}
                alt="My Image"
                fill
                style={{objectFit:"cover"}}
                className="justify-self-center cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="row-span-3 content-center bg-[#201F23]">
              <div className="flex flex-col gap-2 px-6 tracking-wider">
                <p className="font-segoe_ui_bold text-base">Giggles and Gold</p>
                <p className="font-segoe_ui text-[15px] tracking-wide">Game Development</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-500 h-[340px] grid grid-rows-12">
            <div className="row-span-9 relative content-center overflow-hidden group">
              <Image
                src={"/custom/ZombieToys.jpg"}
                alt="My Image"
                fill
                style={{objectFit:"cover"}}
                className="justify-self-center cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="row-span-3 content-center bg-[#201F23]">
              <div className="flex flex-col gap-2 px-6 tracking-wider">
                <p className="font-segoe_ui_bold text-base">Zombie Toys</p>
                <p className="font-segoe_ui text-[15px] tracking-wide">Game Development</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-500 h-[340px] grid grid-rows-12">
            <div className="row-span-9 relative content-center overflow-hidden group">
              <Image
                src={"/custom/PolinemaOfficial.png"}
                alt="My Image"
                fill
                style={{objectFit:"cover"}}
                className="justify-self-center cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="row-span-3 content-center bg-[#201F23]">
              <div className="flex flex-col gap-2 px-6 tracking-wider">
                <p className="font-segoe_ui_bold text-base">Polinema Official Website</p>
                <p className="font-segoe_ui text-[15px] tracking-wide">Web Development</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Third Row: Three stacked items column --> */}
        <div className="col-span-12 grid grid-cols-12 gap-9 h-[340px] overflow-hidden">
          <div className="col-span-4 grid grid-row-12">
            <div className="row-span-9 relative content-center overflow-hidden group">
              <Image
                src={"/custom/PPID.png"}
                alt="My Image"
                fill
                style={{objectFit:"cover"}}
                className="justify-self-center cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="row-span-3 content-center bg-[#201F23]">
              <div className="flex flex-col gap-2 px-6 tracking-wider">
                <p className="font-segoe_ui_bold text-base">PPID Polinema</p>
                <p className="font-segoe_ui text-[15px] tracking-wide">Web Development</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-row-12">
            <div className="row-span-9 relative content-center bg-white">
              {/* <Image
                src={"/custom/GigglesandGold.png"}
                alt="My Image"
                fill
                style={{objectFit:"cover"}}
                className="justify-self-center"
              /> */}
            </div>
            <div className="row-span-3 content-center bg-[#201F23]">
              <div className="flex flex-col gap-2 px-6 tracking-wider">
                <p className="font-segoe_ui_bold text-base">PLN Ticketing Application System</p>
                <p className="font-segoe_ui text-[15px] tracking-wide">Web Development</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-row-12">
            <div className="row-span-9 relative content-center bg-white">
              {/* <Image
                src={"/custom/GigglesandGold.png"}
                alt="My Image"
                fill
                style={{objectFit:"cover"}}
                className="justify-self-center"
              /> */}
            </div>
            <div className="row-span-3 content-center bg-[#201F23]">
              <div className="flex flex-col gap-2 px-6 tracking-wider">
                <p className="font-segoe_ui_bold text-base">POS Qualita Medika Clinic</p>
                <p className="font-segoe_ui text-[15px] tracking-wide">Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Works;
