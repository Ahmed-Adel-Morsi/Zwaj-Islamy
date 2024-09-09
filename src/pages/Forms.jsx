import { Link } from "react-router-dom";
import womenLogo from "../assets/women-forms.png";
import menLogo from "../assets/men-forms.png";

function Forms() {
  return (
    <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-24 xl:py-28 lg:px-8 flex-grow flex flex-col gap-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[15vw] xs:text-6xl font-bold tracking-tight text-gray-900 mb-2 xs:mb-4 sm:mb-6">
          الإستمارات
        </h2>
        <p className="text-[6vw] xs:text-xl leading-8 text-gray-600">
          يرجى إختيار نوع الإستمارة المراد البحث عنها.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 flex-grow items-center">
        <Link
          to="men"
          className="shrink-0 px-4 pt-4 hover:scale-95 transition border-2 rounded-lg bg-sky-400 text-white"
        >
          <p className="text-center text-[7vw] xs:text-3xl font-bold mb-5">
            إستمارات الرجال
          </p>
          <img
            src={menLogo}
            alt="Men Logo"
            className="xs:h-64 xs:w-64 object-cover"
          />
        </Link>
        <Link
          to="women"
          className="shrink-0 px-4 pt-4 hover:scale-95 transition border-2 rounded-lg bg-pink-500 text-white"
        >
          <p className="text-center text-[7vw] xs:text-3xl font-bold mb-5">
            إستمارات النساء
          </p>
          <img
            src={womenLogo}
            alt="Women Logo"
            className="xs:h-64 xs:w-64 object-cover"
          />
        </Link>
      </div>
    </div>
  );
}

export default Forms;
