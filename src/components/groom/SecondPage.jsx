import { useState } from "react";
import {
  CustomCheckbox,
  CustomDropdown,
  CustomInput,
  CustomRange,
  CustomTextarea,
} from "../CustomForm";

const statusOptions = [
  { id: "single", label: "عزباء" },
  { id: "divorced", label: "مطلقة" },
  { id: "widower", label: "أرملة" },
];
const childrenOptions = [
  { id: "withoutChildren", label: "بدون أطفال" },
  { id: "withChildren", label: "مع الأب" },
  { id: "withTheirMother", label: "مع الزوجة" },
];
const qualificationOptions = [
  {
    id: "anyThing",
    name: "أى شئ",
  },
  {
    id: "doctor",
    name: "دكتورة",
  },
  {
    id: "engineer",
    name: "مهندسة",
  },
  {
    id: "teacher",
    name: "معلمة",
  },
  {
    id: "highQualification",
    name: "مؤهل عالى",
  },
  {
    id: "graduate",
    name: "خريجة",
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
  const [anotherConditions, setAnotherConditions] = useState("");
  const [additions, setAdditions] = useState("");

  return (
    <>
      <CustomCheckbox
        label="الحالات الاجتماعية التى يمكن ان تتزوج منها"
        options={statusOptions}
        values={status}
        onChange={setStatus}
      />

      {(status.divorced || status.widower) && (
        <CustomCheckbox
          label="أطفال العروسة ( فى حالة المطلقة أو الأرملة )"
          options={childrenOptions}
          values={children}
          onChange={setChildren}
        />
      )}

      <CustomRange label="السن المناسب لك" value={age} onChange={setAge} />
      <CustomDropdown
        label="مؤهل العروسة"
        value={qualification}
        onChange={setQualification}
        options={qualificationOptions}
      />

      <CustomInput
        id="another-conditions"
        label="هل لديك أى شروط أخرى"
        type="text"
        value={anotherConditions}
        onChange={setAnotherConditions}
        placeholder="الزي الشرعي أو النقاب مثلا"
        fullWidth
      />

      <CustomTextarea
        id="additions"
        label="هل لديك أي اضافة أو ملحوظة"
        value={additions}
        onChange={setAdditions}
      />
    </>
  );
}

export default SecondPage;
