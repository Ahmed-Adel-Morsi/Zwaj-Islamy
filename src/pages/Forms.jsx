import { Link } from "react-router-dom";
import womenLogo from "../assets/women-forms.png";
import menLogo from "../assets/men-forms.png";
import { ROUTES } from "../routes";
import { PlusIcon } from "@heroicons/react/16/solid";

function Forms() {
  return (
    <div className="container mx-auto px-6 py-12 sm:py-16 lg:py-24 xl:py-28 lg:px-8 flex-grow">
      <div className="mx-auto max-w-2xl text-center mb-6 sm:mb-12">
        <h2 className="text-[15vw] xs:text-6xl font-bold tracking-tight text-gray-900 mb-2 xs:mb-4 sm:mb-6">
          الإستمارات
        </h2>
        <p className="text-[6vw] xs:text-xl leading-8 text-gray-600">
          يرجى إختيار نوع الإستمارة المراد البحث عنها.
        </p>
      </div>
      <div className="mx-auto w-fit grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
        <Link
          to="men"
          className="size-fit col-span-2 sm:col-span-1 shrink-0 px-4 pt-4 transition border-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white"
        >
          <p className="text-center text-[7vw] xs:text-2xl font-bold mb-5">
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
          className="size-fit col-span-2 sm:col-span-1 shrink-0 px-4 pt-4 transition border-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white"
        >
          <p className="text-center text-[7vw] xs:text-2xl font-bold mb-5">
            إستمارات النساء
          </p>
          <img
            src={womenLogo}
            alt="Women Logo"
            className="xs:h-64 xs:w-64 object-cover"
          />
        </Link>
        <Link
          to={`${ROUTES.NEW_FROM}`}
          className="col-span-2 w-full px-4 py-4 flex flex-col xs:flex-row justify-center items-center gap-1 bg-green-600 text-white transition border-2 rounded-lg hover:bg-green-700"
        >
          <PlusIcon className="hidden xs:inline size-6" />
          <p className="text-center font-medium">استمارة جديدة</p>
        </Link>
      </div>
    </div>
  );
}

export default Forms;
