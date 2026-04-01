import { rooms } from "../../../constants/accommodationData";
import AccomodationCard from "../accomodation-Card/AccomodationCard";

export default function AccomodationRooms() {
  return (
    <div className="flex flex-col gap-12">
      {rooms.map((room, index) => (
        <AccomodationCard key={index} {...room} />
      ))}
    </div>
  );
}
