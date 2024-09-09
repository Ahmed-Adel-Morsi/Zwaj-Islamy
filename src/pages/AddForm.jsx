import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";

const statusOptions = [
  {
    id: "single",
    name: "أعزب / عزباء",
  },
  {
    id: "divorced",
    name: "مطلق / مطلقة",
  },
  {
    id: "widower",
    name: "أرمل / أرملة",
  },
];
const qualificationOptions = [
  {
    id: "noQualification",
    name: "بدون مؤهل",
  },
  {
    id: "doctor",
    name: "دكتور / دكتورة",
  },
  {
    id: "engineer",
    name: "مهندس / مهندسة",
  },
  {
    id: "teacher",
    name: "معلم / معلمة",
  },
  {
    id: "graduate",
    name: "خريج / خريجة",
  },
  {
    id: "intermediate",
    name: "مؤهل متوسط ( ثانوية )",
  },
  {
    id: "preparatory",
    name: "شهادة اعدادية",
  },
  {
    id: "primary",
    name: "شهادة ابتدائية",
  },
  {
    id: "highQualification",
    name: "مؤهل عالى",
  },
];
const skinColorOptions = [
  {
    id: "dark",
    name: "داكن",
  },
  {
    id: "light",
    name: "فاتح",
  },
  {
    id: "burgundy",
    name: "عنابي",
  },
  {
    id: "wheaten",
    name: "قمحي",
  },
  {
    id: "blonde",
    name: "أشقر",
  },
  {
    id: "black",
    name: "أسمر",
  },
  {
    id: "white",
    name: "أبيض ( ناصع البياض )",
  },
];
const governorateOptions = [
  { id: "aswan", name: "أسوان" },
  { id: "asyut", name: "أسيوط" },
  { id: "alexandria", name: "الاسكندرية" },
  { id: "ismailia", name: "الإسماعيلية" },
  { id: "luxor", name: "الأقصر" },
  { id: "red-sea", name: "البحر الأحمر" },
  { id: "beheira", name: "البحيرة" },
  { id: "giza", name: "الجيزة" },
  { id: "dakahlia", name: "الدقهلية" },
  { id: "suez", name: "السويس" },
  { id: "sharqia", name: "الشرقية" },
  { id: "gharbia", name: "الغربية" },
  { id: "faiyum", name: "الفيوم" },
  { id: "cairo", name: "القاهرة" },
  { id: "qalyubia", name: "القليوبية" },
  { id: "menofia", name: "المنوفية" },
  { id: "minya", name: "المنيا" },
  { id: "new-valley", name: "الوادي الجديد" },
  { id: "beni-suef", name: "بني سويف" },
  { id: "port-said", name: "بورسعيد" },
  { id: "south-sinai", name: "جنوب سيناء" },
  { id: "damietta", name: "دمياط" },
  { id: "sohag", name: "سوهاج" },
  { id: "north-sinai", name: "شمال سيناء" },
  { id: "qena", name: "قنا" },
  { id: "kafr-el-sheikh", name: "كفر الشيخ" },
  { id: "matrouh", name: "مطروح" },
];
const radioOptions = [
  { name: "yes", label: "نعم" },
  { name: "no", label: "لا" },
];

