import icon1 from "@/assets/images/iphone-phone-smartphone-svgrepo-com (1).svg";
import icon2 from "@/assets/images/ipad-svgrepo-com.svg";
import icon3 from "@/assets/images/laptop-svgrepo-com.svg";
import icon4 from "@/assets/images/apple-watch-svgrepo-com.svg";
import icon5 from "@/assets/images/icons8-video-play-80.png";
import icon6 from "@/assets/images/icons8-apple-vision-pro-48.png";
import Image from "next/image";

export const Icons = () => {

    return (
        <section className="">
            <div className="continer">
                <div className="">
                    <h1 className="text-4xl max-w-[540px] mx-1 my-12 md:max-w-[615px] md:mx-auto md:text-6xl text-center tracking-tighter font-bold md:pb-6">Read and listen on
                        your favorite devices.</h1>
                </div>

                <div className="flex justify-center  md:gap-32 gap-8 my-2  items-center">
                    <Image
                        src={icon1}
                        alt="ip"
                        width={90}
                        className=" w-[60px] md:w-[80]" /> 



                    <Image
                        src={icon2}
                        alt="ip"
                        width={90}
                        className="w-[60px] md:w-[80]" />


                    <Image
                        src={icon3}
                        alt="ip"
                        width={90}
                        className="w-[60px] md:w-[80]" />


                </div>
                <div className=" flex   justify-center md:gap-36 gap-12   md:pt-3 md:mb-16 mb-5">
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight">iPhone</h1>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight">iPad</h1>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight">Mac</h1>
                </div>

                <div className="flex justify-center  md:gap-32 gap-8 items-center">
                    <Image
                        src={icon4}
                        alt="ip"
                        width={90}
                        className="w-[60px] md:w-[80px]" />



                    <Image
                        src={icon5}
                        alt="ip"
                        width={90}
                        className="w-[60px] md:w-[80]" />


                    <Image
                        src={icon6}
                        alt="ip"
                        width={90}
                        className="w-[60px] md:w-[80]" />


                </div>
                <div className=" flex justify-center mx-auto md:gap-20 gap-4  md:pt-3 pt-3">
                    <h1 className="text-lg md:text-2xl font-bold tracking-tighter">Apple Watch</h1>
                    <h1 className="text-la md:text-2xl font-bold tracking-tighter">CarPlay</h1>
                    <h1 className="text-lg md:text-2xl font-bold leading-8 tracking-tighter">Apple Vision Pro</h1>
                </div>
            </div>
        </section>
    )

}

export default Icons
