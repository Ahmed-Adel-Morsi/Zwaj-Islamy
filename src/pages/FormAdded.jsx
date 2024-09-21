import { CheckCircleIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";

function FormAdded() {
  const divRef = useRef(null);
  const buttonRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    document.title = "تم إضافة الإستمارة بنجاح";

    return () => {
      document.title = "زواج اسلامى";
    };
  }, []);

  const downloadImage = () => {
    const element = divRef.current;
    const button = buttonRef.current;
    const header = headerRef.current;

    button.style.display = "none";
    const headerContent = header.innerHTML;

    header.innerHTML =
      '<h2 class="text-3xl font-bold text-white">بيانات الإستمارة</h2>';

    html2canvas(element).then((canvas) => {
      button.style.display = "inline-flex";
      header.innerHTML = headerContent;
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      console.log(link.href);
      link.download = "form.png";
      link.click();
    });
  };

  return (
    <div className="grow flex items-center mx-auto max-w-3xl px-3 xs:px-6 py-12 sm:py-16 lg:py-24 xl:py-28 lg:px-8">
      <div className="rounded-lg border overflow-hidden" ref={divRef}>
        <div className="bg-main-dark p-4 xs:p-12 text-center" ref={headerRef}>
          <CheckCircleIcon className="text-white size-[20vw] xs:size-20 mx-auto" />
          <h2 className="text-[8vw] xs:text-3xl font-bold text-white mt-4">
            تم إرسال الإستمارة بنجاح
          </h2>
          <p className="text-[5vw] xs:text-lg text-white mt-4">
            شكرا لكم على تعبئة الإستمارة، سيتم مراجعة البيانات والتواصل معكم فى
            أقرب وقت
          </p>
        </div>
        <div className="p-4 xs:p-10 text-center text-[8vw] xs:text-3xl font-semibold space-y-3 xs:space-y-7 text-gray-700">
          <div>
            <p>رقم الإستمارة</p>
            <p className="font-bold xs:mt-5 text-main text-[10vw] xs:text-4xl">
              2530
            </p>
          </div>
          <div>
            <p>الرقم السري</p>
            <p className="font-bold xs:mt-5 text-red-700 text-[10vw] xs:text-4xl">
              326728
            </p>
          </div>
          <button
            type="button"
            className="px-5 py-3 text-[4.5vw] xs:text-base font-medium text-center inline-flex items-center text-white bg-main rounded-lg hover:bg-main-hov"
            ref={buttonRef}
            onClick={downloadImage}
          >
            <PhotoIcon className="hidden xs:block size-5 me-2" />
            حفظ الصورة
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormAdded;
