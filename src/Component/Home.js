import React from "react";
import Ujwal from "../images/Ujwal.jpg";
import Navbar from "./navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div class=" bg-black h-screen ">
        <Navbar />
        <div class="text-white float-left w-1/2 m-9 p-5 tracking-wide leading-6">
          <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
            Hey, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                Ujwal <span className="text-3xl md:text-5xl"></span>
              </span>
              <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full animate-type will-change`"></span>
            </span>
          </h1>
          <p class="">
            Iam ujwal pudasaini currenty living in kirtipur kathmandu, i have
            completed my bachelor in computer science and information technology
            and currenty iam working as frelanceer. i work as frontend developer
            using react which is javascripit framework.if you want any help feel
            free to contact me.
          </p>
          <div class="">
            <Footer />
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg float-right m-9 p-5   ">
          <img
            class=" h-auto rounded-full float-right md:float-left h-96    "
            src={Ujwal}
            alt="ujwal"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
