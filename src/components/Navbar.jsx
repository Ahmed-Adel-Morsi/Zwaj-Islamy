import { useLocation, Link } from "react-router-dom";
import logo from "../assets/squared-logo.png";
import { ROUTES } from "../routes";
import {
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  PlayIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";

function Navbar() {
  const location = useLocation(); // Get current route

  const navLinks = [
    {
      to: ROUTES.HOME,
      title: "الرئيسية",
      icon: <HomeIcon className="size-5 mb-1" />,
    },
    {
      to: ROUTES.FORMS,
      title: "الاستمارات",
      icon: <RectangleStackIcon className="size-5 mb-1" />,
    },
    {
      to: ROUTES.COURSES,
      title: "الكورسات",
      icon: <PlayIcon className="size-5 mb-1" />,
    },
    {
      to: ROUTES.CONTACT,
      title: "اتصل بنا",
      icon: <ChatBubbleBottomCenterIcon className="size-5 mb-1" />,
    },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="h-16 mx-auto sm:px-6 px-2 lg:px-8 max-w-7xl flex flex-1 items-center justify-evenly sm:justify-between">
        <div className="flex">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex flex-shrink-0 items-center">
            <img className="h-8 w-auto" src={logo} alt="الشركة" />
          </Link>

          {/* Navigation Links */}
          <ol className="hidden sm:block sm:mr-6">
            <li className="flex gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === `/${link.to}`
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </li>
          </ol>
        </div>

        <Link
          to={`${ROUTES.FORMS}/${ROUTES.NEW_FROM}`}
          className="flex items-center text-sm font-medium bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          <PlusIcon className="size-5" />
          اضافة استمارة
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className="bg-white fixed z-10 bottom-0 shadow-2xl shadow-black w-full sm:hidden border-t border-gray-200"
        id="mobile-menu"
      >
        <ul className="flex justify-between flex-nowrap">
          {navLinks.map((link) => (
            <li
              key={link.to}
              className="group basis-1/4 shrink-0 grow-0 max-w-[25%]"
            >
              <Link
                to={link.to}
                className={`flex flex-col items-center text-center rounded-md transition py-3 px-2 ${
                  location.pathname === `/${link.to}`
                    ? "text-emerald-700"
                    : "text-gray-600"
                }`}
              >
                {link.icon}
                <span className="hidden xs:inline group-hover:text-emerald-700">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
