import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  EyeIcon,
  PauseCircleIcon,
  PhoneIcon,
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
import { menFormData } from "../lib/menFormData";

function Section({ title, children, className }) {
  return (
    <div
      className={`rounded-lg bg-main bg-opacity-10 p-6 xs:p-8 sm:p-10 space-y-4 xs:space-y-6 sm:space-y-8 ${
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

function Image({ src }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt="profile_pic"
        className="w-full max-w-48 rounded-full border-8 border-white mx-auto cursor-pointer"
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onClose={setOpen} className="relative z-50">
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
              <img src={src} alt="profile_pic" className="w-full" />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function MasterSection({ formData }) {
  const [showNumber, setShowNumber] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyHandler = (e) => {
    navigator.clipboard.writeText(e.target.dataset.phone);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="w-full md:w-[22rem] h-full shrink-0 md:sticky md:top-28 md:right-0">
      <Section className="h-full">
        <Image src={formData.img} />
        <div className="text-center my-6">
          <h3 className="text-[8vw] xs:text-3xl font-bold">
            الأستاذ {formData.name.split(" ")[0]}
          </h3>
          <p className="text-[5vw] xs:text-lg text-red-700 font-bold mt-2">
            {formData.job}
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
            {formData.description}
          </p>
        </div>
        <div className="p-4 xs:p-6 sm:p-8 bg-main-hov bg-opacity-20 rounded-lg">
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
                <span className="font-bold">السن :</span> {formData.age} سنة
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
                {formData.socialStatus}
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
                <span className="font-bold">الطول :</span> {formData.height} سم
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
                {formData.governorate}
              </p>
            </div>
          </div>
          {!formData.suspended && (
            <div className="mt-6 xs:mt-10 text-center font-bold tracking-wide">
              {showNumber ? (
                <>
                  <div className="flex flex-col xs:flex-row rounded-lg bg-orange-600 text-white cursor-pointer ">
                    <button
                      type="button"
                      className="grow flex-center gap-2 text-[4.5vw] xs:text-sm p-3 xs:p-4 hover:bg-black/5"
                      title="نسخ الرقم"
                      onClick={copyHandler}
                      data-phone={formData.phone}
                    >
                      {copied ? (
                        <ClipboardDocumentCheckIcon className="size-[5.5vw] xs:size-5 text-white" />
                      ) : (
                        <ClipboardDocumentListIcon className="size-[5.5vw] xs:size-5 text-white" />
                      )}
                    </button>
                    <a
                      href={`tel:${formData.phone}`}
                      className="grow flex-center text-[4.5vw] xs:text-sm hover:bg-black/5 p-3 xs:p-4"
                    >
                      <PhoneIcon className="size-[5.5vw] xs:size-5" />
                    </a>
                    <a
                      href={`https://wa.me/+2${formData.phone}`}
                      target="_blank"
                      className="grow flex-center text-[4.5vw] xs:text-sm hover:bg-black/5 p-3 xs:p-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                        className="size-[5.5vw] xs:size-5"
                      >
                        <path
                          fill="#fff"
                          d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                        ></path>
                        <path
                          fill="#cfd8dc"
                          d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                        ></path>
                        <path
                          fill="#40c351"
                          d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                        ></path>
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
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
                  إظهار رقم الهاتف
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
                        هل أنت متأكد من تعليق هذة الاستمارة؟ هذا يعنى ان رقم
                        الهاتف لن يظهر للمستخدمين الآخرين حتى تقوم بإعادة
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

function ContinueForm() {
  const [open, setOpen] = useState(false);
  const suspendHandler = () => {
    setOpen(false);
    toast.success("تم تفعيل الاستمارة بنجاح", {
      position: "bottom-center",
    });
  };

  return (
    <>
      <button
        type="button"
        className="w-full p-3 xs:p-4 rounded-lg font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex-center gap-2 mx-auto text-[4.5vw] xs:text-sm tracking-wide"
        onClick={() => setOpen(true)}
      >
        <ArrowPathIcon className="size-[5.5vw] xs:size-5" />
        <span>تفعيل الاستمارة</span>
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
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ArrowPathIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-emerald-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mr-4 sm:mt-0 sm:text-right">
                    <DialogTitle
                      as="h3"
                      className="text-base font-medium leading-6 text-gray-900"
                    >
                      تفعيل الاستمارة
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        هل أنت متأكد من تفعيل هذة الاستمارة؟ هذا يعنى ان رقم
                        الهاتف سوف يظهر للمستخدمين الآخرين بشكل طبيعي.
                      </p>
                    </div>
                    <div className="mt-6">
                      <CustomInput placeholder="ادخل الرقم السري للإستمارة لتتمكن من تفعيلها مجدداً" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={suspendHandler}
                  className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 sm:mr-3 sm:w-auto"
                >
                  تفعيل
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

function MenFormDetails() {
  const { formNumber } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const form = menFormData.find((form) => form.code === parseInt(formNumber));
    if (form) setFormData(form);
  }, [formNumber]);

  useEffect(() => {
    document.title = "بيانات الإستمارة";

    return () => {
      document.title = "زواج اسلامى";
    };
  }, []);

  return (
    <div className="grow w-full max-w-7xl mx-auto px-3 xs:px-6 lg:px-8 py-14">
      <div className="border-b pb-4">
        <h2 className="section-header text-center">إستمارة {formNumber}</h2>
      </div>
      {formData && (
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <MasterSection formData={formData} />
          <div className="grow w-full grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Section title="مواصفات العريس">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <li>
                    <span className="font-bold">اللون :</span>{" "}
                    {formData.skinColor}
                  </li>
                  <li>
                    <span className="font-bold">المؤهل :</span>{" "}
                    {formData.qualification}
                  </li>
                  <li>
                    <span className="font-bold">الوظيفة :</span> {formData.job}
                  </li>
                  <li>
                    <span className="font-bold">الأطفال :</span>{" "}
                    {formData.hasChildren
                      ? formData.childrenNumber
                      : "بدون اطفال"}
                  </li>
                  <li>
                    <span className="font-bold">الحالة الصحية :</span>{" "}
                    {formData.illnessOrDisability
                      ? `اعانى من ${formData.healthStatus}`
                      : "لا اعانى من اي امراض او إعاقة"}
                  </li>
                  <li>
                    <span className="font-bold">الصلاة :</span>{" "}
                    {formData.prayer
                      ? "نعم احافظ على الصلاة"
                      : "لا احافظ على الصلاة"}
                  </li>
                  <li>
                    <span className="font-bold">السكن :</span>{" "}
                    {formData.housing}
                  </li>
                  <li>
                    <span className="font-bold">المنطقة :</span>{" "}
                    {formData.region}
                  </li>
                </ul>
              </Section>
              <Section title="شروط العريس">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <li>
                    <span className="font-bold">المحافظة : </span>
                    {formData.sameGovernorate
                      ? "لا أقبل الانتقال لمحافظة أخرى"
                      : "أقبل الانتقال لمحافظة أخرى"}
                  </li>
                  <li>
                    <span className="font-bold">التعدد : </span>
                    {formData.acceptPolygamy
                      ? "أنوي التعدد"
                      : "لا يوجد نية للتعدد"}
                  </li>
                  {formData.acceptPolygamy &&
                    formData.polygamyConditions !== "" && (
                      <li>
                        <span className="font-bold">شروط التعدد : </span>
                        {formData.polygamyConditions}
                      </li>
                    )}
                </ul>
              </Section>
              <Section title="المواصفات المطلوبة في العروسة">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <li>
                    <span className="font-bold">السن :</span> من{" "}
                    {formData.brideAgeRange.from} الى{" "}
                    {formData.brideAgeRange.to} سنة
                  </li>
                  <li>
                    <span className="font-bold">المؤهل :</span>{" "}
                    {formData.brideQualification}
                  </li>
                  <li>
                    <span className="font-bold">الحالة الإجماعية :</span>{" "}
                    {formData.brideMaritalStatus.join(" أو ")}
                  </li>
                  <li>
                    <span className="font-bold">الأطفال :</span>{" "}
                    {formData.brideChildren.join(" أو ")}
                  </li>
                </ul>
              </Section>
            </div>
            <div className="space-y-8">
              <Section title="شروط آخرى">
                <p className="text-gray-800 text-[4.5vw] xs:text-base">
                  {formData.otherConditions}
                </p>
              </Section>
              <Section title="ملاحظات اضافية">
                <p className="text-gray-800 text-[4.5vw] xs:text-base">
                  {formData.additionalNotes}
                </p>
              </Section>
              <Section title="إجراءات">
                <div className="space-y-3">
                  {formData.suspended ? <ContinueForm /> : <SuspendForm />}
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

export default MenFormDetails;
