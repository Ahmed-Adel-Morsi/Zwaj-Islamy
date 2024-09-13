import { useState } from "react";
import { CustomRadio } from "../CustomForm";
import VoiceRecorder from "../VoiceRecorder";

function ThirdPage() {
  const [parentApproval, setParentApproval] = useState({ name: "none" });

  return (
    <>
      <CustomRadio
        label="هل ولي الأمر على علم بشروط المبادرة"
        value={parentApproval}
        onChange={setParentApproval}
        fullWidth
      />
      <div className="sm:col-span-2">
        <details
          className={`border-0 ring-1 ring-inset ring-gray-300 rounded-md transition`}
          open
        >
          <summary className="cursor-pointer hover:bg-black/5 leading-6 font-semibold text-sm select-none px-3.5 py-2 text-gray-900">
            شروط المبادرة
          </summary>
          <div className="font-medium text-sm leading-7 px-5 pb-2">
            <ol className="list-disc list-inside">
              <li>أن العريس يجهز مسكن الزوجية بالكامل علي قدر استطاعتة</li>
              <li>
                أن المهر للزوجه يتراوح بين 20 الف جنيه الي 50 الف بحد أقصى
                والمقصود بالمهر المعجل منه مثل الشبكه والمؤخر منه المثبت في عقد
                الزواج
              </li>
            </ol>
          </div>
        </details>
      </div>
      <VoiceRecorder />
    </>
  );
}

export default ThirdPage;
