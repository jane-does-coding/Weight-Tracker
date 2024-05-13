"use client";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";

const Card = ({
  img,
  title,
  location,
  link,
}: {
  img: string;
  title: string;
  location: string;
  link: string;
}) => {
  return (
    <Link
      href={`/search/${link}`}
      className="w-full bg-white h-[40vh] rounded-[1rem] overflow-hidden relative"
    >
      <img src={img} alt="" className="h-full w-full object-fit" />
      <div className="absolute bottom-2 mx-auto w-[95%] ml-[2.5%] z-[2] bg-white/[40%] py-2 text-center rounded-md backdrop-blur-md">
        <label className=" text-slate-900 font-semibold text-md">{title}</label>
        <div className="flex items-center justify-center text-[0.65rem]">
          <IoLocationOutline size={20} />
          {location}
        </div>
      </div>
    </Link>
  );
};

export default Card;
