"use client";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const basePath = "/Apple-Clone-"; // اسم الريبو على GitHub Pages

const images = [
  { src: `${basePath}/assets/images/iphone_01.png`, alt: "ip1" },
  { src: `${basePath}/assets/images/iphone_02.png`, alt: "ip2" },
  { src: `${basePath}/assets/images/iphone_03.png`, alt: "ip3" },
  { src: `${basePath}/assets/images/iphone_04.png`, alt: "ip4" },
  { src: `${basePath}/assets/images/iphone_05.png`, alt: "ip5" },
];

export const PhoneImge = () => {
  return (
    <section className="overflow-x-clip my-4">
      <div className="container mx-auto text-center">
        <ParallaxProvider>
          <div className="flex gap-5 justify-center items-center max-w-[1600px] mx-auto">
            {images.map((image, index) => (
              <Parallax speed={index % 2 === 0 ? 10 : 20} key={index}>
                <div className="flex gap-5 justify-center items-center">
                  <Image src={image.src} alt={image.alt} width={250} />
                </div>
              </Parallax>
            ))}
          </div>
        </ParallaxProvider>
      </div>
    </section>
  );
};

export default PhoneImge;
