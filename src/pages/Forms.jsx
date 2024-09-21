import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import man_avatar from "../svgs/man.svg";
import woman_avatar from "../svgs/woman.svg";
import { useEffect, useState } from "react";

function Forms() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.title = "الإستمارات";

    return () => {
      document.title = "زواج اسلامى";
    };
  }, []);

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
        <div className="relative col-span-2">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="size-full text-white text-lg bg-main hover:bg-main-hov font-semibold rounded-lg px-5 py-3 text-center inline-flex items-center justify-center transition"
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            إستمارة جديدة
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className={`${
              dropdownOpen ? "" : "hidden "
            }z-10 w-full max-w-40 absolute mt-1 right-1/2 translate-x-1/2 bg-white text-gray-700 divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700`}
          >
            <ul
              className="py-2 font-semibold dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li className="text-center">
                <Link
                  to={`${ROUTES.MEN}/${ROUTES.NEW_FROM}`}
                  className="block px-4 py-2 hover:bg-main hover:bg-opacity-10"
                >
                  رجال
                </Link>
              </li>
              <li className="text-center">
                <Link
                  to={`${ROUTES.WOMEN}/${ROUTES.NEW_FROM}`}
                  className="block px-4 py-2 hover:bg-main hover:bg-opacity-10"
                >
                  نساء
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
