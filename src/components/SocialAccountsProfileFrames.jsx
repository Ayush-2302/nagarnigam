import Link from "next/link";
import React from "react";

const SocialAccountsProfileFrames = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <article className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-primary uppercase mx-auto p-3 border-b-2 text-center">
          Get Connected With Us
        </p>
        {/* <div className="border-b-2 border-red-600 w-16"></div> */}
      </article>

      <article className="w-96 sm:w-full grid grid-cols-1 sm:grid-cols-3 gap-6 px-12 py-6">
        <div className="border border-primary rounded h-80 sm:h-[70vh]">
          <div className="h-1/6">
            <Link
              href="#"
              className="text-bold text-primary font-bold text-2xl flex justify-start items-center ml-3 h-full  sm:text-2xl"
            >
              Facebook
            </Link>
          </div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Foff.MCD&tabs=timeline&width=530&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            className="bg-white border-b border-t border-primary h-4/6 w-full p-1 sm:p-2"
          />
          <div className="flex justify-center items-center h-1/6">
            <button className="border border-primary text-bold text-primary font-bold text-2xl rounded text-bold flex justify-center items-center h-4/6 w-5/6  ">
              Facebook
            </button>
          </div>
        </div>

        <div className="border border-primary rounded h-80 sm:h-[70vh]">
          <div className="h-1/6">
            <Link
              href="#"
              className="  text-bold text-primary font-bold text-2xl  flex justify-start items-center ml-3 h-full  "
            >
              Twitter
            </Link>
          </div>
          <iframe
            src="https://syndication.twitter.com/srv/timeline-profile/screen-name/MCD_Delhi?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=true&hideFooter=true&hideHeader=false&hideScrollBar=true&lang=en&limit=5&maxHeight=400px&origin=https%3A%2F%2Fmcdonline.nic.in%2Fportal&sessionId=a0e74f30c2b5e4b894f923b80d2572432c3e72b9&showHeader=true&showReplies=false&theme=light&transparent=false&widgetsVersion=2615f7e52b7e0%3A1702314776716"
            className="bg-white border-b border-t border-primary h-4/6 w-full p-1 sm:p-2"
          />
          <div className="flex justify-center items-center h-1/6">
            <button className="border border-primary  text-primary font-bold text-2xl  rounded text-bold flex justify-center items-center h-4/6 w-5/6 ">
              Twitter
            </button>
          </div>
        </div>

        <div className="border border-primary rounded h-80 sm:h-[70vh]">
          <div className="h-1/6">
            <Link
              href="#"
              className=" text-primary font-bold text-2xl  flex justify-start items-center ml-3 h-full "
            >
              Instagram
            </Link>
          </div>
          <iframe
            src="https://www.instagram.com/mcd_delhi/embed/"
            className="bg-white border-b border-t border-primary h-4/6 w-full p-1 sm:p-2"
          />
          <div className="flex justify-center items-center h-1/6">
            <button className="border border-primary  text-primary font-bold text-2xl  rounded text-bold flex justify-center items-center h-4/6 w-5/6 ">
              Instagram
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SocialAccountsProfileFrames;
