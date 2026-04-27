import type { Office } from "@/lib/types";

export const offices: Office[] = [
  {
    city: "Baghdad",
    coordinates: { lat: 33.3152, lng: 44.3661 },
    isHQ: true,
  },
  {
    city: "Erbil",
    coordinates: { lat: 36.1901, lng: 44.0091 },
    isHQ: false,
  },
  {
    city: "Basra",
    coordinates: { lat: 30.5085, lng: 47.7804 },
    isHQ: false,
  },
  {
    city: "Sulaymaniyah",
    coordinates: { lat: 35.5574, lng: 45.4353 },
    isHQ: false,
  },
  {
    city: "Kirkuk",
    coordinates: { lat: 35.4681, lng: 44.3922 },
    isHQ: false,
  },
  {
    city: "Najaf",
    coordinates: { lat: 31.9964, lng: 44.3142 },
    isHQ: false,
  },
];
