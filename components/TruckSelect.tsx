import Image from "next/image";
import { useState } from "react";
const TRUCK_LIST = [
  {
    truckName: "Freightliner",
    imageUrl: "/images/trucks/truck-1.png",
  },
  {
    truckName: "DAF",
    imageUrl: "/images/trucks/truck-2.png",
  },
  {
    truckName: "Kenworth",
    imageUrl: "/images/trucks/truck-3.png",
  },
  {
    truckName: "Ford",
    imageUrl: "/images/trucks/truck-1.png",
  },
  {
    truckName: "Navistar",
    imageUrl: "/images/trucks/truck-5.png",
  },
];
export default function TruckSelect() {
  const [selectedTruck, setSelectedTruck] = useState(
    "/images/trucks/truck-1.png",
  );

  return (
    <div
      id="car-select-card"
      className="rounded-md border bg-white px-6 py-5 md:w-1/2"
    >
      <h2 className="mb-2 text-xl font-semibold leading-tight">
        Select your truck
      </h2>

      <h3 className="mb-2 text-sm font-semibold">Truck type</h3>

      <div id="truck-selector" className="flex flex-wrap gap-2">
        {TRUCK_LIST.map((truck) => {
          return (
            <button
              onClick={() => setSelectedTruck(truck.imageUrl)}
              key={truck.truckName}
              className="g-white rounded border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-800 shadow hover:bg-gray-100 active:bg-gray-300"
            >
              {truck.truckName}
            </button>
          );
        })}
      </div>

      <div className="border-gray-30000 mt-4 h-40 border p-5">
        <Image
          width={200}
          height={180}
          alt="truck"
          src={selectedTruck}
          className="px-2"
        />
      </div>
    </div>
  );
}
