import { useState } from "react";
import { CustomCheckbox } from "../CustomForm";

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
    </>
  );
}

export default SecondPage;
