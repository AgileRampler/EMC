import React, { useState } from "react";

const CarsFilter = () => {

  // 1️⃣ Cars data
  const carsData = [
    { id: 1, name: "BMW X5", brand: "BMW" },
    { id: 2, name: "Audi A6", brand: "Audi" },
    { id: 3, name: "Tesla Model S", brand: "Tesla" },
    { id: 4, name: "BMW M3", brand: "BMW" },
    { id: 5, name: "Audi Q7", brand: "Audi" },
  ];

  // 2️⃣ State
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");

  // 3️⃣ Filter logic
  const filteredCars = carsData.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBrand =
      brand === "all" || car.brand === brand;

    return matchesSearch && matchesBrand;
  });







  return (
    <div className="p-6 max-w-md mx-auto">

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search car..."
        className="border p-2 rounded w-full mb-4"
        onChange={(e) => setSearch(e.target.value)} 
      />

      {/* 🎯 Custom Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {["all", "BMW", "Audi", "Tesla"].map((item) => (
          <button
            key={item}
            onClick={() => setBrand(item)}
            className={`px-4 py-2 rounded-lg border transition
              ${brand === item
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"}
            `}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🚗 Cars List */}
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <div
            key={car.id}
            className="border p-3 rounded mb-3"
          >
            <h3 className="font-semibold">{car.name}</h3>
            <p className="text-gray-500">{car.brand}</p>
          </div>
        ))
      ) : (
        <p className="text-red-500">No cars found</p>
      )}

    </div>
  );
};

export default CarsFilter;
