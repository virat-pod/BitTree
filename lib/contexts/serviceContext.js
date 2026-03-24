"use client";
import { createContext, useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const NotificationContext = createContext();

export function useNotification() {
  return useContext(NotificationContext);
}

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();
  const [getStartedInput, setgetStartedInput] = useState("");

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const getBittree = () => {
    if (!getStartedInput) {
      router.push("/generate");
      return;
    }

    router.push(`/generate?handle=${getStartedInput}`);
  };

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, showOverlay, setShowOverlay }}
    >
      {children}

      {notification && (
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-sm transition-all duration-300 ${
            notification.type === "error"
              ? "bg-red-50 border-red-200 text-red-700"
              : notification.type === "warning"
                ? "bg-amber-50 border-amber-200 text-amber-700"
                : "bg-white border-stone-200 text-stone-700"
          }`}
        >
          <p className="text-xs font-medium whitespace-nowrap">
            {notification.message}
          </p>
        </div>
      )}

      {showOverlay && (
        <div onClick={()=> {setShowOverlay(false)}} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 px-4">
          <div onClick={(e)=> e.stopPropagation()} className="relative bg-[#e9c0e9] rounded-3xl p-8 w-full max-w-sm overflow-hidden">
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-4 right-4 text-purple-950 hover:opacity-70 transition-opacity cursor-pointer text-xl"
            >
              ✕
            </button>
            <Image
              src={"/linktreeShort.png"}
              width={24}
              height={24}
              className="text-2xl font-black text-purple-950 mb-4"
              alt="logo"
            />
            <h1 className="text-3xl font-black text-purple-950 leading-tight mb-3">
              Join the only link in bio trusted by{" "}
              <span className="text-purple-600">millions.</span>
            </h1>
            <p className="text-purple-900/60 text-sm mb-6 leading-relaxed">
              One link to share everything you create, we love (open source) that what we made it.
            </p>
            <div className="flex items-center bg-white rounded-2xl overflow-hidden ring-1 ring-purple-200 focus-within:ring-purple-400 transition-all mb-3">
              <span className="pl-4 text-zinc-400 text-sm whitespace-nowrap">
                bittree.com/
              </span>
              <input
                value={getStartedInput}
                onChange={(e) => setgetStartedInput(e.target.value)}
                className="flex-1 py-3 px-2 outline-none text-sm text-zinc-800"
                placeholder="yourname"
              />
            </div>
            <button onClick={()=> {getBittree(); setShowOverlay(false)}} className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold rounded-2xl text-sm mb-4 cursor-pointer">
              Claim your BitTree
            </button>
            <div className="absolute -right-6 bottom-0 w-36 h-48 opacity-90">
              <Image
                src="/linktree-assets/many_link_trans.png"
                fill
                alt="showcase"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};
