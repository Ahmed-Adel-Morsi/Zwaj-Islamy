import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

function Footer() {
  let date = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 h-16 flex justify-center items-center">
      <div className="mx-auto max-w-7xl text-[4vw] xs:text-base px-6 lg:px-8 text-center text-white font-medium">
        حقوق الطبع محفوظة لموقع{" "}
        <Link
          to={ROUTES.HOME}
          className="text-yellow-400 hover:text-yellow-500"
        >
          مبادرة الشيخ عبد الكريم محمود
        </Link>{" "}
        | {date}
      </div>
    </footer>
  );
}

export default Footer;
