import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import AllAlerts from "../components/AllAlerts";

const sortOptions = [
  { name: "رقم الاستمارة", href: "#", current: true },
  { name: "السن: من الأصغر للأكبر", href: "#", current: false },
  { name: "السن: من الأكبر للأصغر", href: "#", current: false },
  { name: "الطول: من الأقصر للأطول", href: "#", current: false },
  { name: "الطول: من الأطول للأقصر", href: "#", current: false },
];

const filters = [
  {
    id: "governorates",
    name: "المحافظات",
    options: [
      { value: "aswan", label: "أسوان", checked: false },
      { value: "asyut", label: "أسيوط", checked: false },
      { value: "alexandria", label: "الاسكندرية", checked: false },
      { value: "ismailia", label: "الإسماعيلية", checked: false },
      { value: "luxor", label: "الأقصر", checked: false },
      { value: "red-sea", label: "البحر الأحمر", checked: false },
      { value: "beheira", label: "البحيرة", checked: false },
      { value: "giza", label: "الجيزة", checked: false },
      { value: "dakahlia", label: "الدقهلية", checked: false },
      { value: "suez", label: "السويس", checked: false },
      { value: "sharqia", label: "الشرقية", checked: false },
      { value: "gharbia", label: "الغربية", checked: false },
      { value: "faiyum", label: "الفيوم", checked: false },
      { value: "cairo", label: "القاهرة", checked: false },
      { value: "qalyubia", label: "القليوبية", checked: false },
      { value: "menofia", label: "المنوفية", checked: false },
      { value: "minya", label: "المنيا", checked: false },
      { value: "new-valley", label: "الوادي الجديد", checked: false },
      { value: "beni-suef", label: "بني سويف", checked: false },
      { value: "port-said", label: "بورسعيد", checked: false },
      { value: "south-sinai", label: "جنوب سيناء", checked: false },
      { value: "damietta", label: "دمياط", checked: false },
      { value: "sohag", label: "سوهاج", checked: false },
      { value: "north-sinai", label: "شمال سيناء", checked: false },
      { value: "qena", label: "قنا", checked: false },
      { value: "kafr-el-sheikh", label: "كفر الشيخ", checked: false },
      { value: "matrouh", label: "مطروح", checked: false },
    ],
  },
  {
    id: "status",
    name: "الحالة الاجتماعية",
    options: [
      { value: "single", label: "عزباء", checked: false },
      { value: "divorcee", label: "مطلقة", checked: false },
      { value: "widow", label: "أرملة", checked: false },
    ],
  },
  {
    id: "skinColor",
    name: "لون البشرة",
    options: [
      { value: "dark", label: "داكن", checked: false },
      { value: "light", label: "فاتح", checked: false },
      { value: "burgundy", label: "عنابي", checked: false },
      { value: "wheaten", label: "قمحي", checked: false },
      { value: "blonde", label: "شقراء", checked: false },
      { value: "black", label: "سمراء", checked: false },
      { value: "white", label: "بيضاء / ناصعة البياض", checked: false },
    ],
  },
  {
    id: "haveKids",
    name: "لديها اطفال",
    options: [
      { value: "yes", label: "نعم", checked: false },
      { value: "no", label: "لا", checked: false },
    ],
  },
  {
    id: "moveToOtherCity",
    name: "الانتقال إلى محافظة أخرى",
    options: [
      { value: "yes", label: "نعم", checked: false },
      { value: "no", label: "لا", checked: false },
    ],
  },
  {
    id: "region",
    name: "المنطقة",
    options: [
      { value: "classy", label: "راقية", checked: false },
      { value: "medium", label: "متوسطة", checked: false },
      { value: "popular", label: "شعبية", checked: false },
    ],
  },
  {
    id: "living",
    name: "السكن",
    options: [
      { value: "ownership", label: "تمليك", checked: false },
      { value: "rent", label: "ايجار", checked: false },
    ],
  },
  {
    id: "qualification",
    name: "المؤهل",
    options: [
      { value: "doctor", label: "دكتور / دكتورة", checked: false },
      { value: "engineer", label: "مهندس / مهندسة", checked: false },
      { value: "teacher", label: "معلم / معلمة", checked: false },
      { value: "graduate", label: "خريج / خريجة", checked: false },
      { value: "highSchool", label: "مؤهل متوسط ( ثانوية )", checked: false },
      { value: "middleSchool", label: "شهادة اعدادية", checked: false },
      { value: "primarySchool", label: "شهادة ابتدائية", checked: false },
      { value: "noQualification", label: "بدون مؤهل", checked: false },
      { value: "highQualification", label: "مؤهل عالي", checked: false },
    ],
  },
  {
    id: "acceptDivorcedWidow",
    name: "توافق بمطلق او ارمل",
    options: [
      { value: "yes", label: "نعم", checked: false },
      { value: "no", label: "لا", checked: false },
    ],
  },
  {
    id: "groomQualification",
    name: "مؤهل العريس",
    options: [
      { value: "doctor", label: "دكتور / دكتورة", checked: false },
      { value: "engineer", label: "مهندس / مهندسة", checked: false },
      { value: "teacher", label: "معلم / معلمة", checked: false },
      { value: "graduate", label: "خريج / خريجة", checked: false },
      { value: "highSchool", label: "مؤهل متوسط ( ثانوية )", checked: false },
      { value: "middleSchool", label: "شهادة اعدادية", checked: false },
      { value: "primarySchool", label: "شهادة ابتدائية", checked: false },
      { value: "noQualification", label: "بدون مؤهل", checked: false },
      { value: "highQualification", label: "مؤهل عالي", checked: false },
    ],
  },
  {
    id: "acceptPolygamy",
    name: "تقبل التعدد",
    options: [
      { value: "yes", label: "نعم", checked: false },
      { value: "no", label: "لا", checked: false },
    ],
  },
  {
    id: "ageRange",
    name: "السن",
    options: [
      { value: "age_from", label: "من", inputType: "text" },
      { value: "age_to", label: "الى", inputType: "text" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function WomenForms() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div>
      {/* Mobile filter dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                <li>
                  <Link
                    to={`/${ROUTES.FORMS}/${ROUTES.MEN}`}
                    className="px-2 py-3 flex items-center gap-1"
                  >
                    استمارات الرجال
                    <ArrowTopRightOnSquareIcon className="size-5" />
                  </Link>
                </li>
              </ul>

              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                            className="mr-3 min-w-0 flex-1 text-gray-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto max-w-[1700px] px-6 sm:px-8 lg:px-10 pt-12 md:pt-16 xl:pt-24">
        <AllAlerts />
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-8 justify-between border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-right">
            استمارات النساء
          </h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  ترتيب
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={classNames(
                          option.current
                            ? "font-medium text-gray-900"
                            : "text-gray-500",
                          "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                        )}
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <button
              type="button"
              className="-m-2 mr-5 p-2 text-gray-400 hover:text-gray-500 sm:mr-7"
            >
              <span className="sr-only">View grid</span>
              <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 mr-4 p-2 text-gray-400 hover:text-gray-500 sm:mr-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
            {/* Filters */}
            <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul
                role="list"
                className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
              >
                <li>
                  <Link
                    to={`/${ROUTES.FORMS}/${ROUTES.MEN}`}
                    className="flex gap-1 items-center"
                  >
                    استمارات الرجال
                    <ArrowTopRightOnSquareIcon className="size-5" />
                  </Link>
                </li>
              </ul>

              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="mr-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* Product grid */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default WomenForms;