function AddForm() {
  const [status, setStatus] = useState(statusOptions[0]);
  const [qualification, setQualification] = useState(qualificationOptions[0]);
  const [skinColor, setSkinColor] = useState(skinColorOptions[0]);
  const [governorate, setGovernorate] = useState(governorateOptions[0]);
  const [hasChildren, setHasChildren] = useState(radioOptions[1]);
  const [acceptPolygamy, setAcceptPolygamy] = useState(radioOptions[1]);
  const [hasDiseases, setHasDiseases] = useState(radioOptions[1]);
  const [prayer, setPrayer] = useState(radioOptions[1]);
  const [anotherGovernorate, setAnotherGovernorate] = useState(radioOptions[1]);

  return (
    <div className="bg-white px-10 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          إستمارة جديدة
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          يرجى ملء جميع البيانات.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-3xl sm:mt-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="full-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              الاسم بالكامل
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              رقم هاتف ولى الأمر
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Listbox value={status} onChange={setStatus}>
              <Label className="block text-sm font-medium leading-6 text-gray-900">
                الحالة الإجتماعية
              </Label>
              <div className="relative mt-2.5">
                <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-5 text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-sm sm:leading-6">
                  <span className="block truncate">{status.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="h-4 w-4 text-gray-400"
                    />
                  </span>
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {statusOptions.map((option) => (
                    <ListboxOption
                      key={option.id}
                      value={option}
                      className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-600 data-[focus]:text-white"
                    >
                      <span className="block truncate font-medium group-data-[selected]:font-semibold">
                        {option.name}
                      </span>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-emerald-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                        <CheckIcon aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
          <div>
            <Listbox value={qualification} onChange={setQualification}>
              <Label className="block text-sm font-medium leading-6 text-gray-900">
                المؤهل
              </Label>
              <div className="relative mt-2.5">
                <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-5 text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-sm sm:leading-6">
                  <span className="block truncate">{qualification.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="h-4 w-4 text-gray-400"
                    />
                  </span>
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {qualificationOptions.map((option) => (
                    <ListboxOption
                      key={option.id}
                      value={option}
                      className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-600 data-[focus]:text-white"
                    >
                      <span className="block truncate font-medium group-data-[selected]:font-semibold">
                        {option.name}
                      </span>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-emerald-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                        <CheckIcon aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              السن
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="age"
                id="age"
                autoComplete="off"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              الطول
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="height"
                id="height"
                autoComplete="off"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Listbox value={skinColor} onChange={setSkinColor}>
              <Label className="block text-sm font-medium leading-6 text-gray-900">
                لون البشره
              </Label>
              <div className="relative mt-2.5">
                <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-5 text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-sm sm:leading-6">
                  <span className="block truncate">{skinColor.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="h-4 w-4 text-gray-400"
                    />
                  </span>
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {skinColorOptions.map((option) => (
                    <ListboxOption
                      key={option.id}
                      value={option}
                      className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-600 data-[focus]:text-white"
                    >
                      <span className="block truncate font-medium group-data-[selected]:font-semibold">
                        {option.name}
                      </span>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-emerald-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                        <CheckIcon aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
          <div>
            <Listbox value={governorate} onChange={setGovernorate}>
              <Label className="block text-sm font-medium leading-6 text-gray-900">
                المحافظة
              </Label>
              <div className="relative mt-2.5">
                <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-5 text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-sm sm:leading-6">
                  <span className="block truncate">{governorate.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="h-4 w-4 text-gray-400"
                    />
                  </span>
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {governorateOptions.map((option) => (
                    <ListboxOption
                      key={option.id}
                      value={option}
                      className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-600 data-[focus]:text-white"
                    >
                      <span className="block truncate font-medium group-data-[selected]:font-semibold">
                        {option.name}
                      </span>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-emerald-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                        <CheckIcon aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="job"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              المهنة
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="job"
                id="job"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="block text-sm font-semibold leading-6 text-gray-900">
              هل تحافظى على الصلوات الخمس
            </div>
            <RadioGroup
              by="name"
              value={prayer}
              onChange={setPrayer}
              aria-label="Server size"
              className="mt-2.5 w-full flex flex-col xs:flex-row gap-2"
            >
              {radioOptions.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="w-full group relative flex cursor-pointer rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                >
                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm/6 font-semibold">{plan.label}</p>
                    <CheckCircleIcon className="size-4 fill-emerald-500 opacity-0 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div>
            <div className="block text-sm font-semibold leading-6 text-gray-900">
              هل تقبلى الانتقال إالى أي محافظة أخرى
            </div>
            <RadioGroup
              by="name"
              value={anotherGovernorate}
              onChange={setAnotherGovernorate}
              aria-label="Server size"
              className="mt-2.5 w-full flex flex-col xs:flex-row gap-2"
            >
              {radioOptions.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="w-full group relative flex cursor-pointer rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                >
                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm/6 font-semibold">{plan.label}</p>
                    <CheckCircleIcon className="size-4 fill-emerald-500 opacity-0 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>

          {status.id !== "single" && (
            <>
              <div>
                <div className="block text-sm font-semibold leading-6 text-gray-900">
                  هل لديك اطفال
                </div>
                <RadioGroup
                  by="name"
                  value={hasChildren}
                  onChange={setHasChildren}
                  aria-label="Server size"
                  className="mt-2.5 w-full flex flex-col xs:flex-row gap-2"
                >
                  {radioOptions.map((plan) => (
                    <Radio
                      key={plan.name}
                      value={plan}
                      className="w-full group relative flex cursor-pointer rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                    >
                      <div className="flex w-full items-center justify-between">
                        <p className="text-sm/6 font-semibold">{plan.label}</p>
                        <CheckCircleIcon className="size-4 fill-emerald-500 opacity-0 transition group-data-[checked]:opacity-100" />
                      </div>
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <label
                  htmlFor="numberOfChildren"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  عدد الأولاد
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="numberOfChildren"
                    id="numberOfChildren"
                    min="1"
                    max="10"
                    disabled={hasChildren.name === "no"}
                    autoComplete="off"
                    className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <div className="block text-sm font-semibold leading-6 text-gray-900">
              هل تقبلى التعدد
            </div>
            <RadioGroup
              by="name"
              value={acceptPolygamy}
              onChange={setAcceptPolygamy}
              aria-label="Server size"
              className="mt-2.5 w-full flex flex-col xs:flex-row gap-2"
            >
              {radioOptions.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="w-full group relative flex cursor-pointer rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                >
                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm/6 font-semibold">{plan.label}</p>
                    <CheckCircleIcon className="size-4 fill-emerald-500 opacity-0 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div>
            <label
              htmlFor="polygamyConditions"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              شروط التعدد
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="polygamyConditions"
                id="polygamyConditions"
                min="1"
                max="10"
                disabled={acceptPolygamy.name === "no"}
                autoComplete="off"
                className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="block text-sm font-semibold leading-6 text-gray-900">
              هل تعانى من اى امراض أو اعاقات
            </div>
            <RadioGroup
              by="name"
              value={hasDiseases}
              onChange={setHasDiseases}
              aria-label="Server size"
              className="mt-2.5 w-full flex flex-col xs:flex-row gap-2"
            >
              {radioOptions.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="w-full group relative flex cursor-pointer rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                >
                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm/6 font-semibold">{plan.label}</p>
                    <CheckCircleIcon className="size-4 fill-emerald-500 opacity-0 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div>
            <label
              htmlFor="illness"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              المرض او الإعاقه
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="illness"
                id="illness"
                min="1"
                max="10"
                disabled={hasDiseases.name === "no"}
                autoComplete="off"
                className="disabled:cursor-not-allowed block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              تكلمى عن نفسك أو ما يقوله الناس عنك
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition duration-200 ease-in-out"
          >
            التالي
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
