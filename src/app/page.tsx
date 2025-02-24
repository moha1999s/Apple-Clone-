import Image from "next/image";
import Hero from "@/components/Hero";
import Heder from '@/components/Heder';
import PhoneImge from '@/components/PhoneImge';
import Liibrary from "@/components/Liibrary";
import Feature from "@/components/Feature";
import Icons from "@/components/Icons";
import QuestionAccordion from "@/components/QuestionAccordion";
import Faq from "@/components/Faq";
import AutoSlider from "@/components/AutoSlider";
import End from "@/components/End";
import "./globals.css";


export default function Home() {
  return (
    <>
    <Heder/>
    <Hero/>
    <PhoneImge/>
    <Liibrary/>
    
    <Feature/>
    <Icons/>
    <Faq/>
    <QuestionAccordion/>
    <End/>

    

    </>
  );
}
