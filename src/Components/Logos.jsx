import React from "react";

import Marquee from "react-fast-marquee";

import Blik from "../../Assets/blik-gray.png";
import Discord from "../../Assets/discord-gray.png";
import JS from "../../Assets/js-gray.png";
import NodeJS from "../../Assets/node-js-gray.png";
import PayPal from "../../Assets/paypal-gray.png";
import ReactLogo from "../../Assets/react-gray.png";
import ReactNative from "../../Assets/react-native-gray.png";

const Logos = () => {
    const logos = [
        { src: Discord, alt: "Discord" },
        { src: Blik, alt: "Blik" },
        { src: PayPal, alt: "PayPal" },
        { src: NodeJS, alt: "NodeJS" },
        { src: ReactLogo, alt: "ReactJS" },
        { src: ReactNative, alt: "ReactNative" },
        { src: JS, alt: "JS" },
      ];
  return (
    <div className="py-[15%] md:py-[5%]" data-aos="fade-up">
      <Marquee pauseOnHover gradient gradientColor="black">
        {logos.map((logo) => (
          <img
            src={logo.src}
            alt={logo.alt}
            className={`w-32 mx-10 ${logo.alt === "JS" && "!w-14 rounded-md"} ${
              logo.alt === "Blik" && "!w-24"
            } ${logo.alt === "Discord" && "!w-36"}`}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Logos;
