/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "swiper/css";
import MarqueeTag from "@/components/MarqueeTag";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ContextFun from "@/context/contextFun";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nagarnigam Project",
  description: "Demo nagarnigam project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextFun>
          <ToastContainer />
          <Navbar />
          <MarqueeTag />
          <div className="">{children}</div>
          <Footer />
        </ContextFun>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
