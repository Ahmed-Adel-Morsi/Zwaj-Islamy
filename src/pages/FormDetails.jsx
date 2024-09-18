import { useParams } from "react-router-dom";
import image from "../assets/women_profile_pic.png";
import { useState, useRef, useEffect } from "react";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  EyeIcon,
  PauseCircleIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CustomInput, CustomRadio } from "../components/CustomForm";
import toast from "react-hot-toast";
import { womenFormData } from "../lib/womenFormData";

function Section({ title, children, className }) {
  return (
    <div
      className={`rounded-lg bg-orange-600 bg-opacity-10 p-6 xs:p-8 sm:p-10 space-y-4 xs:space-y-6 sm:space-y-8 ${
        className ? className : ""
      }`}
    >
      {title && (
        <h3 className="font-bold text-[8vw] xs:text-3xl text-center">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

function Image() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={image}
        alt="women_profile_pic"
        className="w-full max-w-48 rounded-full border-8 border-white mx-auto cursor-pointer"
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <img src={image} alt="women_profile_pic" className="w-full" />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function MasterSection({ specifications, suspended }) {
  const [showNumber, setShowNumber] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneRef = useRef(null);

  const copyHandler = () => {
    navigator.clipboard.writeText(phoneRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="w-full md:w-[22rem] h-full shrink-0 md:sticky md:top-28 md:right-0">
      <Section className="h-full">
        <Image />
        <div className="text-center my-6">
          <h3 className="text-[8vw] xs:text-3xl font-bold">
            {specifications.socialStatus === "عزباء" ? "الآنسة" : "الأستاذة"}{" "}
            {specifications.name[0]}
          </h3>
          <p className="text-[5vw] xs:text-lg text-red-700 font-bold mt-2">
            {specifications.job}
          </p>
        </div>
        <div className="text-center mt-8 mb-6 space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 310"
            className="fill-orange-400 size-[10vw] xs:size-8 mx-auto"
          >
            <path d="M288.32 49.87H183.19v210.26L288.32 155zM126.81 155V49.87H21.68v210.26z"></path>
          </svg>
          <p className="text-[4.6vw] xs:text-base text-gray-500 font-semibold">
            {specifications.description}
          </p>
        </div>
        <div className="p-4 xs:p-6 sm:p-8 bg-orange-600 bg-opacity-20 rounded-lg">
          <div className="space-y-4 text-gray-800 text-[4.5vw] xs:text-base">
            <div className="flex items-center gap-2">
              <svg
                style={{ color: "#b91c1c" }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="person-dress"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
                className="size-[6.5vw] xs:size-6"
              >
                <path
                  fill="currentColor"
                  d="M160 96c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"
                ></path>
              </svg>
              <p>
                <span className="font-bold">السن :</span> {specifications.age}{" "}
                سنة
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                style={{ color: "#b91c1c" }}
                className="size-[6.5vw] xs:size-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ring"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M64 208c0 7.8 4.4 18.7 17.1 30.3C126.5 214.1 188.9 200 256 200s129.5 14.1 174.9 38.3C443.6 226.7 448 215.8 448 208c0-12.3-10.8-32-47.9-50.6C364.9 139.8 314 128 256 128s-108.9 11.8-144.1 29.4C74.8 176 64 195.7 64 208zm192 40c-47 0-89.3 7.6-122.9 19.7C166.3 280.2 208.8 288 256 288s89.7-7.8 122.9-20.3C345.3 255.6 303 248 256 248zM0 208c0-49.6 39.4-85.8 83.3-107.8C129.1 77.3 190.3 64 256 64s126.9 13.3 172.7 36.2c43.9 22 83.3 58.2 83.3 107.8v96c0 49.6-39.4 85.8-83.3 107.8C382.9 434.7 321.7 448 256 448s-126.9-13.3-172.7-36.2C39.4 389.8 0 353.6 0 304V208z"
                ></path>
              </svg>
              <p>
                <span className="font-bold">الحالة الإجتماعية :</span>{" "}
                {specifications.socialStatus}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                style={{ color: "#b91c1c" }}
                className="size-[6.5vw] xs:size-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ruler-vertical"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M0 48C0 21.5 21.5 0 48 0H208c26.5 0 48 21.5 48 48V96H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48z"
                ></path>
              </svg>
              <p>
                <span className="font-bold">الطول :</span>{" "}
                {specifications.height} سم
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                style={{ color: "#b91c1c" }}
                className="size-[6.5vw] xs:size-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="location-dot"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
                ></path>
              </svg>
              <p>
                <span className="font-bold">المحافظة :</span>{" "}
                {specifications.location}
              </p>
            </div>
          </div>
          {!suspended && (
            <div className="mt-6 xs:mt-10 text-center font-bold tracking-wide">
              {showNumber ? (
                <>
                  <div className="flex flex-col xs:flex-row rounded-lg bg-orange-600 text-white cursor-pointer ">
                    <button
                      type="button"
                      className="flex-center gap-2 text-[4.5vw] xs:text-sm p-3 xs:p-4 hover:bg-black/5"
                      title="نسخ الرقم"
                      onClick={copyHandler}
                    >
                      {copied ? (
                        <ClipboardDocumentCheckIcon className="size-[5.5vw] xs:size-5 text-white" />
                      ) : (
                        <ClipboardDocumentListIcon className="size-[5.5vw] xs:size-5 text-white" />
                      )}
                      <span className="xs:hidden">نسخ الرقم</span>
                    </button>
                    <a
                      href={`tel:${specifications.phone}`}
                      className="grow flex-center text-[4.5vw] xs:text-sm hover:bg-black/5 p-3 xs:p-4 truncate"
                      ref={phoneRef}
                    >
                      {specifications.phone}
                    </a>
                  </div>
                  {copied && (
                    <p className="text-red-700 mt-2 font-semibold">
                      تم نسخ الرقم بنجاح
                    </p>
                  )}
                </>
              ) : (
                <button
                  type="button"
                  className="w-full rounded-lg bg-orange-600 text-white p-4 hover:bg-opacity-90 flex-center gap-2 text-[4.5vw] xs:text-sm"
                  onClick={() => setShowNumber(true)}
                >
                  <EyeIcon className="size-[5.5vw] xs:size-5" />
                  إظهار رقم ولي الأمر
                </button>
              )}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

function RemoveForm() {
  const [open, setOpen] = useState(false);
  const [engaged, setEngaged] = useState({ name: "none" });

  const removeHandler = () => {
    setOpen(false);
    toast.success("تم حذف الاستمارة بنجاح", {
      position: "bottom-center",
    });
  };

  return (
    <>
      <button
        type="button"
        className="w-full p-3 xs:p-4 rounded-lg font-bold text-white bg-red-700 hover:bg-red-800 flex-center gap-2 mx-auto text-[4.5vw] xs:text-sm tracking-wide"
        onClick={() => setOpen(true)}
      >
        <TrashIcon className="size-[5.5vw] xs:size-5" />
        <span>حذف الاستمارة</span>
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mr-4 sm:mt-0 sm:text-right">
                    <DialogTitle
                      as="h3"
                      className="text-base font-medium leading-6 text-gray-900"
                    >
                      حذف الاستمارة
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        هل أنت متأكد من حذف هذه الاستمارة؟ لا يمكن التراجع عن
                        هذه العملية.
                      </p>
                    </div>
                    <div className="mt-6 space-y-4">
                      <CustomInput placeholder="ادخل الرقم السري للإستمارة لتتمكن من حذفها" />
                      <CustomRadio
                        label="هل تمت الخطبة؟"
                        value={engaged}
                        onChange={setEngaged}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={removeHandler}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-red-500 sm:mr-3 sm:w-auto"
                >
                  حذف
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  إلغاء
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function SuspendForm() {
  const [open, setOpen] = useState(false);
  const suspendHandler = () => {
    setOpen(false);
    toast.success("تم تعليق الاستمارة بنجاح", {
      position: "bottom-center",
    });
  };

  return (
    <>
      <button
        type="button"
        className="w-full p-3 xs:p-4 rounded-lg font-bold text-white bg-yellow-600 hover:bg-yellow-700 flex-center gap-2 mx-auto text-[4.5vw] xs:text-sm tracking-wide"
        onClick={() => setOpen(true)}
      >
        <PauseCircleIcon className="size-[5.5vw] xs:size-5" />
        <span>تعليق الاستمارة</span>
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-orange-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mr-4 sm:mt-0 sm:text-right">
                    <DialogTitle
                      as="h3"
                      className="text-base font-medium leading-6 text-gray-900"
                    >
                      تعليق الاستمارة
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        هل أنت متأكد من تعليق هذة الاستمارة؟ هذا يعنى ان رقم ولي
                        الأمر لن يظهر للمستخدمين الآخرين حتى تقوم بإعادة
                        تفعيلها.
                      </p>
                    </div>
                    <div className="mt-6">
                      <CustomInput placeholder="ادخل الرقم السري للإستمارة لتتمكن من تعليقها" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={suspendHandler}
                  className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-yellow-700 sm:mr-3 sm:w-auto"
                >
                  تعليق
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  إلغاء
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function FormDetails() {
  const { formNumber } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const form = womenFormData.find(
      (form) => form.code === parseInt(formNumber)
    );
    if (form) setFormData(form);
  }, [formNumber]);

  return (
    <div className="grow w-full max-w-7xl mx-auto px-3 xs:px-6 lg:px-8 py-14">
      <div className="border-b pb-4">
        <h2 className="section-header text-center">إستمارة {formNumber}</h2>
      </div>
      {formData && (
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <MasterSection
            specifications={formData.specifications}
            suspended={formData.suspended}
          />
          <div className="grow w-full grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Section title="مواصفات العروسة">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <li>
                    <span className="font-bold">اللون :</span>{" "}
                    {formData.specifications.skinColor}
                  </li>
                  <li>
                    <span className="font-bold">المؤهل :</span>{" "}
                    {formData.specifications.qualification}
                  </li>
                  <li>
                    <span className="font-bold">الوظيفة :</span>{" "}
                    {formData.specifications.job}
                  </li>
                  <li>
                    <span className="font-bold">الأطفال :</span>{" "}
                    {formData.specifications.hasChildren
                      ? `${formData.specifications.childrenNumber} أطفال`
                      : "بدون اطفال"}
                  </li>
                  <li>
                    <span className="font-bold">الحالة الصحية :</span>{" "}
                    {formData.specifications.illnessOrDisability
                      ? `اعانى من ${formData.specifications.healthStatus}`
                      : "لا اعانى من اي امراض او إعاقة"}
                  </li>
                  <li>
                    <span className="font-bold">الصلاة :</span>{" "}
                    {formData.specifications.prayer
                      ? "نعم احافظ على الصلاة"
                      : "لا احافظ على الصلاة"}
                  </li>
                </ul>
              </Section>
              <Section title="شروط العروسة">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <li>
                    <span className="font-bold">المحافظة : </span>
                    {formData.specifications.sameGovernment
                      ? "لا أقبل الانتقال لمحافظة أخرى"
                      : "أقبل الانتقال لمحافظة أخرى"}
                  </li>
                  <li>
                    <span className="font-bold">التعدد : </span>
                    {formData.specifications.acceptPolygamy
                      ? "أقبل التعدد"
                      : "لا أقبل التعدد"}
                  </li>
                  {formData.specifications.acceptPolygamy &&
                    formData.specifications.polygamyConditions !== "" && (
                      <li>
                        <span className="font-bold">شروط التعدد : </span>
                        {formData.specifications.polygamyConditions}
                      </li>
                    )}
                </ul>
              </Section>
              <Section title="المواصفات المطلوبة في العريس">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <li>
                    <span className="font-bold">السن :</span> من{" "}
                    {formData.requirements.ageRange.from} الى{" "}
                    {formData.requirements.ageRange.to} سنة
                  </li>
                  <li>
                    <span className="font-bold">المؤهل :</span>{" "}
                    {formData.requirements.qualification}
                  </li>
                  <li>
                    <span className="font-bold">الحالة الإجماعية :</span>{" "}
                    {formData.requirements.maritalStatus.join(" أو ")}
                  </li>
                  <li>
                    <span className="font-bold">الأطفال :</span>{" "}
                    {formData.requirements.children.join(" أو ")}
                  </li>
                  <li>
                    <span className="font-bold">السكن :</span>{" "}
                    {formData.requirements.housing}
                  </li>
                  <li>
                    <span className="font-bold">المنطقة :</span>{" "}
                    {formData.requirements.area}
                  </li>
                </ul>
              </Section>
            </div>
            <div className="space-y-8">
              <Section title="شروط آخرى">
                <p className="text-gray-800 text-[4.5vw] xs:text-base">
                  {formData.requirements.otherConditions}
                </p>
              </Section>
              <Section title="ملاحظات اضافية">
                <p className="text-gray-800 text-[4.5vw] xs:text-base">
                  {formData.requirements.additionalNotes}
                </p>
              </Section>
              <Section title="إجراءات">
                <div className="space-y-3">
                  <SuspendForm />
                  <RemoveForm />
                </div>
              </Section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormDetails;
