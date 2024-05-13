"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiBankLine } from "react-icons/ri";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { PiShoppingCartBold } from "react-icons/pi";
import { RiBeerLine } from "react-icons/ri";
import Card from "@/app/components/Card/Card";
import gsap from "gsap";
import SplitType from "split-type";
import "@/app/components/Animation.css";
import { getPlaceData, getPlacesData } from "@/app/rapidAPI";

const Page = () => {
  const categories = [
    {
      icon: <IoFastFoodOutline size={26} />,
      name: "Restaurants",
      id: 1,
    },
    {
      icon: <RiBankLine size={26} />,
      name: "Banks",
      id: 2,
    },
    {
      icon: <MdOutlineLocalGasStation size={26} />,
      name: "Gas Stations",
      id: 3,
    },
    {
      icon: <CiCoffeeCup size={26} />,
      name: "Cafes",
      id: 4,
    },
    {
      icon: <PiShoppingCartBold size={26} />,
      name: "Supermarkets",
      id: 5,
    },
    {
      icon: <RiBeerLine size={26} />,
      name: "Brewery",
      id: 6,
    },
  ];

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlaces = places.filter(
    (place: any) =>
      place.name && place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* GET LOCATION */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({
          lat: latitude,
          lng: longitude,
        });

        // Call getPlacesData here, after coordinates have been set
        getPlacesData({ lat: latitude, lng: longitude }).then((data) => {
          setPlaces(data);
          setIsLoading(false); // Set loading to false after data is loaded
        });
      }
    );
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img src="/loading.gif" width={150} height={150} alt="" />
      </div>
    );
  }

  return (
    <>
      <div className="absolute top-0 left-0 flex items-end justify-center h-[22.5rem] w-full ">
        <div className="flex flex-col ">
          <h1 className="text-white lg:text-[4rem] xl:text-[5.5rem] text-center tracking-[0.3rem] gradient font-bold opacity-1">
            Explore
          </h1>
          <h2 className="text-white text-[1.75rem] text-center">
            Places in your area
          </h2>
          <div className="flex gap-2 items-center justify-center  mt-8">
            <input
              type="text"
              className="shadow-lg w-[95vw] md:w-[50vw] bg-slate-800 rounded-full py-3 px-6 text-white border-2 border-slate-800 outline-none focus:outline-none focus:border-2 focus:border-slate-900/50"
              placeholder="Search places"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <button className="bg-purple-300 transition-all hover:bg-purple-300/[60%] cursor-pointer p-[14px] aspect-1 rounded-full">
              <FaSearch size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* RESULTS */}
      <div className="absolute top-[22.5rem] px-[5vw] 2xl:px-[10vw] flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-4 gap-4 w-full my-4 mt-16">
          {filteredPlaces.map((place: any, index) => {
            return place.name ? (
              <Card
                img={
                  place.photo
                    ? place.photo.images.large.url
                    : "/placeholder.png"
                }
                title={place.name}
                location={place.address}
                key={index}
                link={place.location_id}
              />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
