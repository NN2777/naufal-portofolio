// components/Footer.js
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="contact" className="pt-20 text-white font-roboto_mono text-center w-screen">
      <div className="flex flex-col items-center text-2xl gap-6 pb-16">
        <p className="text-4xl font-segoe_ui_bold">Let's Collaborate!</p>
        <p>Ready to discuss projects, ideas, or just connect? Feel free to reach out to me</p>
        <p className="tracking-wider">naufanafidn@gmail.com</p>
        <div className="flex flex-row gap-10">
            <IoLogoGithub size={50} />
            <FaInstagram  size={50}/>
            <FaLinkedin size={50}/>
        </div>
      </div>
      <div className="flex border-t text-xl items-center justify-center h-20">
        <p>© 2024 Naufal Nafidiin. All rights reserved.</p>
      </div>
    </section>

  );
};

export default Footer;