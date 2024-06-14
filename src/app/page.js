"use client";
import CrouselHome from "@/components/CrouselHome";
import CrouselHome2 from "@/components/CrouselHome2";
import ImageBioSection from "@/components/ImageBioSection";
import Tabs from "@/components/Tabs";
import QuickLinks from "@/components/QuickLinks";
import SocialAccountsProfileFrames from "@/components/SocialAccountsProfileFrames";
import Aboutsection from "@/components/Aboutsection";
import Swiper from "@/components/Swiper";
import ContactForm from "@/components/ContactForm";
import ContactNewForm from "@/components/ContactNewForm";
import { useEffect, useState } from "react";
import BarcodeGenerator from "@/components/BarcodeGenerator";

export default function Home() {
  return <div className=" space-y-10">
    <Swiper/>
    {/* <CrouselHome/> */}
    <ImageBioSection/>
    <CrouselHome2/>
    <QuickLinks/>
      {/* <Aboutsection/> */}
    <SocialAccountsProfileFrames/>
    {/* <ContactForm /> */}
    {/* <ContactNewForm /> */}
    {/* <BarcodeGenerator /> */}
  </div>;
}
