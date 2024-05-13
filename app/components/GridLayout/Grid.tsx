"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { useRouter } from "next/navigation";

const Grid = () => {
  const registerModal = useRegisterModal();
  const router = useRouter();

  return (
    <div className="px-4 lg:px-36 py-12 mb-12 text-white">
      <div className="flex flex-col lg:flex-row h-[95vh] gap-4">
        {/* Left Box */}
        <div className="min-h-[40vh] lg:min-h-fit lg:h-[100%] w-[100%] bg-slate-800/50 border-2 border-slate-800/50 rounded-lg relative p-4 overflow-hidden">
          <Image
            src={"/2.jpg"}
            alt="image"
            fill
            className="w-full min-h-[40vh] lg:min-h-fit lg:h-[100%] object-cover rounded-lg relative"
          />
        </div>
        {/* Right */}
        <div className="flex flex-col lg:flex-col w-[100%] gap-4">
          <div className="h-fit lg:h-[100%] w-[100%] transition bg-slate-800/50 border-2 border-slate-800/50 rounded-lg p-4 flex items-center justify-start">
            <div className="h-fit">
              <h1 className="text-[1.25rem] lg:text-[1.25rem] xl:text-[1.75rem] flex flex-row items-center justify-start gap-2 text-neutral-200 mb-8">
                Be Smart - use{"  "}
                <span className="relative block text-purple-400">
                  {" "}
                  CityBizScout!
                </span>
              </h1>
              <ul className="text-[1rem] lg:text-[1rem] xl:text-[1.1rem] flex flex-col gap-2 list-disc ml-8">
                <li>Choose hotels to stay</li>
                <li>Choose restaurants to eat</li>
                <li>Choose museums to visit</li>
                <li>Choose places to visit</li>
              </ul>
              <div className="text-neutral-100 text-md mt-8">
                Discover the best local businesses effortlessly with
                CityBizScout!
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-[100%] w-[100%] bg-slate-800/50 border-2 border-slate-800/50 rounded-lg p-4 flex items-center justify-center">
            <div className="h-fit">
              <p className="text-[0.85rem] xl:text-[1rem] mb-4">
                CityBizScout: Your go-to for discovering top hotels,
                restaurants, and attractions in your city. Explore with ease and
                find your new favorites today!
              </p>
              <Button
                onClick={() => router.push("/")}
                purple
                label="Get Started"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
