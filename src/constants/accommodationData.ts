// constants/accommodationData.js

import photoONE from "../assets/images/accomodation/photoONE.jpeg";
import photoTWO from "../assets/images/accomodation/photoTWO.jpeg";
import photoTHREE from "../assets/images/accomodation/photoTHREE.jpeg";
import photoFOUR from "../assets/images/accomodation/photoFOUR.jpeg";
import photoFIVE from "../assets/images/accomodation/photoFIVE.jpeg";
import photoSIX from "../assets/images/accomodation/photoSIX.jpeg";
import photoSEVEN from "../assets/images/accomodation/photoSEVEN.jpeg";
import photoEIGHT from "../assets/images/accomodation/photoEIGHT.jpeg";
import photoNINE from "../assets/images/accomodation/photoNINE.jpeg";
import photoELEVEN from "../assets/images/accomodation/photoELEVEN.jpeg";
import photoTWELVE from "../assets/images/accomodation/photoTWELVE.jpeg";
import photoTHIRTEEN from "../assets/images/accomodation/photoTHERTEEN.jpeg";
import photoFOURTEEN from "../assets/images/accomodation/photoFOURTEEN.jpeg";

export const rooms = [
  {
    header: "2 King",
    title: "Lakeside & Sierra Rooms",
    capacity: 6,
    description: "Spacious rooms with two king-size beds...",
    images: [photoONE, photoTWO, photoTHREE],
    reverse: false,
  },
  {
    header: "1 King",
    title: "Garden View Rooms",
    capacity: 4,
    description: "Cozy rooms with a king bed...",
    images: [photoFOUR, photoFIVE, photoSIX],
    reverse: true,
  },
  {
    header: "2 Queen",
    title: "Family Suites",
    capacity: 8,
    description: "Perfect for families...",
    images: [photoSEVEN, photoEIGHT, photoNINE],
    reverse: false,
  },
  {
    header: "1 King + Sofa",
    title: "Poolside Rooms",
    capacity: 5,
    description: "Located by the pool...",
    images: [photoELEVEN, photoTWELVE, photoTHIRTEEN],
    reverse: true,
  },
  {
    header: "Dorm Style",
    title: "Group Lodging",
    capacity: 10,
    description: "Configurable dormitory-style rooms...",
    images: [photoFOURTEEN, photoTWO, photoSIX],
    reverse: false,
  },
  {
    header: "1 King",
    title: "Mountain View Rooms",
    capacity: 4,
    description: "Rooms with panoramic views...",
    images: [photoONE, photoSEVEN, photoTWELVE],
    reverse: true,
  },
  {
    header: "Suite",
    title: "Executive Rooms",
    capacity: 2,
    description: "Premium suites...",
    images: [photoFIVE, photoNINE, photoTHREE],
    reverse: false,
  },
];