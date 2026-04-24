import { useParams } from "react-router-dom";
import image from "../assets/women_profile_pic.png";
import { useState, useEffect } from "react";
import {
  ArrowPathIcon,
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
import Paragraph from "../components/formDetails/Paragraph";
import ListItem from "../components/formDetails/ListItem";
import MainSpecifcations from "../components/formDetails/MainSpecifcations";
import Section from "../components/formDetails/Section";

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

function MasterSection({ formData }) {
  return (
    <div className="w-full md:w-[22rem] h-full shrink-0 md:sticky md:top-28 md:right-0">
      <Section variant="orange" className="h-full">
        <Image />
        <div className="text-center my-6">
          <h3 className="text-[8vw] xs:text-3xl font-bold">
            {formData.socialStatus === "عزباء" ? "الآنسة" : "الأستاذة"}{" "}
            {formData.name[0]}
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
        <MainSpecifcations formData={formData} />
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
                        هاتف ولي الأمر سوف يظهر للمستخدمين الآخرين بشكل طبيعي.
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

function FormDetails() {
  const { formNumber } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const form = womenFormData.find(
      (form) => form.code === parseInt(formNumber)
    );
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
              <Section variant="orange" title="مواصفات العروسة">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <ListItem title="اللون" value={formData.skinColor} />
                  <ListItem title="المؤهل" value={formData.qualification} />
                  <ListItem title="الوظيفة" value={formData.job} />
                  <ListItem
                    title="الأطفال"
                    value={
                      formData.hasChildren
                        ? formData.childrenNumber
                        : "بدون اطفال"
                    }
                  />
                  <ListItem
                    title="الحالة الصحية"
                    value={
                      formData.illnessOrDisability
                        ? `اعانى من ${formData.healthStatus}`
                        : "لا اعانى من اي امراض او إعاقة"
                    }
                  />
                  <ListItem
                    title="الصلاة"
                    value={
                      formData.prayer
                        ? "نعم احافظ على الصلاة"
                        : "لا احافظ على الصلاة"
                    }
                  />
                </ul>
              </Section>
              <Section variant="orange" title="شروط العروسة">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <ListItem
                    title="المحافظة"
                    value={
                      formData.sameGovernorate
                        ? "لا أقبل الانتقال لمحافظة أخرى"
                        : "أقبل الانتقال لمحافظة أخرى"
                    }
                  />
                  <ListItem
                    title="التعدد"
                    value={
                      formData.acceptPolygamy ? "أقبل التعدد" : "لا أقبل التعدد"
                    }
                  />
                  {formData.acceptPolygamy &&
                    formData.polygamyConditions !== "" && (
                      <ListItem
                        title="شروط التعدد"
                        value={formData.polygamyConditions}
                      />
                    )}
                </ul>
              </Section>
              <Section variant="orange" title="المواصفات المطلوبة في العريس">
                <ul className="space-y-3 text-gray-800 list-disc list-inside [&_li::marker]:text-red-700 text-[4.5vw] xs:text-base">
                  <ListItem
                    title="السن"
                    value={`من ${formData.groomAgeRange.from} الى ${formData.groomAgeRange.to} سنة`}
                  />
                  <ListItem
                    title="المؤهل"
                    value={formData.groomQualification}
                  />
                  <ListItem
                    title="الحالة الإجماعية"
                    value={formData.groomMaritalStatus.join(" أو ")}
                  />
                  <ListItem
                    title="الأطفال"
                    value={formData.groomchildren.join(" أو ")}
                  />
                  <ListItem title="السكن" value={formData.groomHousing} />
                  <ListItem title="المنطقة" value={formData.groomRegion} />
                </ul>
              </Section>
            </div>
            <div className="space-y-8">
              <Section variant="orange" title="شروط آخرى">
                <Paragraph>{formData.otherConditions}</Paragraph>
              </Section>
              <Section variant="orange" title="ملاحظات اضافية">
                <Paragraph>{formData.additionalNotes}</Paragraph>
              </Section>
              <Section variant="orange" title="إجراءات">
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

export default FormDetails;
