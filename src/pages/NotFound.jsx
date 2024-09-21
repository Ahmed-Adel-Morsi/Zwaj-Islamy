import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "الصفحة غير موجودة";

    return () => {
      document.title = "زواج اسلامى";
    };
  }, []);

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            الصفحة غير موجودة
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            معذرةً، ربما اتبعت رابط خاطيء او تحاول البحث عن نتيجة غير موجودة فى
            سجلاتنا.
          </p>
          <div className="mt-10 flex-center gap-x-6">
            <Link
              to={ROUTES.HOME}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              عودة للصفحة الرئيسية
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="text-sm font-semibold text-gray-900"
            >
              تواصل مع الدعم <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
