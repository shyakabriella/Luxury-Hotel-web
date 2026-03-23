import MeetingLocationImage from "../../../assets/images/meetings/hotel-valley.png";
import PoolAndFcilities from "../../../assets/images/meetings/hotel-pool-facilities.png";
import LakeViewImage from "../../../assets/images/meetings/lake-view.png";

export default function MeetingLocation() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${MeetingLocationImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-between items-center w-full h-screen px-8"
    >
      {/* Left: Image */}
      <div className="relative w-1/2 h-[70%]">
        <img
          src={PoolAndFcilities}
          alt="Hotel Valley"
          className="w-full h-full object-cover rounded-lg"
        />
        <img 
          src={LakeViewImage} 
          alt="Lake View" 
          className="absolute top-1/2 translate-y-[-50%] right-[-20%] h-[60%] object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Right: Text */}
      <div className="w-[35%] text-white text-center px-8">
        <h2 className="text-3xl font-bold mb-4">Location</h2>
        <h3 className="text-xl font-semibold mb-4">A Setting That Inspires Wonder</h3>
        <p className="text-lg leading-relaxed">
          Wonder Valley Ranch Resort is located up in the Sierra Nevada foothills, just outside the city of Fresno.
          This setting provides all types of groups with a uniquely secluded event locale, made even better by
          wide-ranging facilities and immersive team experiences.
        </p>
      </div>
    </div>
  );
}
