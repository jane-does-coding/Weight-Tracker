"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <Link href={"/"}>
      <h1 className="cursor-pointer text-purple-300 font-semibold text-xl">
        CityBizScout
      </h1>
    </Link>
  );
};

export default Logo;
