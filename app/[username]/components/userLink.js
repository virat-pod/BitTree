"use client";
import Image from "next/image";
import { useContext } from "react";
import { NotificationContext } from "@/lib/contexts/serviceContext";

const userProfile = ({ userInfo }) => {
  const { setShowOverlay } = useContext(NotificationContext);

  return (
    <div className="wrapper font-lato flex flex-col gap-8 items-center w-full max-w-[38rem] mx-auto sm:rounded-t-3xl shadow-lg border border-zinc-100 p-6 sm:p-8 bg-white ">
      <div className="info-link w-full flex justify-between items-center">
        <Image
          src={"/linktreeShort.png"}
          onClick={() => setShowOverlay(true)}
          width={20}
          height={20}
          alt="linktree logo"
          className="cursor-pointer"
        />
        <Image
          src={"/svg-icons/share.svg"}
          width={20}
          height={20}
          onClick={() => {
            navigator.share({
              title: "My BitTree",
              text: "Check out my BitTree!",
              url: window.location.href,
            });
          }}
          className="invert cursor-pointer"
          alt="share link"
        />
      </div>
      <div className="user-info flex flex-col items-center gap-2.5">
        <div className="logo relative w-20 h-20 sm:w-22 sm:h-22">
          <Image
            src={userInfo.profile || "/catPic.jpg"}
            fill
            className="rounded-full"
            alt="user-logo"
          />
        </div>
        <div className="title flex items-center flex-col w-4/5 gap-1.5">
          <h2 className="font-bold text-xl sm:text-2xl">@{userInfo.handle}</h2>
          {userInfo.description && (
            <p
              style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
              className="text-center leading-tight h-14 text-zinc-700 text-sm sm:text-base break-words overflow-hidden"
            >
              {userInfo.description}
            </p>
          )}
        </div>
      </div>
      <div
        className="links-section flex flex-col py-0.5 gap-2.5 w-full h-1/4 sm:h-43.5 overflow-y-auto overflow-x-hidden pr-1
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-zinc-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-zinc-300 overflow-y-auto overflow-x-hidden"
      >
        {userInfo.link.map((item, i) => {
          return (
            <a
              key={i}
              href={item.url}
              target="_blank"
              className="flex items-center justify-between bg-pink-500 hover:bg-pink-500/80 transition-colors w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-medium text-white"
            >
              <span className="w-5" />
              <span className="text-base truncate">{item.linkText}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  navigator.share({
                    title: `${userInfo.handle} ${item.linkText}`,
                    text: `Check out me on ${item.linkText}`,
                    url: item.url,
                  });
                }}
                className="flex items-center justify-center w-6 h-6 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
              >
                <Image
                  src={"/svg-icons/more_vert.svg"}
                  width={18}
                  height={18}
                  alt="more_vert"
                />
              </button>
            </a>
          );
        })}
      </div>

      <div className="extra-info flex flex-col items-center gap-8 pb-5.5">
        <button
          onClick={() => setShowOverlay(true)}
          className="bg-white rounded-full font-bold shadow-[0_4px_8px_rgba(0,0,0,0.2)] p-3 sm:p-4 px-3.5 sm:py-3.5 cursor-pointer"
        >
          Join {userInfo.handle} on Bittree
        </button>
        <ul className="flex font-mono items-center text-[0.6rem] sm:text-[0.7rem] gap-1">
          <li className="cursor-pointer">Coockie Preference</li>
          <span className="font-light text-[0.4rem]">&bull;</span>
          <li className="cursor-pointer">Report</li>
          <span className="font-light text-[0.4rem]">&bull;</span>
          <li className="cursor-pointer">Privacy</li>
          <span className="font-light text-[0.4rem]">&bull;</span>
          <li className="cursor-pointer">Explore</li>
        </ul>
      </div>
    </div>
  );
};

export default userProfile;
