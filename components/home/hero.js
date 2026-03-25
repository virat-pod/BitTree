"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [getStartedInput, setgetStartedInput] = useState("");
  const router = useRouter();


  const getBittree = ()=> {
    if(!getStartedInput){
    router.push("/generate")
    return
    }

    router.push(`/generate?handle=${getStartedInput}`);
  }

  return (
    <section className="flex flex-col lg:flex-row items-center gap-3 md:gap-4 lg:gap-40 default-layout-spacing pt-30 pb-4 lg:pt-22 justify-center bg-[#d2e823]">
      <div className="title-content flex flex-col md:pt-10 gap-8">
        <div className="title flex gap-4 sm:gap-6 flex-col">
          <h1 className="font-lato px-3.5 leading-none text-5xl sm:text-6xl xl:text-[5.7rem] text-green-950/80 font-black">
            A link in bio built for you.
          </h1>
          <p className="text-green-950/80 px-3.5  md:text-lg xl:text-[1.3rem] font-medium leading-tight">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
        </div>
        <div className="cta flex gap-2 justify-center sm:justify-start">
          <div className="flex items-center bg-white rounded-lg overflow-hidden px-3 w-[67%] sm:w-[60%] md:w-[30%] lg:w-[40%] ring-1 ring-transparent focus-within:ring-white transition-all">
            <span className="text-zinc-400 text-sm whitespace-nowrap font-medium">
              linktr.ee/
            </span>
            <input
              value={getStartedInput}
              onChange={(e) => setgetStartedInput(e.target.value)}
              type="text"
              className="flex-1 py-3 sm:py-4 outline-none text-zinc-700 font-medium text-sm bg-transparent"
              placeholder="yourname"
            />
          </div>
          <button onClick={()=> {getBittree()}} className="bg-green-950/80 cursor-pointer hover:bg-green-950 transition-colors font-medium text-white px-6 sm:px-10 lg:px-14 py-3 sm:py-4 rounded-full text-sm whitespace-nowrap">
            <span className="hidden sm:inline">Get started free</span>
            <span className="sm:hidden">Go →</span>
          </button>
        </div>
      </div>

      <div className="picture-content flex items-center lg:items-center justify-center w-full lg:w-[880px] h-80 lg:h-[520px] mr-8">
        <Image
          src="/linktree-assets/linktree-hero-image.png"
          width={880}
          height={0}
          alt="hero-img"
          className="object-contain h-70 sm:h-full w-full md:pl-90 lg:pl-0"
        />
      </div>
    </section>
  );
};

export default Hero;
