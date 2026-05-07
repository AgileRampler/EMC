import React, { useState } from "react";
import { zones } from "./Maps";

/* 🔹 Chest with number badge */
const ChestBadge = ({ icon, count }) => {
  return (
    <div className="relative">
      <img className="w-20 p-2" src={icon} alt="Chest" />
      <span className="absolute top-1 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-xl">
        {count}
      </span>
    </div>
  );
};

const tierOptions = ["All", "Tier 6", "Tier 8"];

const AvailableZones = () => {
  const [active, setActive] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTier, setActiveTier] = useState("All");

  /* 🔍 Filter logic */
  const filteredZones = zones
    .filter((zone) => {
      const matchesTier =
        activeTier === "All" ||
        zone.tier.toLowerCase() === activeTier.toLowerCase();

      if (!search) return matchesTier;

      const queryParts = search.toLowerCase().trim().split("-");
      const zoneParts = zone.name.toLowerCase().split("-");

      const matchesParts = queryParts.every(
        (part, index) =>
          !part || (zoneParts[index] && zoneParts[index].startsWith(part))
      );

      return matchesParts && matchesTier;
    })
    .sort((a, b) => {
      const aParts = a.name.toLowerCase().split("-");
      const bParts = b.name.toLowerCase().split("-");
      for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
        const cmp = (aParts[i] || "").localeCompare(bParts[i] || "");
        if (cmp !== 0) return cmp;
      }
      return 0;
    });

  const activeZone = zones.find((z) => z.id === active);

  return (
    <div className="overflow-y-scroll h-screen pb-20 flex  flex-col items-center bg-gray-900">
      <h1 className="text-white text-xl font-mono m-10">
        Available Zones
      </h1>

      {/* 🔍 Search */}
      <input
        type="search"
        placeholder="Search Zones..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-2xl font-mono text-white block w-80 p-3 mb-4 bg-[#1F2937]"
      />

      {/* 🎚 Tier Filter */}
      <div className="flex text-sm mb-4">
        {tierOptions.map((tier) => (
          <button
            key={tier}
            onClick={() => setActiveTier(tier)}
            className={`m-2 p-3 px-5 rounded-xl font-mono text-white ${
              activeTier === tier ? "bg-purple-700" : "bg-slate-600"
            }`}
          >
            {tier}
          </button>
        ))}
      </div>

      {/* 📦 Zone List */}
      {filteredZones.length > 0 ? (
        filteredZones.map((zone) => (
          <div
            key={zone.id}
            onClick={() => setActive(zone.id)}
            className={`w-80 m-4 pb-8 rounded-xl cursor-pointer border border-blue-300 transition-colors ${
              active === zone.id ? "bg-purple-700" : "bg-slate-700"
            }`}
          >
            <div className="ms-4">
              <h1 className="text-xl pt-2 text-white">{zone.name}</h1>
              <p className="text-sm text-gray-300">{zone.tier}</p>

              <div className="flex flex-row ms-10">
                {zone.chests.map((chest, index) => (
                  <ChestBadge 
                    key={index}
                    icon={chest.icon}
                    count={chest.count}
                  />
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-2xl mt-40 animate-pulse">Zone Doesn't Exist</p>
      )}

      {/* 🗺️ Select hint */}
      {!activeZone && (
        <p  className="text-gray-400 font-mono mt-20 text-center start-[50rem]  absolute ">
          Select a zone to view map
        </p>
      )}

      {/* 🗺️ Map View */}
      {activeZone && (
        <div className="flex-1 overflow-hidden w-full cursor-pointer  hidden sm:block">
          <img
            src={activeZone.map}
            alt={activeZone.name}
            onClick={() => setZoomed(!zoomed)}
            className={` absolute start-[28%] top-40 h-[76%] transition-transform ${
              zoomed ? "scale-125" : "scale-100"
            }`}
          />

          {/* ℹ Info Card
          <div
            className={`w-72 ms-6 m-4 bg-slate-700 absolute top-[75%] start-[35%] pb-2 rounded-2xl ${
              zoomed ? "hidden" : "block"
            }`}
          >
            <div className="ms-4">
              <h1 className="text-xl pt-2 text-white">{activeZone.name}</h1>
              <p className="text-sm text-gray-300">{activeZone.tier}</p>

              <div className="flex flex-row">
                {activeZone.chests.map((chest, index) => (
                  <ChestBadge
                    key={index}
                    icon={chest.icon}
                    count={chest.count}
                  />
                ))}
              </div>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default AvailableZones;
