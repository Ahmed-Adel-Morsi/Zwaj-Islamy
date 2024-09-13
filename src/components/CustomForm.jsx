import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import {
  CheckIcon,
  CheckCircleIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";

export function CustomInput({
  type,
  id,
  label,
  autoComplete,
  value,
  onChange,
  fullWidth,
  min,
  max,
  placeholder,
  disabled,
}) {
  return (
    <div className={fullWidth ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="mt-2.5">
        <input
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete || "off"}
          min={min}
          max={max}
          placeholder={placeholder}
          disabled={disabled}
          className="field"
        />
      </div>
    </div>
  );
}

export function CustomDropdown({ label, options, value, onChange }) {
  return (
    <div>
      <Listbox value={value} onChange={onChange}>
        <Label className="label">{label}</Label>
        <div className="relative mt-2.5">
          <ListboxButton className="relative text-right hover:bg-black/5 cursor-pointer w-full rounded-md bg-white py-2 pl-3 pr-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-sm sm:leading-6">
            <span className="block truncate">{value.name}</span>
            <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-4 w-4 text-gray-400"
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                value={option}
                className="group relative cursor-pointer select-none py-2 pl-3 pr-5 text-gray-900 data-[focus]:bg-emerald-600 data-[focus]:text-white"
              >
                <span className="block truncate font-medium group-data-[selected]:font-semibold">
                  {option.name}
                </span>

                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-4 w-4" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}

export function CustomCheckbox({ label, values, onChange, options }) {
  const changeHandler = (id) => {
    onChange({ ...values, [id]: !values[id] });
  };
  return (
    <div className="sm:col-span-2">
      <label className="label">{label}</label>
      <div className="mt-2.5 grid grid-cols-4 gap-2">
        {options.map((option) => (
          <div
            key={option.id}
            className={`col-span-4 xs:col-span-2 sm:col-span-1 px-3.5 py-2 text-center border rounded-md text-sm font-medium select-none cursor-pointer ${
              values[option.id]
                ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                : "hover:bg-black/5 text-gray-900"
            }`}
            onClick={() => changeHandler(option.id)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CustomRadio({ label, value, onChange, fullWidth }) {
  const radioOptions = [
    { name: "yes", label: "نعم" },
    { name: "no", label: "لا" },
  ];

  return (
    <div className={fullWidth ? "sm:col-span-2" : undefined}>
      <label className="label">{label}</label>
      <RadioGroup
        by="name"
        value={value}
        onChange={onChange}
        aria-label="Server size"
        className="mt-2.5 w-full flex flex-col xs:flex-row gap-2"
      >
        {radioOptions.map((plan) => (
          <Radio
            key={plan.name}
            value={plan}
            className="group field relative flex hover:bg-black/5 cursor-pointer transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
          >
            <div className="flex w-full items-center justify-between">
              <p className="text-sm/6 font-semibold">{plan.label}</p>
              <CheckCircleIcon className="size-4 fill-emerald-500 opacity-0 transition group-data-[checked]:opacity-100" />
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}

export function CustomRange({ label, value, onChange }) {
  const changeHandler = (e) => {
    onChange((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div>
      <label className="label">{label}</label>
      <div className="mt-2.5 w-full flex flex-col xs:flex-row gap-2">
        <input
          type="number"
          name="from"
          id="from"
          value={value.from}
          onChange={changeHandler}
          autoComplete="off"
          placeholder="من"
          className="field"
        />
        <input
          type="number"
          name="to"
          id="to"
          value={value.to}
          onChange={changeHandler}
          autoComplete="off"
          placeholder="إلى"
          className="field"
        />
      </div>
    </div>
  );
}

export function CustomTextarea({ label, id, value, onChange }) {
  return (
    <div className="sm:col-span-2">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2.5">
        <textarea
          name={id}
          id={id}
          rows="4"
          onChange={(e) => onChange(e.target.value)}
          className="field"
          value={value}
        ></textarea>
      </div>
    </div>
  );
}
