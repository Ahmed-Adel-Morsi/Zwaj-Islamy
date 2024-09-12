import { useState } from "react";
import {
  CustomCheckbox,
  CustomDropdown,
  CustomInput,
  CustomRange,
  CustomTextarea,
} from "../CustomForm";

const statusOptions = [
  { id: "single", label: "أعزب" },
  { id: "divorced", label: "مطلق" },
  { id: "widower", label: "ارمل" },
  { id: "married", label: "متزوج" },
];
const childrenOptions = [
  { id: "withoutChildren", label: "بدون أطفال" },
  { id: "withChildren", label: "مع الزوج" },
  { id: "withTheirMother", label: "مع الأم" },
];
const qualificationOptions = [
  {
    id: "anyThing",
    name: "أى شئ",
  },
  {
    id: "doctor",
    name: "دكتور",
  },
  {
    id: "engineer",
    name: "مهندس",
  },
  {
    id: "teacher",
    name: "مُعلم",
  },
  {
    id: "highQualification",
    name: "مؤهل عالى",
  },
  {
    id: "graduate",
    name: "خريج",
  },
  {
    id: "diploma",
    name: "دبلوم",
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
    id: "noQualification",
    name: "بدون مؤهل",
  },
];
const housingOptions = [
  {
    id: "anyThing",
    name: "أى شئ",
  },
  {
    id: "rent",
    name: "إيجار",
  },
  {
    id: "own",
    name: "تمليك",
  },
];
const areaOptions = [
  {
    id: "anyThing",
    name: "أى شئ",
  },
  {
    id: "upscale",
    name: "راقية",
  },
  {
    id: "medium",
    name: "متوسطة",
  },
  {
    id: "popular",
    name: "شعبية",
  },
];

function SecondPage() {
  const [status, setStatus] = useState({
    single: false,
    divorced: false,
    widower: false,
    married: false,
  });
  const [children, setChildren] = useState({
    withoutChildren: false,
    withChildren: false,
    withTheirMother: false,
  });
  const [age, setAge] = useState({
    from: "",
    to: "",
  });
  const [qualification, setQualification] = useState({
    id: "none",
    name: "اختر",
  });
  const [housing, setHousing] = useState({
    id: "none",
    name: "اختر",
  });
  const [area, setArea] = useState({
    id: "none",
    name: "اختر",
  });
  const [anotherConditions, setAnotherConditions] = useState("");
  const [additions, setAdditions] = useState("");

  return (
    <>
      <CustomCheckbox
        label="الحالات الاجتماعية التى يمكن ان تتزوجي منها"
        options={statusOptions}
        values={status}
        onChange={setStatus}
      />

      {(status.divorced || status.widower) && (
        <CustomCheckbox
          label="أطفال العريس ( فى حالة المطلق أو الأرمل )"
          options={childrenOptions}
          values={children}
          onChange={setChildren}
        />
      )}

      <CustomRange label="السن المناسب لكي" value={age} onChange={setAge} />
      <CustomDropdown
        label="مؤهل العريس"
        value={qualification}
        onChange={setQualification}
        options={qualificationOptions}
      />

      <CustomDropdown
        label="السكن"
        value={housing}
        onChange={setHousing}
        options={housingOptions}
      />
      <CustomDropdown
        label="المنطقة"
        value={area}
        onChange={setArea}
        options={areaOptions}
      />

      <CustomInput
        id="another-conditions"
        label="هل لديكي أى شروط أخرى"
        type="text"
        value={anotherConditions}
        onChange={setAnotherConditions}
        placeholder="اللحية أو التدخين مثلا"
        fullWidth
      />

      <CustomTextarea
        id="additions"
        label="هل لديكي أي اضافة أو ملحوظة"
        value={additions}
        onChange={setAdditions}
      />
    </>
  );
}

export default SecondPage;
