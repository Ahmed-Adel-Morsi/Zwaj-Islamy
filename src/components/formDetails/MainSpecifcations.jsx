import { useState } from "react";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  EyeIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";

function Li({ icon, title, value }) {
  return (
    <li className="flex items-center gap-2">
      {icon}
      <p>
        <span className="font-bold">{title} :</span> {value}
      </p>
    </li>
  );
}

function MainSpecifcations({ formData, forMen }) {
  const [showNumber, setShowNumber] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyHandler = (e) => {
    navigator.clipboard.writeText(e.target.dataset.phone);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  const ageIcon = (
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
  );
  const socialStatusIcon = (
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
  );
  const heightIcon = (
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
  );
  const governorateIcon = (
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
  );
  const whatsappIcon = (
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
  );
  const buttonStyle =
    "grow flex-center text-[4.5vw] xs:text-sm hover:bg-black/5 p-3 xs:p-4";

  return (
    <div
      className={`p-4 xs:p-6 sm:p-8 bg-opacity-20 rounded-lg ${
        forMen ? "bg-main-hov" : "bg-orange-600"
      }`}
    >
      <ul className="space-y-4 text-gray-800 text-[4.5vw] xs:text-base">
        <Li icon={ageIcon} title="السن" value={`${formData.age} سنة`} />
        <Li
          icon={socialStatusIcon}
          title="الحالة الإجتماعية"
          value={formData.socialStatus}
        />
        <Li icon={heightIcon} title="الطول" value={`${formData.height} سم`} />
        <Li
          icon={governorateIcon}
          title="المحافظة"
          value={formData.governorate}
        />
      </ul>
      {!formData.suspended && (
        <div className="mt-6 xs:mt-10 text-center font-bold tracking-wide">
          {showNumber ? (
            <>
              <div className="flex flex-col xs:flex-row rounded-lg bg-orange-600 text-white cursor-pointer ">
                <button
                  type="button"
                  className={buttonStyle}
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
                <a href={`tel:${formData.phone}`} className={buttonStyle}>
                  <PhoneIcon className="size-[5.5vw] xs:size-5" />
                </a>
                <a
                  href={`https://wa.me/+2${formData.phone}`}
                  target="_blank"
                  className={buttonStyle}
                >
                  {whatsappIcon}
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
              {forMen ? "إظهار رقم الهاتف" : "إظهار رقم ولي الأمر"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
export default MainSpecifcations;
