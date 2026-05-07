const mapImages = import.meta.glob(
  "../assets/Avalonian_Maps/*.png",
  { eager: true }
);

import GreenChest from "../assets/Green _chest.png";
import BlueChest from "../assets/Blue_chest.png";
import GoldChest from "../assets/Gold_chest.png";

export const zones = [
  {
    id: 0,
    name: "Hasos-Iuimaum",
    tier: "Tier 6",
    mapFile: "Hasos-Iuimaum.png",
    chests: [
      { icon: GreenChest, count: 5 },
     ,
    ],
  },
  {
    id: 1,
    name: "Souos-Ososlos",
    tier: "Tier 6",
    mapFile: "Souos-Ososlos.png",
    chests: [
      { icon: GreenChest, count: 2 },
      { icon: BlueChest, count: 1 },
    ],
  },
  {
    id: 2,
    name: "Xases-Oxoulum",
    tier: "Tier 6",
    mapFile: "Xases-Oxoulum.png",
    chests: [
      { icon: GreenChest, count: 3 },
    ],
  },
  {
    id: 3,
    name: "Heritos-Inayaum",
    tier: "Tier 6",
    mapFile: "Heritos-Inayaum.png",
    chests: [
      { icon: GreenChest, count: 2 },
      { icon: BlueChest, count: 1 },
    ],
  },
  {
    id: 4,
    name: "Xases-Oxulum",
    tier: "Tier 8",
    mapFile: "Xases-Oxoulum.png",
    chests: [
      { icon: BlueChest, count: 2 },
      { icon: GoldChest, count: 1 },
    ],
  },
  {
    id: 5,
    name: "Heritos-Iayaum",
    tier: "Tier 8",
    mapFile: "Heritos-Inayaum.png",
    chests: [
      { icon: GoldChest, count: 2 },
      { icon: GreenChest, count: 1 },
    ],
  }, {
    id: 6,
    name: "Heritos-Iayaum-odesum",
    tier: "Tier 8",
    mapFile: "Heritos-Inayaum.png",
    chests: [
      { icon: GoldChest, count: 2 },
      { icon: BlueChest, count: 1 },
    ],
  },
  


  
].map((zone) => ({
  ...zone,
  map: mapImages[`../assets/Avalonian_Maps/${zone.mapFile}`]?.default,
}));
