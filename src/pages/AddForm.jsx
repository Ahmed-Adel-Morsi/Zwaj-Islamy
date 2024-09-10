import { useState } from "react";
import FirstPage from "../components/bride/FirstPage";
import SecondPage from "../components/bride/SecondPage";
import ThirdPage from "../components/bride/ThirdPage";

const pages = [
  { id: 0, title: "بيانات العروسة", component: <FirstPage /> },
  { id: 1, title: "المواصفات المطلوبة فى العريس", component: <SecondPage /> },
  { id: 2, title: "ولي أمر العروسة", component: <ThirdPage /> },
];

function AddForm() {
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const nextPage = () => setCurrentPage((prev) => pages[prev.id + 1]);
  const prevPage = () => setCurrentPage((prev) => pages[prev.id - 1]);

  return (
    <div className="bg-white px-10 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl mb-8 sm:mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          إستمارة جديدة
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          يرجى ملء جميع البيانات.
        </p>
      </div>

      <form
        className="mx-auto max-w-3xl"
        onSubmit={(e) => {
          e.preventDefault();
          nextPage();
        }}
      >
        <nav className="flex justify-center mb-5" aria-label="Breadcrumb">
          <ol className="flex flex-col sm:flex-row sm:inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            {pages.map((page, i) => (
              <li
                key={page.id}
                className={i === 0 ? "inline-flex items-center" : undefined}
                aria-current={currentPage === page ? "page" : undefined}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
                  {i !== 0 && (
                    <svg
                      className="rtl:rotate-90 sm:rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  )}

                  <span
                    className={`mb-3 sm:mb-0 sm:ms-1 text-sm text-center font-medium md:ms-2 dark:text-gray-400 ${
                      currentPage === page
                        ? "text-emerald-600"
                        : "text-gray-700"
                    }`}
                  >
                    {page.title}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {currentPage.component}
        </div>

        <div className="mt-10 flex gap-3 flex-col xs:flex-row">
          {currentPage.id !== 0 && (
            <button
              type="button"
              className="block w-full rounded-md border border-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition duration-200 ease-in-out"
              onClick={prevPage}
            >
              السابق
            </button>
          )}

          <button
            type="submit"
            className="block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition duration-200 ease-in-out"
          >
            {currentPage.id !== pages.length - 1 ? "التالي" : "إرسال"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
