"use client"
import Ipone1 from "@/assets/images/iphone_01.png";
import Ipone2 from "@/assets/images/iphone_02.png";
import Ipone3 from "@/assets/images/iphone_03.png";
import Ipone4 from "@/assets/images/iphone_04.png";
import Ipone5 from "@/assets/images/iphone_05.png";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";


export const PhoneImge = () => {
    return (
        <section className="overflow-x-clip my-4">
        <div className="container mx-auto text-center">
            <ParallaxProvider>
                <div className="flex gap-5 justify-center items-center max-w-[1600px] mx-auto">
                    <Parallax speed={10}>
                        <div className="flex gap-5  justify-center items-center">
                            <Image src={Ipone1} alt="ip1" width={250} />
                        </div>
                    </Parallax>
    
                    <Parallax speed={20}>
                        <div className="flex gap-5 justify-center items-center">
                            <Image src={Ipone2} alt="ip2" width={250} />
                        </div>
                    </Parallax>
    
                    <Parallax speed={10}>
                        <div className="flex gap-5 justify-center items-center">
                            <Image src={Ipone3} alt="ip3" width={250} />
                        </div>
                    </Parallax>
    
                    <Parallax speed={20}>
                        <div className="flex gap-5 justify-center items-center">
                            <Image src={Ipone4} alt="ip4" width={250} />
                        </div>
                    </Parallax>
    
                    <Parallax speed={10}>
                        <div className="flex gap-5 justify-center items-center">
                            <Image src={Ipone5} alt="ip5" width={250} />
                        </div>
                    </Parallax>
                </div>
            </ParallaxProvider>
        </div>
    </section>
    
    
    )

}
export default PhoneImge