"use client";
import Hero from "@/components/home/hero";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="">
      <Hero />
      <section className="flex default-layout-spacing flex-col-reverse lg:flex-row py-12 lg:py-20 items-center justify-center gap-8 lg:gap-16 px-6 lg:px-20 bg-blue-500/95">
        <div className="show-content w-full lg:w-auto flex justify-center">
          <video
            src="/linktree-assets/customise_your_linktree.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-sm lg:max-w-lg xl:max-w-2xl rounded-2xl"
          />
        </div>

        <div className="title flex flex-col gap-4 lg:gap-8 max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#d2e823] font-black">
            Create and customize your Linktree in minutes
          </h1>
          <p className="text-zinc-200 text-sm sm:text-base lg:text-lg leading-relaxed">
            Connect all your content across social media, websites, stores and
            more in one link in bio. Customize every detail or let Linktree
            automatically enhance it.
          </p>
          <button
            onClick={() => {
              router.push("/generate");
            }}
            className="bg-[#d2e823] w-full sm:w-fit px-8 py-3 lg:py-4 rounded-full font-medium text-sm lg:text-lg"
          >
            Get started for free
          </button>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row px-6 lg:px-18 gap-12 lg:gap-24 justify-center items-center default-layout-spacing bg-amber-50 py-16 lg:py-0">
        <div className="show-content relative w-full sm:max-w-xl lg:w-[700px] lg:max-w-none aspect-[4/3] lg:h-[700px] lg:aspect-auto">
          <Image
            src="/linktree-assets/engaged_site.png"
            fill
            alt="engaged site"
            className="object-cover sm:object-contain"
          />
        </div>

        <div className="title flex flex-col gap-6 lg:gap-8 xl:gap-10 max-w-xl">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold text-gray-900/95 leading-tight">
            Analyze your audience and keep them engaged
          </h1>
          <p className="text-base lg:text-lg font-medium leading-relaxed text-gray-700">
            Track your engagement over time, monitor revenue and learn what's
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
          <button
            onClick={() => {
              router.push("/generate");
            }}
            className="bg-pink-300/75 w-full sm:w-fit px-8 py-3 lg:py-4 rounded-full font-medium text-sm lg:text-lg"
          >
            Get started for free
          </button>
        </div>
      </section>
    </main>
  );
}
