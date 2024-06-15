"use client";
import CrouselHome2 from "@/components/CrouselHome2";
import ImageBioSection from "@/components/ImageBioSection";
import QuickLinks from "@/components/QuickLinks";
import SocialAccountsProfileFrames from "@/components/SocialAccountsProfileFrames";
import Swiper from "@/components/Swiper";

export default function Home() {
  return (
    <div className=" space-y-10">
      <h1>Hello world</h1>
      <Swiper />
      <ImageBioSection />
      <CrouselHome2 />
      <QuickLinks />
      <SocialAccountsProfileFrames />
    </div>
  );
}
