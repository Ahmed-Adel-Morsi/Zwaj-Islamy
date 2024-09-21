import { useState } from "react";
import {
  CustomInput,
  CustomDropdown,
  CustomRadio,
  CustomTextarea,
} from "../CustomForm";

const statusOptions = [
  {
    id: "single",
    name: "أعزب",
  },
  {
    id: "divorced",
    name: "مطلق",
  },
  {
    id: "widower",
    name: "أرمل",
  },
  {
    id: "married",
    name: "متزوج",
  },
];
const qualificationOptions = [
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
    name: "معلم",
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

function FirstPage() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState({ id: "none", name: "اختر" });
  const [qualification, setQualification] = useState({
    id: "none",
    name: "اختر",
  });
  const [skinColor, setSkinColor] = useState({ id: "none", name: "اختر" });
  const [governorate, setGovernorate] = useState({ id: "none", name: "اختر" });
  const [hasChildren, setHasChildren] = useState({ name: "none" });
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [acceptPolygamy, setAcceptPolygamy] = useState({ name: "none" });
  const [polygamyConditions, setPolygamyConditions] = useState("");
  const [hasDiseases, setHasDiseases] = useState({ name: "none" });
  const [illness, setIllness] = useState("");
  const [prayer, setPrayer] = useState({ name: "none" });
  const [anotherGovernorate, setAnotherGovernorate] = useState({
    name: "none",
  });
  const [aboutYourself, setAboutYourself] = useState("");
  const [housing, setHousing] = useState({
    id: "none",
    name: "اختر",
  });
  const [area, setArea] = useState({
    id: "none",
    name: "اختر",
  });

  return (
    <>
      <CustomInput
        id="full-name"
        value={fullName}
        onChange={setFullName}
        type="text"
        label="الاسم بالكامل"
        autoComplete="name"
        fullWidth
      />

      <CustomInput
        id="phone-number"
        value={phoneNumber}
        onChange={setPhoneNumber}
        type="number"
        label="رقم الهاتف"
        autoComplete="tel"
        fullWidth
      />

      <CustomDropdown
        label="الحالة الإجتماعية"
        options={statusOptions}
        value={status}
        onChange={setStatus}
      />
      <CustomDropdown
        label="المؤهل"
        options={qualificationOptions}
        value={qualification}
        onChange={setQualification}
      />

      <CustomInput
        id="age"
        value={age}
        onChange={setAge}
        type="number"
        label="السن"
        min="15"
        max="100"
      />
      <CustomInput
        id="height"
        value={height}
        onChange={setHeight}
        type="number"
        label="الطول"
        min="100"
        max="250"
      />

      <CustomDropdown
        label="لون البشره"
        options={skinColorOptions}
        value={skinColor}
        onChange={setSkinColor}
      />
      <CustomDropdown
        label="المحافظة"
        options={governorateOptions}
        value={governorate}
        onChange={setGovernorate}
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
        id="job"
        value={job}
        onChange={setJob}
        type="text"
        label="المهنة"
        fullWidth
      />

      <CustomRadio
        label="هل تحافظ على الصلوات الخمس"
        value={prayer}
        onChange={setPrayer}
      />
      <CustomRadio
        label="هل تقبل الإنتقال إلى أي محافظة أخرى"
        value={anotherGovernorate}
        onChange={setAnotherGovernorate}
      />

      {status.id !== "single" && (
        <>
          <CustomRadio
            label="هل لديك اطفال"
            value={hasChildren}
            onChange={setHasChildren}
          />
          <CustomInput
            id="numberOfChildren"
            value={numberOfChildren}
            onChange={setNumberOfChildren}
            type="number"
            label="عدد الأولاد"
            disabled={hasChildren.name !== "yes"}
          />
        </>
      )}

      <CustomRadio
        label="هل تقبل التعدد"
        value={acceptPolygamy}
        onChange={setAcceptPolygamy}
      />
      <CustomInput
        id="polygamyConditions"
        value={polygamyConditions}
        onChange={setPolygamyConditions}
        type="text"
        label="شروط التعدد"
        disabled={acceptPolygamy.name !== "yes"}
      />

      <CustomRadio
        label="هل تعانى من اى امراض أو اعاقات"
        value={hasDiseases}
        onChange={setHasDiseases}
      />
      <CustomInput
        id="illness"
        value={illness}
        onChange={setIllness}
        type="text"
        label="المرض او الإعاقه"
        disabled={hasDiseases.name !== "yes"}
      />

      <CustomTextarea
        label="تكلم عن نفسك أو ما يقوله الناس عنك"
        id="aboutYourself"
        value={aboutYourself}
        onChange={setAboutYourself}
      />
    </>
  );
}

export default FirstPage;
