import womenProfilePic from "../assets/women_profile_pic.png";
import rulerSvg from "../svgs/ruler.svg";
import oldSvg from "../svgs/old.svg";
import statusSvg from "../svgs/status.svg";
import locationSvg from "../svgs/location.svg";
import { Link } from "react-router-dom";

function Card({ imgUrl }) {
  return (
    <div className="swiper-slide border-2 rounded-md p-4 min-h-80">
      <img
        src={imgUrl || womenProfilePic}
        alt="mulslim girl"
        className="h-28 w-28 mb-3 object-contain xs:object-cover object-center mx-auto rounded-full"
      />
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-3 gap-x-5 w-fit mx-auto">
        <div className="flex-center gap-1 w-fit">
          <img src={oldSvg} className="h-5 w-5 object-contain" alt="Old Svg" />
          <p className="text-sm font-medium text-gray-700">28 سنة</p>
        </div>
        <div className="flex-center gap-1 w-fit">
          <img
            src={statusSvg}
            className="h-5 w-5 object-contain"
            alt="Status Svg"
          />
          <p className="text-sm font-medium text-gray-700">أعزب</p>
        </div>
        <div className="flex-center gap-1 w-fit">
          <img
            src={rulerSvg}
            className="h-5 w-5 object-contain"
            alt="Ruler Svg"
          />
          <p className="text-sm font-medium text-gray-700">168 سم</p>
        </div>
        <div className="flex-center gap-1 w-fit">
          <img
            src={locationSvg}
            className="h-5 w-5 object-contain"
            alt="Location Svg"
          />
          <p className="text-sm font-medium text-gray-700">القاهرة</p>
        </div>
      </div>
      <hr className="w-1/2 mx-auto my-3" />
      <p className="text-xs text-center font-medium w-full text-gray-700 truncate">
        رجل طيب وحنين، بشوش وذو خلق، متعلم وابن ناس، ويعتمد عليه في تحمل
        المسؤولية.{" "}
      </p>
      <hr className=" my-3" />
      <Link
        to="1"
        className="block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition duration-200 ease-in-out"
      >
        عرض التفاصيل
      </Link>
    </div>
  );
}

export default Card;
