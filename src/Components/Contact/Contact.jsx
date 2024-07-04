import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact">
      <div className="divider bg-neutral-content h-[1px] lg:w-1/2 w-3/4 mx-auto my-12"></div>
      <h2 className="text-neutral-content font-semibold text-center text-4xl mb-8">
        Contact Info
      </h2>
      <div className="text-neutral-content text-lg flex flex-col items-center gap-4">
        <h3>Uttara, Dhaka-1230, Bangladesh.</h3>
        <h3 className="flex gap-2 items-center">
          <FaWhatsapp />
          <a href="https://wa.me/+8801680757025" target="_blank">
            +8801680757025
          </a>
        </h3>
        <h3 className="flex gap-2 items-center">
          <IoMdMail />
          <a href="mailto:rubaeid.sanjid@gmail.com" target="_blank">
            rubaeid.sanjid@gmail.com
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
