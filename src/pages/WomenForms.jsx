import { useEffect, useState } from "react";
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
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import AllAlerts from "../components/AllAlerts";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { womenFormData } from "../lib/womenFormData";

const filters = [
  {
    id: "suspended",
    name: "حالة الاستمارة",
    options: [
      { value: "true", label: "معلقة" },
      { value: "false", label: "سارية" },
    ],
  },
  {
    id: "governorate",
    name: "المحافظات",
    options: [
      { value: "أسوان", label: "أسوان" },
      { value: "أسيوط", label: "أسيوط" },
      { value: "الإسكندرية", label: "الإسكندرية" },
      { value: "الإسماعيلية", label: "الإسماعيلية" },
      { value: "الأقصر", label: "الأقصر" },
      { value: "البحر الأحمر", label: "البحر الأحمر" },
      { value: "البحيرة", label: "البحيرة" },
      { value: "الجيزة", label: "الجيزة" },
      { value: "الدقهلية", label: "الدقهلية" },
      { value: "السويس", label: "السويس" },
      { value: "الشرقية", label: "الشرقية" },
      { value: "الغربية", label: "الغربية" },
      { value: "الفيوم", label: "الفيوم" },
      { value: "القاهرة", label: "القاهرة" },
      { value: "القليوبية", label: "القليوبية" },
      { value: "المنوفية", label: "المنوفية" },
      { value: "المنيا", label: "المنيا" },
      { value: "الوادي الجديد", label: "الوادي الجديد" },
      { value: "بني سويف", label: "بني سويف" },
      { value: "بورسعيد", label: "بورسعيد" },
      { value: "جنوب سيناء", label: "جنوب سيناء" },
      { value: "دمياط", label: "دمياط" },
      { value: "سوهاج", label: "سوهاج" },
      { value: "شمال سيناء", label: "شمال سيناء" },
      { value: "قنا", label: "قنا" },
      { value: "كفر الشيخ", label: "كفر الشيخ" },
      { value: "مطروح", label: "مطروح" },
    ],
  },
  {
    id: "socialStatus",
    name: "الحالة الاجتماعية",
    options: [
      { value: "عزباء", label: "عزباء" },
      { value: "مطلقة", label: "مطلقة" },
      { value: "أرملة", label: "أرملة" },
    ],
  },
  {
    id: "skinColor",
    name: "لون البشرة",
    options: [
      { value: "داكنة", label: "داكنة" },
      { value: "فاتحة", label: "فاتحة" },
      { value: "عنابية", label: "عنابية" },
      { value: "قمحية", label: "قمحية" },
      { value: "شقراء", label: "شقراء" },
      { value: "سمراء", label: "سمراء" },
      { value: "بيضاء / ناصعة البياض", label: "بيضاء / ناصعة البياض" },
    ],
  },
  {
    id: "hasChildren",
    name: "لديها اطفال",
    options: [
      { value: "true", label: "نعم" },
      { value: "false", label: "لا" },
    ],
  },
  {
    id: "sameGovernorate",
    name: "الانتقال إلى محافظة أخرى",
    options: [
      { value: "true", label: "نعم" },
      { value: "false", label: "لا" },
    ],
  },
  {
    id: "groomHousing",
    name: "السكن",
    options: [
      { value: "تمليك", label: "تمليك" },
      { value: "إيجار", label: "إيجار" },
    ],
  },
  {
    id: "groomRegion",
    name: "المنطقة",
    options: [
      { value: "راقية", label: "راقية" },
      { value: "متوسطة", label: "متوسطة" },
      { value: "شعبية", label: "شعبية" },
    ],
  },
  {
    id: "qualification",
    name: "المؤهل",
    options: [
      { value: "دكتورة", label: "دكتورة" },
      { value: "مهندسة", label: "مهندسة" },
      { value: "معلمة", label: "معلمة" },
      { value: "مؤهل عالي", label: "مؤهل عالي" },
      { value: "خريجة", label: "خريجة" },
      { value: "دبلوم", label: "دبلوم" },
      { value: "مؤهل متوسط ( ثانوية )", label: "مؤهل متوسط ( ثانوية )" },
      { value: "شهادة اعدادية", label: "شهادة اعدادية" },
      { value: "شهادة ابتدائية", label: "شهادة ابتدائية" },
      { value: "بدون مؤهل", label: "بدون مؤهل" },
    ],
  },
  {
    id: "acceptDivorcedWidow",
    name: "توافق بمطلق او أرمل",
    options: [
      { value: "true", label: "نعم" },
      { value: "false", label: "لا" },
    ],
  },
  {
    id: "groomQualification",
    name: "مؤهل العريس",
    options: [
      { value: "دكتور", label: "دكتور" },
      { value: "مهندس", label: "مهندس" },
      { value: "معلم", label: "معلم" },
      { value: "مؤهل عالي", label: "مؤهل عالي" },
      { value: "خريج", label: "خريج" },
      { value: "دبلوم", label: "دبلوم" },
      {
        value: "مؤهل متوسط ( ثانوية )",
        label: "مؤهل متوسط ( ثانوية )",
      },
      { value: "شهادة اعدادية", label: "شهادة اعدادية" },
      { value: "شهادة ابتدائية", label: "شهادة ابتدائية" },
      { value: "بدون مؤهل", label: "بدون مؤهل" },
    ],
  },
  {
    id: "acceptPolygamy",
    name: "تقبل التعدد",
    options: [
      { value: "true", label: "نعم" },
      { value: "false", label: "لا" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function WomenForms() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredForms, setFilteredForms] = useState(womenFormData);
  const [activeFilters, setActiveFilters] = useState({});
  const [ageFilter, setAgeFilter] = useState({ from: "", to: "" });
  const [sortBy, setSortBy] = useState("random");

  const sortOptions = [
    {
      name: "عشوائى",
      id: "random",
      action: () => {
        setSortBy("random");
      },
    },
    {
      name: "رقم الاستمارة: من الأصغر للأكبر",
      id: "formCodeAsc",
      action: () => {
        setSortBy("formCodeAsc");
      },
    },
    {
      name: "رقم الاستمارة: من الأكبر للأصغر",
      id: "formCodeDesc",
      action: () => {
        setSortBy("formCodeDesc");
      },
    },
    {
      name: "السن: من الأصغر للأكبر",
      id: "ageAsc",
      action: () => {
        setSortBy("ageAsc");
      },
    },
    {
      name: "السن: من الأكبر للأصغر",
      id: "ageDesc",
      action: () => {
        setSortBy("ageDesc");
      },
    },
    {
      name: "الطول: من الأقصر للأطول",
      id: "heightAsc",
      action: () => {
        setSortBy("heightAsc");
      },
    },
    {
      name: "الطول: من الأطول للأقصر",
      id: "heightDesc",
      action: () => {
        setSortBy("heightDesc");
      },
    },
  ];

  const handleFilterChange = (sectionId, value) => {
    setActiveFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (!newFilters[sectionId]) {
        newFilters[sectionId] = [];
      }

      if (newFilters[sectionId].includes(value)) {
        newFilters[sectionId] = newFilters[sectionId].filter(
          (v) => v !== value
        );
      } else {
        newFilters[sectionId].push(value);
      }

      return newFilters;
    });
  };

  const sortForms = (forms) => {
    switch (sortBy) {
      case "formCodeAsc":
        return forms.sort((a, b) => a.code - b.code);
      case "formCodeDesc":
        return forms.sort((a, b) => b.code - a.code);
      case "ageAsc":
        return forms.sort((a, b) => a.age - b.age);
      case "ageDesc":
        return forms.sort((a, b) => b.age - a.age);
      case "heightAsc":
        return forms.sort((a, b) => a.height - b.height);
      case "heightDesc":
        return forms.sort((a, b) => b.height - a.height);
      default:
        return forms.sort(() => Math.random() - 0.5);
    }
  };

  const applyFilters = () => {
    let filtered = womenFormData.filter((form) =>
      `${form.code} ${form.name}`.includes(searchQuery)
    );

    Object.keys(activeFilters).forEach((filterKey) => {
      const selectedOptions = activeFilters[filterKey];
      if (selectedOptions.length > 0) {
        filtered = filtered.filter((form) =>
          selectedOptions.includes(`${form[filterKey]}`)
        );
      }
    });

    if (ageFilter.from !== "") {
      filtered = filtered.filter((form) => form.age >= ageFilter.from);
    }
    if (ageFilter.to !== "") {
      filtered = filtered.filter((form) => form.age <= ageFilter.to);
    }

    setFilteredForms(sortForms([...filtered]));
  };

  useEffect(() => {
    applyFilters();
  }, [searchQuery, activeFilters, ageFilter]);

  useEffect(() => {
    setFilteredForms(sortForms([...filteredForms]));
  }, [sortBy]);

  useEffect(() => {
    document.title = "إستمارات النساء";

    return () => {
      document.title = "زواج اسلامى";
    };
  }, []);

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
              <h2 className="text-lg font-medium text-gray-900">بحث متقدم</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex-center h-10 w-10 rounded-md bg-white p-2 text-gray-400"
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
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            checked={
                              activeFilters[section.id]?.includes(
                                option.value
                              ) || false
                            }
                            onChange={() =>
                              handleFilterChange(section.id, option.value)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                          />
                          <label
                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                            className="pr-3 min-w-0 flex-1 text-gray-500 cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
              <Disclosure
                as="div"
                className="border-t border-gray-200 px-4 py-6"
              >
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">السن</span>
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
                  <div className="flex gap-4">
                    <input
                      value={ageFilter.from}
                      id="ageFrom"
                      name="ageFrom"
                      type="number"
                      placeholder="من"
                      onChange={(e) =>
                        setAgeFilter((prev) => ({
                          ...prev,
                          from: e.target.value,
                        }))
                      }
                      className="w-1/2 rounded border p-2 border-gray-300  focus:ring-indigo-500"
                    />
                    <input
                      value={ageFilter.to}
                      id="ageTo"
                      name="ageTo"
                      type="number"
                      placeholder="إلى"
                      onChange={(e) =>
                        setAgeFilter((prev) => ({
                          ...prev,
                          to: e.target.value,
                        }))
                      }
                      className="w-1/2 rounded border p-2 border-gray-300  focus:ring-indigo-500"
                    />
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="pt-12 md:pt-16 xl:pt-24">
        <AllAlerts />
        <div className="border-b border-gray-200 sm:sticky top-[4.5rem] z-30 bg-white">
          <div className="container-lg flex flex-col sm:flex-row items-center gap-8 justify-between py-4 mt-6">
            <h1 className="shrink-0 text-4xl font-bold tracking-tight text-gray-900 text-center sm:text-right">
              استمارات النساء
            </h1>

            <div className="relative rounded-md shadow-sm w-full md:w-1/2">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm">
                  <MagnifyingGlassIcon className="size-4" />
                </span>
              </div>
              <input
                id="form_code"
                name="form_code"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  window.scroll({
                    top: 600,
                    behavior: "smooth",
                  });
                }}
                placeholder="ابحث عن الإستمارة بالكود"
                className="block w-full rounded-md border-0 py-1.5 px-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>

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
                  className="absolute left-1/2 -translate-x-[55%] sm:translate-x-0 sm:left-0 z-10 mt-2 w-56 max-w-[100vw] sm:origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <button
                          onClick={option.action}
                          className={classNames(
                            sortBy === option.id
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block w-full text-right px-4 py-2 text-sm data-[focus]:bg-gray-100"
                          )}
                        >
                          {option.name}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

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
        </div>

        <section
          aria-labelledby="products-heading"
          className="container-lg pb-24 pt-6"
        >
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
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            checked={
                              activeFilters[section.id]?.includes(
                                option.value
                              ) || false
                            }
                            onChange={() =>
                              handleFilterChange(section.id, option.value)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="pr-3 text-sm text-gray-600 cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
              <Disclosure as="div" className="border-gray-200 py-6">
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">السن</span>
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
                  <div className="flex gap-4">
                    <input
                      value={ageFilter.from}
                      id="ageFrom"
                      name="ageFrom"
                      type="number"
                      placeholder="من"
                      onChange={(e) =>
                        setAgeFilter((prev) => ({
                          ...prev,
                          from: e.target.value,
                        }))
                      }
                      className="w-1/2 rounded border p-2 border-gray-300  focus:ring-indigo-500"
                    />
                    <input
                      value={ageFilter.to}
                      id="ageTo"
                      name="ageTo"
                      type="number"
                      placeholder="إلى"
                      onChange={(e) =>
                        setAgeFilter((prev) => ({
                          ...prev,
                          to: e.target.value,
                        }))
                      }
                      className="w-1/2 rounded border p-2 border-gray-300  focus:ring-indigo-500"
                    />
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>

            {/* Product grid */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredForms.map((form) => (
                  <Card key={form.code} data={form} />
                ))}
              </div>
              <Pagination length={filteredForms.length} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default WomenForms;
