import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { PlusIcon } from "@heroicons/react/16/solid";
import man_avatar from "../svgs/man.svg";
import woman_avatar from "../svgs/woman.svg";

function Forms() {
  return (
    <div className="mx-auto px-6 py-12 sm:py-16 lg:py-24 xl:py-28 lg:px-8 flex-grow">
      <div className="mx-auto max-w-2xl text-center mb-6 sm:mb-12">
        <h2 className="text-[12vw] xs:text-6xl font-bold tracking-tight text-gray-900 mb-2 xs:mb-4 sm:mb-6">
          الإستمارات
        </h2>
        <p className="text-[5vw] xs:text-xl leading-8 text-gray-600">
          يرجى إختيار نوع الإستمارة المراد البحث عنها.
        </p>
      </div>
      <div className="w-full sm:w-fit grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
        <Link
          to="men"
          className="w-full sm:size-fit flex-center gap-5 flex-col min-[400px]:flex-row col-span-2 md:col-span-1 shrink-0 p-4 transition border-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white"
        >
          <p className="text-center text-[7vw] xs:text-2xl font-bold">
            إستمارات الرجال
          </p>
          <img
            src={man_avatar}
            alt="man avatar"
            className="min-[260px]:size-40"
          />
        </Link>
        <Link
          to="women"
          className="w-full sm:size-fit flex-center gap-5 flex-col min-[400px]:flex-row col-span-2 md:col-span-1 shrink-0 p-4 transition border-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white"
        >
          <p className="text-center text-[7vw] xs:text-2xl font-bold">
            إستمارات النساء
          </p>
          <img
            src={woman_avatar}
            alt="woman avatar"
            className="min-[260px]:size-40"
          />
        </Link>
        <Link
          to={`${ROUTES.NEW_FROM}`}
          className="col-span-2 w-full px-4 py-4 flex-center flex-col xs:flex-row gap-1 bg-green-600 text-white transition border-2 rounded-lg hover:bg-green-700"
        >
          <PlusIcon className="hidden xs:inline size-6" />
          <p className="text-center font-semibold text-[6vw] xs:text-xl">
            استمارة جديدة
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Forms;
