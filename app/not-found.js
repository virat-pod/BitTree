"use client";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-zinc-950">
      <div className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-[8rem] sm:text-[12rem] font-black leading-none text-white/5 select-none">
          404
        </h1>

        <div className="text-5xl -mt-16 invert"><Image src={"/linktreeShort.png"} width={100} height={100} alt="logo"/></div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            This BitTree doesn't exist
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs">
            The link you're looking for may have been removed or never existed.
          </p>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-2 px-6 py-3 bg-pink-500 hover:bg-pink-400 transition-colors text-white font-semibold rounded-full text-sm cursor-pointer"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
