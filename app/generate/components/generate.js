"use client";
import { NotificationContext } from "@/lib/contexts/serviceContext";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showNotification } = useContext(NotificationContext);
  const [loading, setloading] = useState(false);
  const [handle, sethandle] = useState("");
  const [link, setlink] = useState([{ url: "", linkText: "" }]);
  const [profile, setprofile] = useState("");
  const [desc, setdesc] = useState("");

  useEffect(() => {
    const initialHandling = searchParams.get("handle");
    if (initialHandling) {
      sethandle(initialHandling);
    }
  }, [searchParams]);
  

  const handleLink = (index, label, value) => {
    setlink((prev) =>
      prev.map((item, i) =>
        index === i ? { ...prev[i], [label]: value } : item,
      ),
    );
  };

  const addLink = () => {
    setlink(link.concat([{ url: "", linkText: "" }]));
  };

  const makeLink = async () => {
    if (!handle || !link[0].url || !link[0].linkText) {
      showNotification("Please fill required information", "error");
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      link: Object.values(link),
      handle: handle.trim(),
      description: desc.trim(),
      profile,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const res = await fetch(`/api/links`, requestOptions).then((response) =>
      response.json(),
    );

    if (res.success) {
      showNotification(res.message);
      router.push(`/${handle}`);
    } else {
      showNotification(res.message, "error");
      sethandle("");
      router.replace("/generate");
      return;
    }

    setlink([{ url: "", linkText: "" }]);
    sethandle("");
    setprofile("");
  };

  const handleProfile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setloading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "linkTrees");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dt4qdszmp/image/upload`,
      { method: "POST", body: formData },
    );
    const data = await res.json();
    const squareUrl = data.secure_url.replace(
      "/upload/",
      "/upload/c_pad,w_500,h_500,b_auto/",
    );

    setprofile(squareUrl);
    setloading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center bg-[#e9c0e9] px-4 lg:px-20 pt-34 lg:pt-18 min-h-screen">
      <div className="flex flex-col gap-5 w-full max-w-sm sm:pt-8">
        <h1
          className={`text-2xl sm:hidden font-bold text-white font-serif text-shadow-2xs text-shadow-pink-400`}
        >
          Create your{" "}
          <span className="underline underline-offset-2 decoration-pink-400">
            BitTree
          </span>{" "}
        </h1>

        <div className="form-spacing">
          <p className="form-step">Step 1</p>
          <label className="form-step-text">Claim your handle (require)</label>
          <div className="flex items-center bg-white rounded-xl ring-1 ring-pink-200 focus-within:ring-pink-400 overflow-hidden transition-all">
            <span className="pl-3 text-zinc-400 text-sm whitespace-nowrap">
              bittree.com/
            </span>
            <input
              value={handle || ""}
              onChange={(e) => {
                sethandle(e.target.value);
              }}
              className="flex-1 py-2.5 pr-2 outline-none text-sm text-zinc-800"
              type="text"
              placeholder="yourname"
            />
          </div>
        </div>

        <div className="form-spacing">
          <p className="form-step">Step 2</p>
          <label className="form-step-text">Add your links (require)</label>
          <div className="flex flex-col gap-2">
            <div className="default-slider max-h-24 px-1">
              {link &&
                link.map((link, i) => {
                  return (
                    <div key={i} className="flex flex-row gap-2">
                      <input
                        value={link.url || ""}
                        onChange={(e) => {
                          handleLink(i, "url", e.target.value);
                        }}
                        className="input-styling flex-1"
                        type="text"
                        placeholder="Enter link URL"
                      />
                      <input
                        value={link.linkText || ""}
                        onChange={(e) => {
                          handleLink(i, "linkText", e.target.value);
                        }}
                        className="input-styling w-26"
                        type="text"
                        placeholder="Label"
                      />
                    </div>
                  );
                })}
            </div>
            <button
              onClick={() => {
                addLink();
              }}
              className="w-fit px-4 py-1.5 text-xs font-medium cursor-pointer bg-white ring-1 ring-pink-300 hover:bg-pink-50 text-purple-700 transition-all rounded-full"
            >
              + Add link
            </button>
          </div>
        </div>

        <div className="form-spacing">
          <p className="form-step">Step 3</p>
          <label className="form-step-text">Add description about you</label>
          <input
            value={desc || ""}
            onChange={(e) => {
              if (e.target.value.length <= 100) {
                setdesc(e.target.value);
              }
            }}
            className="input-styling flex-1"
            type="text"
            placeholder="Type about yourself"
          />
          <span className="text-sm text-zinc-800">{desc.length}/100</span>
        </div>

        <div className="form-spacing">
          <p className="form-step">Step 4</p>
          <label className="form-step-text">Profile picture</label>
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 group cursor-pointer shrink-0">
              {loading ? (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-200 to-zinc-400 animate-pulse" />
              ) : (
                <Image
                  className="rounded-full object-cover ring-2 ring-pink-400"
                  src={profile || "/catPic.jpg"}
                  fill
                  alt="profile"
                />
              )}
              <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <object data="/svg-icons/photo_camera.svg"></object>
              </div>
              <input
                onChange={(e) => {
                  handleProfile(e);
                }}
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
            </div>
            <p className="text-xs text-purple-800/50">
              Click on photo to change photo
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            makeLink();
          }}
          className="w-full py-3 font-semibold cursor-pointer bg-pink-500 hover:bg-pink-600 transition-all rounded-2xl text-white text-sm"
        >
          Create BitTree
        </button>
      </div>

      <div className="info flex flex-col items-center">
        <h1
          className={`text-2xl hidden sm:inline sm:text-3xl font-bold text-white font-serif text-shadow-2xs text-shadow-pink-400`}
        >
          Create your{" "}
          <span className="underline underline-offset-2 decoration-pink-400">
            BitTree
          </span>{" "}
        </h1>

        <div className="relative w-84 h-84 lg:w-80 lg:h-80 shrink-0">
          <Image
            src="/linktree-assets/many_link.png"
            fill
            alt="showcase"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Generate;
