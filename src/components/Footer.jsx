import { Link } from "react-router-dom";

function Footer() {
  let date = new Date().getFullYear();

  return (
    <div className="bg-gray-800 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-white font-medium">
        حقوق الطبع محفوظة لموقع{" "}
        <Link to="/" className="text-yellow-400 hover:text-yellow-500">
          مبادرة الشيخ عبد الكريم محمود
        </Link>{" "}
        | {date}
      </div>
    </div>
  );
}

export default Footer;
